import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Orders } from "@/types/orders";
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  createContext,
  useContext,
  useState,
} from "react";

const Context = createContext<[Orders[], Function]>([[], () => {}]);

export function OrdersProvider(props: {
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
  const [orders, setOrders] = useLocalStorage("orders", []);
  return (
    <Context.Provider value={[orders, setOrders]}>
      {props.children}
    </Context.Provider>
  );
}

export function useOrdersContext() {
  return useContext(Context);
}
