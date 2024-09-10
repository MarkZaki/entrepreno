import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Button, Title, Text, useMantineColorScheme } from "@mantine/core";
import styles from "@/styles/Main.module.css";
import css from "@/styles/Index.module.css";
import { Landing } from "@/components/Landing";
import { TeamSection } from "@/components/Team";

export default function Home() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <Head>
        <title>Entrepreno | Home</title>
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
        <Landing />
        <div className={styles.container}>
          <div id="summary">
            <Title>Who are we?</Title>
            <Text
              className={css.about_text}
              color={colorScheme === "light" ? "#545252" : ""}
            >
              Entrepreno is a dynamic startup designed to empower university
              students, young entrepreneurs, and business owners. For university
              students, we offer specialized courses aligned with their academic
              majors, essential career-building skills like CV writing and
              leadership, and guidance to launch their own online ventures. For
              young entrepreneurs and business owners, we provide a
              comprehensive suite of services including: Marketing & Social
              Media Advertising: Crafting impactful campaigns to elevate your
              brand. Media Management: Expert graphic design, video editing, and
              marketing strategies to enhance your online presence. Human
              Resources: Connecting you with both experienced professionals and
              promising fresh talent. Entrepreneurship Courses: Tailored
              training to refine your business acumen and drive success. At
              Entrepreno, we are committed to nurturing the next generation of
              business leaders by offering the tools, knowledge, and support
              they need to thrive.
            </Text>
          </div>
          <div>
            <Title className={styles.team_section}>Our Team</Title>
            <TeamSection />
          </div>
        </div>
      </main>
    </>
  );
}
