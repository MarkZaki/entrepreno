import { useCartContext } from "@/context/cart";
import { getTotalPrice, getTotalQuantity } from "@/helpers/general";
import {
  Card,
  Title,
  Text,
  Divider,
  Grid,
  Button,
  Modal,
  Image,
} from "@mantine/core";
import { IconBrandWhatsapp, IconClearAll } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Key, useState } from "react";
import { Order } from "@/models/order";
import { useOrdersContext } from "@/context/order";

export function CartPayment() {
  const [cart, setCart] = useCartContext();
  const [orders, setOrders] = useOrdersContext();

  const [opened, { open, close }] = useDisclosure(false);

  const [id, setId] = useState<String>("");

  const pay = async () => {
    const order = await Order.create(cart);
    setId(order.id);
    setOrders([order, ...orders]);
    open();
  };

  return (
    <Card shadow="sm" withBorder padding="xl" component="a">
      <Title style={{ textAlign: "center" }} order={2}>
        بيانات الدفع
      </Title>
      <Divider style={{ margin: "1rem" }} />
      {cart.map((item) => (
        <Text key={item.product.id as Key}>
          {item.product.name} x {item.quantity} ={" "}
          <b>{item.product.price * item.quantity} EGP</b>
        </Text>
      ))}
      <Divider style={{ margin: "1rem" }} />
      <div>
        <Grid>
          <Grid.Col span={4}>
            <b>الكمية:</b>
          </Grid.Col>
          <Grid.Col span={4} offset={4} style={{ textAlign: "right" }}>
            {getTotalQuantity(cart)} اشياء
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={4}>
            <b>السعر الكلي:</b>
          </Grid.Col>
          <Grid.Col span={4} offset={4} style={{ textAlign: "right" }}>
            <b>{getTotalPrice(cart)}</b> EGP
          </Grid.Col>
        </Grid>
      </div>
      <Modal
        opened={opened}
        onClose={close}
        title="Payment"
        style={{ textAlign: "center", margin: "auto" }}
      >
        <Image
          src={"./cash.png"}
          alt="Vodaphone Cash"
          style={{ width: "20%", textAlign: "center", margin: "auto" }}
        />
        <Title order={5} style={{ margin: "2rem 0" }}>
          تم تأكيد طلبك ورقم طلبك هو:{" "}
          <Text color="red">{id.length > 0 && id}</Text>
        </Title>
        <Title order={5} style={{ margin: "2rem 0" }} color="green">
          التقط صورة لهذه الصفحة!
        </Title>
        <Title order={3} style={{ margin: "2rem 0" }}>
          ارسل{" "}
          <i>
            <b>{getTotalPrice(cart)} جنيه</b>
          </i>{" "}
          الى{" "}
          <b>
            <i>+201099199793</i>
          </b>{" "}
          عن طريق فودافون كاش و ارسل صورة للعملية من هاتفك الى واتساب الخاص بنا{" "}
        </Title>
        <Button
          variant="gradient"
          gradient={{ from: "orange", to: "red" }}
          radius="xl"
          style={{ width: "100%", marginTop: "1rem" }}
          size="lg"
          uppercase
          onClick={() => {
            close();
            setCart([]);
          }}
        >
          انهي
        </Button>
        <a href="https://wa.me/201223861103" target="_blank">
          <Button
            variant="gradient"
            gradient={{ from: "green", to: "teal" }}
            radius="xl"
            style={{ width: "100%", marginTop: "1rem" }}
            size="lg"
            uppercase
          >
            <IconBrandWhatsapp style={{ marginRight: ".5rem" }} /> Go To
            Whatsapp
          </Button>
        </a>
      </Modal>
      <Button
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan" }}
        radius="xl"
        style={{ width: "100%", marginTop: "1rem" }}
        size="lg"
        uppercase
        onClick={() => pay()}
      >
        تأكيد الطلب
      </Button>
      <a href="https://wa.me/201223861103" target="_blank">
        <Button
          variant="gradient"
          gradient={{ from: "green", to: "teal" }}
          radius="xl"
          style={{ width: "100%", marginTop: "1rem" }}
        >
          <IconBrandWhatsapp style={{ marginRight: ".5rem" }} /> Whatsapp دعم
        </Button>
      </a>
      <Button
        variant="gradient"
        gradient={{ from: "orange", to: "red" }}
        radius="xl"
        style={{ width: "100%", marginTop: "1rem" }}
        onClick={() => setCart([])}
      >
        <IconClearAll style={{ marginRight: ".5rem" }} /> مسح السلة
      </Button>
    </Card>
  );
}
