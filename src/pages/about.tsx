import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Accordion, Button, Container, Title } from "@mantine/core";
import styles from "@/styles/Main.module.css";
import { Landing } from "@/components/Landing";
import { ABOUT } from "@/settings/about";

export default function Home() {
  const items = ABOUT.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <>
      <Head>
        <title>Entrepreno | About Us</title>
        <meta
          name="description"
          content="Entrepreno is specialized in empowering your business vision. We make great deals and offers daily. Stay tuned"
        />
        <meta
          name="google-site-verification"
          content="G4x_Sw97MCCGbAYQtTXlYpa0Wzob0vCiPlvgo3bPcD0"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Title>About Us</Title>
          <div style={{ marginTop: "3rem", marginBottom: "2rem" }}>
            <Container>
              <Accordion variant="separated" radius="md" defaultValue="Apples">
                {items}
              </Accordion>
            </Container>
          </div>
        </div>
      </main>
    </>
  );
}
