import { SERVICES } from "@/settings/services";
import { TEAM } from "@/settings/team";
import {
  Box,
  Image,
  Text,
  Grid,
  Container,
  Button,
  Card,
  Group,
  Badge,
  useMantineTheme,
} from "@mantine/core";

import React from "react";

export const ServiceSection = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Container style={{ marginTop: "3rem" }}>
        <Grid gutter="xl">
          {SERVICES.map((service) => (
            <Grid.Col key={service} xs={12} sm={12} md={6} lg={4}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={900}>🔖 {service.toUpperCase()}</Text>
                </Group>

                <Text size="sm" c="dimmed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore sequi dolores et repellendus ea iusto incidunt fugit
                  dicta deserunt. Illo, facilis nulla aliquam cupiditate iste
                  cum hic numquam atque consequuntur!
                </Text>

                <Button color={"grape"} fullWidth mt="md" radius="md">
                  Book Now ✅
                </Button>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
};
