import { CategoryModel } from "@/models/categories";
import { Category } from "@/types/category";
import React from "react";
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  createContext,
  useContext,
} from "react";

const Context = createContext<[Category[], Function]>([[], () => {}]);

export function CategoriesProvider(props: {
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
  const [products, setProducts] = React.useState<Category[]>([]);

  React.useEffect(() => {
    CategoryModel.getAll().then((data) => setProducts(data));
  }, []);

  return (
    <Context.Provider value={[products, setProducts]}>
      {props.children}
    </Context.Provider>
  );
}

export function useCategoriesContext() {
  return useContext(Context);
}
