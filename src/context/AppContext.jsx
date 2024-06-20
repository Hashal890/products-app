import { useState, createContext, useEffect } from "react";
import { productsData } from "../assets/data";

export const AppContext = createContext();

const localStorageProductsData =
  JSON.parse(
    localStorage.getItem("products-data-products-app-frontend-assignment")
  ) || productsData;
const localStorageCartData =
  JSON.parse(
    localStorage.getItem("cart-data-products-app-frontend-assignment")
  ) || [];
const localStorageUserName =
  localStorage.getItem("user-name-products-app-frontend-assignment") ||
  "Hello User";

const initData = {
  productsData: localStorageProductsData,
  cartData: localStorageCartData,
  userName: localStorageUserName,
};

export const AppContextProvider = ({ children }) => {
  const [data, setData] = useState(initData);

  const addCartData = (newCartItem) => {
    const newCartData = [...data.cartData, newCartItem];
    const newData = { ...data, cartData: newCartData };
    setData(newData);
    localStorage.setItem(
      "cart-data-products-app-frontend-assignment",
      JSON.stringify(newCartData)
    );
  };

  const removeItemFromCart = (id) => {
    const removedCartDataItems = data.cartData.filter((el) => el.id !== id);
    const newData = { ...data, cartData: removedCartDataItems };
    setData(newData);
    localStorage.setItem(
      "cart-data-products-app-frontend-assignment",
      JSON.stringify(removedCartDataItems)
    );
  };

  const emptyCartData = () => {
    setData({ ...data, cartData: [] });
    localStorage.setItem(
      "cart-data-products-app-frontend-assignment",
      JSON.stringify([])
    );
  };

  const getProductsData = () => {
    fetch("https://jsonmockserver.onrender.com/nbFruits&Veg")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        localStorage.setItem(
          "products-data-products-app-frontend-assignment",
          JSON.stringify(res)
        );
      })
      .catch((err) => console.log(err));
  };

  const editUserName = (newUserName) => {
    localStorage.setItem(
      "user-name-products-app-frontend-assignment",
      newUserName
    );
    setData({
      ...data,
      userName: newUserName,
    });
  };

  useEffect(() => {
    localStorage.setItem("chakra-ui-color-mode", "light");
    localStorage.setItem(
      "products-data-products-app-frontend-assignment",
      JSON.stringify(productsData)
    );
    // getProductsData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        getProductsData,
        addCartData,
        removeItemFromCart,
        emptyCartData,
        editUserName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
