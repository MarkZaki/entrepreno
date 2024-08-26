import { db } from "@/config/firebase";
import {
  GenerateOrderDetail,
  getTotalPrice,
  getTotalQuantity,
  makeid,
} from "@/helpers/general";
import { CartItem } from "@/types/cartItem";
import { Orders } from "@/types/orders";
import { setDoc, doc } from "firebase/firestore";

class ProductModel {
  async create(cart: CartItem[]) {
    const id = `BS-${makeid(5)}`;
    const order: Orders = {
      id,
      price: getTotalPrice(cart),
      quantity: getTotalQuantity(cart),
      details: GenerateOrderDetail(cart),
      createdAt: Date.now().toString(),
      paid: false,
      delivered: false,
    };
    await setDoc(doc(db, "Orders", id), order);
    return order;
  }
}

export const Order = new ProductModel();
