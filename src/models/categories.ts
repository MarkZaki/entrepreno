import { db } from "@/config/firebase";
import { Category } from "@/types/category";
import {
  collection,
  getDocs,
  CollectionReference,
  DocumentData,
} from "firebase/firestore";

class CategroiesModel {
  dbInstance: CollectionReference<DocumentData>;

  constructor() {
    this.dbInstance = collection(db, "categories");
  }

  async getAll(): Promise<Category[]> {
    const data = await getDocs(this.dbInstance);
    return data.docs.map((item) => {
      const { name, image } = item.data();
      return { id: item.id, name, image };
    });
  }
}

export const CategoryModel = new CategroiesModel();
