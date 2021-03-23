import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../src/Components/NavBar";
import ProjectList from "../src/Components/ProjectList";
import { useGQLQuery } from "../src/Components/hooks/useGQLQuery";
import { gql } from "graphql-request";

import {
  Button,
  Flex,
  Box,
  Stack,
  Text,
  Image,
  Spinner,
} from "@chakra-ui/react";

const query = gql`
  query {
    viewer {
      pinnedItems(first: 4) {
        nodes {
          ... on Repository {
            name
            openGraphImageUrl
            description
            url
            languages(first: 100) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export default function Home(props) {
  const { data, isLoading, error } = useGQLQuery("viewer", query, {
    initialData: props?.viewer,
  });

  if (isLoading) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar />
        <main className={styles.main}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </main>
      </div>
    );
  } else {
    const projects = data?.viewer?.pinnedItems?.nodes;

    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar />
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <Stack spacing={2}>
            <Text fontSize="md" align="center">
              Hello Im Braden, Im a full-time Software Engineer who specializes
              in JavaScript.
            </Text>
            <Text fontSize="md" align="center">
              Check out some of my work in the Projects section.
            </Text>
          </Stack>

          <Flex style={{ width: "100%" }} align="center" justify="center">
            <ProjectList projects={projects} />
          </Flex>
        </main>
      </div>
    );
  }
}
