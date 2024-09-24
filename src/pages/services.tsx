import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Button, Title } from "@mantine/core";
import styles from "@/styles/Main.module.css";
import { Landing } from "@/components/Landing";
import { ServiceSection } from "@/components/service_cards";

export default function Home() {
  return (
    <>
      <Head>
        <title>Entrepreno | Our Services</title>
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
          <Title>Our Services</Title>
          <ServiceSection />
        </div>
      </main>
    </>
  );
}
