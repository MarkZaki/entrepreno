import { TEAM } from "@/settings/team";
import { Box, Image, Text, Grid, Container } from "@mantine/core";

import React from "react";

export const TeamSection = () => {
  return (
    <>
      <Container style={{ marginTop: "3rem" }}>
        <Grid gutter="xl">
          {TEAM.map((member) => (
            <Grid.Col key={member.name} xs={12} sm={6} md={4} lg={3}>
              <Box
                style={{
                  textAlign: "center",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={`/team/${member.name.split(" ")[0].toLowerCase()}.jpeg`}
                  alt={member.name}
                  width={180}
                  height={180}
                  radius="50%"
                  mx="auto"
                />
                <Text weight={500} size="xl" mt="sm">
                  {member.name}
                </Text>
                <Text color="dimmed" size="md">
                  {member.rule}
                </Text>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
};
