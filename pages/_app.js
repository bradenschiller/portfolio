import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useGQLQuery } from "../src/Components/hooks/useGQLQuery";
import { QueryClientProvider, QueryClient } from "react-query";

function MyApp({ Component, pageProps }) {
  const queryClientRef = new QueryClient();

  return (
    <QueryClientProvider client={queryClientRef}>
      <ChakraProvider>
        <Component props={pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
