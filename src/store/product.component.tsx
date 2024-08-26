import { Products } from "@/types/products";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { useCartContext } from "@/context/cart";
import { isItemInCart, getIndexOfItem } from "@/helpers/general";
import { notifications } from "@mantine/notifications";
import { IconGardenCart } from "@tabler/icons-react";
import { useColorScheme } from "@mantine/hooks";
import Link from "next/link";

export function BeansProduct(props: { product: Products }) {
  const [cart, setCart] = useCartContext();
  const theme = useMantineTheme();
  const scheme = useColorScheme();
  const addToCart = () => {
    if (!isItemInCart(cart, props.product.id)) {
      setCart([...cart, { quantity: 1, product: props.product }]);
    } else {
      const indexOfFindedObject = getIndexOfItem(cart, props.product.id);
      const oldObject = cart[indexOfFindedObject];
      oldObject.quantity += 1;
      const newCart = cart;
      newCart.splice(indexOfFindedObject, 1);
      setCart([...newCart, oldObject]);
    }
    notifications.show({
      id: "add-to-cart",
      withCloseButton: true,
      onClose: () => console.log("unmounted"),
      onOpen: () => console.log("mounted"),
      // autoClose: 5000,
      title: `تم اضافة${props.product.name} الى السلة`,
      message: (
        <Link href={"/cart"} onClick={() => notifications.clean()}>
          الذهاب الى السلة
        </Link>
      ),
      color: "#FFFFFF",
      icon: <IconGardenCart color="white" />,
      className: "my-notification-class",
      style: { backgroundColor: "#157654" },
      sx: { backgroundColor: "#157654" },
      loading: false,
    });
  };
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={props.product.image as string}
          height={160}
          alt={props.product.name as string}
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{props.product.name}</Text>
        <Badge color="pink" variant="light" size="lg">
          {props.product.price} EGP
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {props.product.description}
      </Text>

      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={addToCart}
      >
        اضافة الى السلة{" "}
      </Button>
    </Card>
  );
}
