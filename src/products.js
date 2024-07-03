import { LoaderCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import LoaderSimple from "./Loader";
import '../src/Product.css';

const items = [
  {
    name: "Italian-Style Chicken Meatball ",
    price: "$8.45",
    description:
      "Lasagna - a layered pasta with meat sauce, cheese & vegetables ",
    image:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  },
  {
    name: "Seafood Stuffed Alaskan Salmon",
    price: "$8.45",
    description:
      "Osso Buco - a slow-cooked veal shank served with a flavorful sauce",
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
  {
    name: "Seafood Stuffed Alaskan Salmon",
    price: "$8.45",
    description:
      "Osso Buco - a slow-cooked veal shank served with a flavorful sauce",
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
  {
    name: "Seafood Stuffed Alaskan Salmon",
    price: "$8.45",
    description:
      "Osso Buco - a slow-cooked veal shank served with a flavorful sauce",
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
  {
    name: "Seafood Stuffed Alaskan Salmon",
    price: "$8.45",
    description:
      "Osso Buco - a slow-cooked veal shank served with a flavorful sauce",
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
];

export function Products() {
 
  
  
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [dishes, setDishes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(null);
    const [errormeal, setErrormeal] = useState(null);
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
  
          // Removed Dishes
          const filteredCategories = data.meals.filter(
            meal =>
              // meal.strCategory !== "Beef" &&
              meal.strCategory !== "Goat" &&
              meal.strCategory !== "Miscellaneous" &&
              // meal.strCategory !== "Pork" &&
              meal.strCategory !== "Side" &&
              meal.strCategory !== "Starter" &&
              meal.strCategory !== "Vegan"
          );
  
          setCategories(filteredCategories);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchCategories();
    }, []);
  
    useEffect(() => {
      const fetchDishes = async () => {
        setLoad(true);
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setDishes(data.meals || []); // Ensure dishes is set to an empty array if null
        } catch (errormeal) {
          setErrormeal(errormeal);
        } finally {
          setLoad(false);
        }
      };
  
      fetchDishes();
    }, [category]);
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    if (errormeal) {
      return <div>Error: {errormeal.message}</div>;
    }
  
    return (
      <>
        <div className="p-container">
          <div className="text-center">
            <h2 className="heading-primary">Shop By Category</h2>
            <h1 className="heading-secondary">Top Dishes Of Restaurant</h1>
          </div>
        
          {!loading ? (
            <div>
              <div className="grid-container">
                {categories.map((cat, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCategory(cat.strCategory)}
                    class={`button ${
                      category === cat.strCategory ? "button-active" : ""
                    }`}
                  >
                    {cat.strCategory}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <LoaderSimple />
          )}
        </div>
  
        {!load ? (
          <section className="table-section">
            <div className="table-wrapper">
              <div className="table-container">
                <div className="table-content">
                  <div className="table-left">
                    <table className="table">
                      <tbody className="table-body">
                        {dishes.length > 0 && // Check if dishes is not empty
                          dishes
                            .slice(0, Math.ceil(dishes.length / 2))
                            .map((dish) => (
                              <tr key={dish.idMeal}>
                                <td className="table-cell">
                                  <div className="cell-content">
                                    <div className="cell-details">
                                      <div className="cell-image-wrapper">
                                        <img
                                          className="cell-image"
                                          src={dish.strMealThumb}
                                          alt=""
                                        />
                                      </div>
                                      <div className="cell-text-wrapper">
                                        <div className="cell-title">
                                          <div
                                            className="cell-name"
                                            title={dish.strMeal}
                                          >
                                            {dish.strMeal}
                                          </div>
                                        </div>
                                        <div className="cell-description">
                                          {dish.description}
                                        </div>
                                        <div className="cell-static-text">
                                          "Osso Buco - a slow-cooked veal shank served with a flavorful sauce"
                                        </div>
                                      </div>
                                    </div>
                                    <div className="cell-price">
                                      <div className="cell-amount">{dish.price}$8.45</div>
                                      <div className="cell-link">
                                        <a href="#" className="link-text">
                                          Shop Now &#8594;
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                      </tbody>
                    </table>
                  </div>
  
                  <div className="table-right">
                    <table className="table">
                      <tbody className="table-body">
                        {dishes.length > 0 && // Check if dishes is not empty
                          dishes
                            .slice(Math.ceil(dishes.length / 2))
                            .map((dish) => (
                              <tr key={dish.idMeal}>
                                <td className="table-cell">
                                  <div className="cell-content">
                                    <div className="cell-details">
                                      <div className="cell-image-wrapper">
                                        <img
                                          className="cell-image"
                                          src={dish.strMealThumb}
                                          alt=""
                                        />
                                      </div>
                                      <div className="cell-text-wrapper">
                                        <div className="cell-title">
                                          <div
                                            className="cell-name"
                                            title={dish.strMeal}
                                          >
                                            {dish.strMeal}
                                          </div>
                                        </div>
                                        <div className="cell-description">
                                          {dish.description}
                                        </div>
                                        <div className="cell-static-text">
                                          "Osso Buco - a slow-cooked veal shank served with a flavorful sauce"
                                        </div>
                                      </div>
                                    </div>
                                    <div className="cell-price">
                                      <div className="cell-amount">{dish.price}$8.45</div>
                                      <div className="cell-link">
                                        <a href="#" className="link-text">
                                          Shop Now &#8594;
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <LoaderSimple />
        )}
      </>
    );
  };
  
  export default Products;
  