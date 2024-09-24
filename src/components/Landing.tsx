import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  rem,
} from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.purple,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage:
      "linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, rgba(56, 0, 108, 0.2) 95%), url(/bg.jpg)",
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },

  outline_btn: {
    background: "transparent",
    color: "white",
    border: "3px solid white",
    marginLeft: "1rem",
  },
}));

export function Landing() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Empowering Your{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "#66006c", to: "#66006c" }}
              >
                Business
              </Text>{" "}
              Vision
            </Title>

            <Text className={classes.description} mt={30}>
              We envision a future where every individual, equipped with our
              tools and insights, can turn their entrepreneurial dreams into
              thriving realities.
            </Text>
            <Link href={"/services"}>
              <Button
                variant="gradient"
                gradient={{ from: "#38006c", to: "#66006c" }}
                size="xl"
                className={classes.control}
                mt={40}
              >
                Our Services
              </Button>
            </Link>
            <Link href={"/contact"}>
              <Button
                variant="gradient"
                gradient={{ from: "#38006c", to: "#66006c" }}
                size="xl"
                className={classes.outline_btn}
                mt={40}
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
