import { useCartContext } from "@/context/cart";
import { Table, ActionIcon } from "@mantine/core";
import { IconTrash, IconPlus, IconMinus } from "@tabler/icons-react";
import React from "react";
import { Key } from "react";

export function CartList() {
  const [cart, setCart] = useCartContext();

  const deleteItemAt = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const minusOne = (index: number) => {
    if (cart[index].quantity === 1) {
      deleteItemAt(index);
    } else {
      const newCart = [...cart];
      newCart[index].quantity -= 1;
      setCart(newCart);
    }
  };

  const plusOne = (index: number) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th style={{ textAlign: "right" }}>الاسم:</th>
            <th style={{ textAlign: "right" }}>السعر:</th>
            <th style={{ textAlign: "right" }}>الكمية:</th>
            <th style={{ textAlign: "right" }}>اجمالي:</th>
            <th style={{ textAlign: "right" }}>ازالة:</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((element, index) => (
            <tr key={element.product.id as Key}>
              <td>{element.product.name}</td>
              <td>
                {element.product.price} <b>EGP</b>
              </td>
              <td style={{ display: "flex", gap: ".5rem" }}>
                <ActionIcon
                  variant="filled"
                  color="red"
                  radius={"xl"}
                  size={"xs"}
                  onClick={() => minusOne(index)}
                >
                  <IconMinus size="1rem" />
                </ActionIcon>
                {element.quantity}
                <ActionIcon
                  variant="filled"
                  size={"xs"}
                  radius={"xl"}
                  color="blue"
                  onClick={() => plusOne(index)}
                >
                  <IconPlus size="1rem" />
                </ActionIcon>
              </td>
              <td>
                {element.product.price * element.quantity} <b>EGP</b>
              </td>
              <td>
                <ActionIcon
                  variant="filled"
                  color="red"
                  onClick={() => deleteItemAt(index)}
                >
                  <IconTrash size="1rem" />
                </ActionIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
