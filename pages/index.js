import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../src/Components/NavBar";
import { useGQLQuery } from "../src/Components/hooks/useGQLQuery";
import { gql } from "graphql-request";

import { Button, Flex, Box, Stack, Text, Image } from "@chakra-ui/react";

const query = gql`
  query {
    viewer {
      pinnedItems(first: 6) {
        nodes {
          ... on Repository {
            name
            openGraphImageUrl
            description
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

  const {
    description,
    openGraphImageUrl: image,
    name,
  } = data.viewer.pinnedItems.nodes[0];

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
            Hello Im Braden, Im a full-time Software Engineer who specializes in
            JavaScript.
          </Text>
          <Text fontSize="md" align="center">
            Check out some of my work in the Projects section.
          </Text>
        </Stack>

        <Flex style={{ width: "100%" }} align="center" justify="center">
          <Box
            style={{ margin: ".25rem" }}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
              src={image}
              alt={image}
              htmlWidth="350px"

            />
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
                              {description}
            </Box>
          </Box>
          <Box
            style={{ margin: ".25rem" }}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
              src="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"
              alt="computer Img"
              htmlWidth="350px"
            />
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              Some Text
            </Box>
          </Box>
          <Box
            style={{ margin: ".25rem" }}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
              src="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"
              alt="computer Img"
              htmlWidth="350px"
            />
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              Some Text
            </Box>
          </Box>
        </Flex>
      </main>
    </div>
  );
}
