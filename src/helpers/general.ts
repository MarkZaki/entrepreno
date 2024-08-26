import { CartItem } from "@/types/cartItem";

export const isItemInCart = (cart: CartItem[], itemId: String) => {
  return cart.filter((item) => item.product.id === itemId).length > 0;
};

export const getIndexOfItem = (cart: CartItem[], itemId: String) => {
  return cart.findIndex((item) => item.product.id === itemId);
};

export const getTotalPrice = (cart: CartItem[]) => {
  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice += item.product.price * item.quantity;
  });
  return totalPrice;
};

export const getTotalQuantity = (cart: CartItem[]) => {
  let total = 0;
  cart.forEach((item) => {
    total += item.quantity;
  });
  return total;
};

export function makeid(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export const GenerateOrderDetail = (cart: CartItem[]) => {
  let txt = "";
  cart.forEach((item) => {
    txt += `${item.product.name} x ${item.quantity}-`;
  });
  return txt;
};
