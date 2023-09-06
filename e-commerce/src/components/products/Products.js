import { useContext, useEffect } from "react";
import { ShopContext } from '../../context/context';
import { Loading } from "../";
import Cards from "./Cards";
import "./products.css";

export default function Products() {
  const { filter, type, loading, setFilter, data, setType, term, getFilteredData, filteredData } = useContext(ShopContext);

  const handleFilter = (e) => {
    if (e.target.dataset.type === 'all') {
      setFilter(data)
    } else {
      const updatedList = data.filter((item) => item.category === e.target.dataset.type);
      setFilter(updatedList);
    }
    setType(e.target.dataset.type);
  };

  useEffect(() => {
    if (!term.length) {
      getFilteredData(filter);
    } else {
      getFilteredData(filter.filter(item => item.title.toLowerCase().indexOf(term) > -1));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term, filter]);

  return (
    <>
      <div className="product_wrapper">
        <div className="radio_container" data-aos="zoom-out">
          <div className="selector">
            <div className="selector-item" data-aos-delay="500" data-aos="fade-left"
            >
              <input
                type="radio" id="radio1" name="selector"
                className="selector-item_radio" data-type="all"
                onChange={handleFilter}
                checked={type === "all"}
              />
            </div> 
           
          </div>
        </div>
      </div>
      <div className="cards_wrapper">
        {filteredData.map((item) =>
          loading ? (
            <Loading key={item.id} />
          ) : (
            <Cards {...item} key={item.id} />
          )
        )}
      </div>
    </>
  );
}
