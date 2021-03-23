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
      avatarUrl
      bio
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
    const { avatarUrl, bio } = data?.viewer;
    const projects = data?.viewer?.pinnedItems?.nodes;

    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar />
        <main className={styles.main}>
          <Image className={styles.bioImage} src={avatarUrl} alt="Me" />
          <Text fontSize="50px" color="#0070F3">
            Software Engineer
          </Text>

          <Stack spacing={2}>
            <Text fontSize="md" align="center">
              {bio}
            </Text>
          </Stack>

          <Flex
            style={{ width: "100%", margin: ".25rem" }}
            align="center"
            justify="center"
          >
            <ProjectList projects={projects} />
          </Flex>
        </main>
      </div>
    );
  }
}
