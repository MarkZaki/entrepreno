import {
  createStyles,
  Anchor,
  Group,
  ActionIcon,
  rem,
  Image,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(30),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.sm} ${theme.spacing.sm}`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

export function BeanFooter({ links }: FooterCenteredProps) {
  const { classes } = useStyles();

  const { colorScheme } = useMantineColorScheme();

  const items = links.map((link) => (
    <Link
      color="dimmed"
      key={link.label}
      href={link.link}
      className="footer-link"
    >
      {link.label}
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Link href={"/"}>
          <Image
            src={`/logo-${colorScheme}.png`}
            style={{ width: "5rem" }}
            alt={"Entrepreno"}
          />
        </Link>
        <Group className={classes.links}>{items}</Group>

        <Group spacing="xs" position="right" noWrap>
          <a href="#" target="_blank">
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandFacebook size="1.05rem" stroke={1.5} color="blue" />
            </ActionIcon>
          </a>
          <a href="#" target="_blank">
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandInstagram size="1.05rem" stroke={1.5} color="pink" />
            </ActionIcon>
          </a>
          <a href="#" target="_blank">
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandWhatsapp size="1.05rem" stroke={1.5} color="green" />
            </ActionIcon>
          </a>
        </Group>
      </div>
    </div>
  );
}
