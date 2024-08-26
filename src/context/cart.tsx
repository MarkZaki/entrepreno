import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartItem } from "@/types/cartItem";
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  createContext,
  useContext,
  useState,
} from "react";

const Context = createContext<[CartItem[], Function]>([[], () => {}]);

export function CartProvider(props: {
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
  const [cart, setCart] = useLocalStorage("cart", []);
  return (
    <Context.Provider value={[cart, setCart]}>
      {props.children}
    </Context.Provider>
  );
}

export function useCartContext() {
  return useContext(Context);
}
