import React, { useState, useEffect } from "react";
import prodimg from "../../assets/images/21.jpg";
import prodimg1 from "../../assets/images/45.jpg";
import prodimg2 from "../../assets/images/49.jpg";
import cream1 from "../../assets/images/cream1.jpg";
import cream2 from "../../assets/images/cream2.jpg";
import cream3 from "../../assets/images/cream3.jpg";
import cream4 from "../../assets/images/cream4.jpg";
import cream5 from "../../assets/images/cream5.jpg";
import TabProduct from "../Tab/TabProduct";
import axios from "axios";

const FeatureProduct = () => {
  const [toggle, setToggle] = useState(1);

  const [whislist, setwhislist] = useState([]);

  const updateToggle = (id) => {
    setToggle(id);
  };

  const [feature, setFeature] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setFeature(res.data.products);
    });
  }, []);

  const AddtoWhishlist = (whislist_item) => {
    const new_whish = {
      id: whislist_item.id,
      image: whislist_item.thumbnail,
      brand: whislist_item.brand,
      title: whislist_item.title,
      price: whislist_item.price,
    };

    var exists = whislist.some((item) => item.id == whislist_item.id);
    if (exists) {
      // for true condition
      setwhislist(whislist.filter((item) => item.id != whislist_item.id));
    } else {
      // for false condition
      setwhislist([...whislist, new_whish]);
    }
  };
  // console.log(whislist);

  const Closedata = (id) => {
    setwhislist(whislist.filter((item) => item.id != id));
  };

  return (
    <>
      <h3>Testing</h3>
      {whislist.map((item, i) => (
        <div
          key={i}
          className="flex border-2 bg-black text-white rounded-3xl py-4 shadow-md relative m-auto mb-2 w-3/4"
        >
          <div className="absolute right-0" onClick={() => Closedata(item.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-6 ml-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <table className="w-tablewidth" id="cart-table">
            <thead>
              <tr>
                <th className="text-center w-1/4">Item</th>
                <th className="text-start w-1/4">Detail</th>
                <th className="text-start w-1/4">Price</th>
                <th className="text-start w-1/4">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img className="w-28 m-auto" src={item.image}></img>
                </td>
                <td>
                  <p>Brand : {item.brand}</p>
                  <p>Model : {item.title}</p>
                </td>
                <td>{item.price}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="text-end" colSpan="3">
                  Total:{" "}
                  {whislist.reduce((total, item) => {
                    return total + item.price;
                  }, 0)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      ))}

      <div>
        <table>
          <tbody>
            <tr>
              <td>
                total price :
                {whislist.reduce((total, item) => {
                  return total + item.price;
                }, 0)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p>count whishlist : {whislist.length}</p>
      </div>
      <div>
        <div>
          <ul
            className="flex flex-wrap justify-center mb-5"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                onClick={() => updateToggle(1)}
                className={`inline-block text-gray-500 rounded-t-lg py-4 px-4 text-sm font-bold text-center border-transparent border-b-2 ${
                  toggle == 1 && "border-blue-500 border-b-3 active"
                }`}
                id="featured-tab"
                data-tabs-target="#featured"
                type="button"
                role="tab"
                aria-controls="featured"
                aria-selected="true"
              >
                Featured
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                onClick={() => updateToggle(2)}
                className={`inline-block text-gray-500 rounded-t-lg py-4 px-4 text-sm font-bold text-center border-transparent border-b-2 ${
                  toggle == 2 && "border-blue-500 border-b-3 active"
                }`}
                id="bestseller-tab"
                data-tabs-target="#bestseller"
                type="button"
                role="tab"
                aria-controls="bestseller"
                aria-selected="false"
              >
                Best Seller
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                onClick={() => updateToggle(3)}
                className={`inline-block text-gray-500 rounded-t-lg py-4 px-4 text-sm font-bold text-center border-transparent border-b-2 ${
                  toggle == 3 && "border-blue-500 border-b-3 active"
                }`}
                id="newarrivals-tab"
                data-tabs-target="#newarrivals"
                type="button"
                role="tab"
                aria-controls="newarrivals"
                aria-selected="false"
              >
                New Arrivals
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent" data-aos="flip-down">
          {toggle === 1 && (
            <div
              className="container w-4/5 m-auto"
              id="featured"
              role="tabpanel"
              aria-labelledby="featured-tab"
            >
              <div className="flex flex-wrap">
                {feature.map((item) => (
                  <TabProduct
                    key={item.id}
                    item={item}
                    AddtoWhishlist={AddtoWhishlist}
                  />
                ))}
              </div>
            </div>
          )}

          {toggle === 2 && (
            <div
              className="container w-4/5 m-auto"
              id="bestseller"
              role="tabpanel"
              aria-labelledby="bestseller-tab"
            >
              <div className="flex flex-wrap">
                {feature.slice(20, 28).map((item) => (
                  <TabProduct key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
          {toggle === 3 && (
            <div
              className="container w-4/5 m-auto"
              id="newarrivals"
              role="tabpanel"
              aria-labelledby="newarrivals-tab"
            >
              <div className="flex flex-wrap">
                {feature.slice(15, 19).map((item) => (
                  <TabProduct key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
