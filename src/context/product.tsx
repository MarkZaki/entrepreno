import { Product } from "@/models/product";
import { Products } from "@/types/products";
import React from "react";
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  createContext,
  useContext,
  useState,
} from "react";

const Context = createContext<[Products[], Function]>([[], () => {}]);

export function ProductsProvider(props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  const [products, setProducts] = React.useState<Products[]>([]);

  React.useEffect(() => {
    Product.getAll().then((data) => setProducts(data));
  }, []);

  return (
    <Context.Provider value={[products, setProducts]}>
      {props.children}
    </Context.Provider>
  );
}

export function useProductsContext() {
  return useContext(Context);
}
