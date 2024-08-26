import { db } from "@/config/firebase";
import { Products } from "@/types/products";
import {
  collection,
  getDocs,
  CollectionReference,
  DocumentData,
} from "firebase/firestore";

class ProductModel {
  dbInstance: CollectionReference<DocumentData>;

  constructor() {
    this.dbInstance = collection(db, "Products");
  }

  async getAll(): Promise<Products[]> {
    const data = await getDocs(this.dbInstance);
    return data.docs.map((item) => {
      const { name, price, description, image, category } = item.data();
      return { name, price, description, category, image, id: item.id };
    });
  }
}

export const Product = new ProductModel();
