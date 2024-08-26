import { Products } from "@/types/products";
import { SimpleGrid, Input, Divider } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { BeansProduct } from "./product.component";
import { Key } from "react";
import React from "react";
import { Categories } from "@/components/Categories";
import { useCategoriesContext } from "@/context/categories";

export function BeansProducts(props: {
  products: Products[];
  search: Boolean;
}) {
  const [products, setProducts] = React.useState<Products[]>(props.products);
  const [categories, setCategories] = useCategoriesContext();
  const [searchTerm, setSearchTerm] = React.useState<String>("");

  const search = (v: String) => {
    const term = v.toLowerCase();
    setSearchTerm(term);
    if (term === "") {
      setProducts(props.products);
    } else {
      setProducts([
        ...products.filter(
          (p) =>
            p.name.toLowerCase().includes(term as string) ||
            p.description.toLowerCase().includes(term as string)
        ),
      ]);
    }
  };

  return (
    <>
      {props.search && (
        <Input
          icon={<IconSearch />}
          placeholder="بحث"
          value={searchTerm as string}
          onChange={(e) => search(e.target.value.trim())}
          radius={"lg"}
          style={{ margin: "0 auto 3rem auto", width: "80%" }}
        />
      )}
      {props.search && <Categories categories={categories} />}
      <Divider style={{ margin: "0 auto 3rem auto", width: "80%" }} />
      <SimpleGrid
        cols={3}
        spacing={"lg"}
        breakpoints={[
          { maxWidth: "md", cols: 3, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        {products.map((p) => (
          <BeansProduct product={p} key={p.id as Key} />
        ))}
      </SimpleGrid>
    </>
  );
}
