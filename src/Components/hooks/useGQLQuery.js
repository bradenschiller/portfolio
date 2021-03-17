import { useQuery } from "react-query";
import { GraphQLClient, request } from "graphql-request";
import { githubData } from "../../../keys";

export const useGQLQuery = (
  key,
  query,
  initialData,
  variables,
  config = {}
) => {
  const endpoint = "https://api.github.com/graphql";

  const client = new GraphQLClient(endpoint, {
    headers: {
      ["Content-Type"]: "application/json",
      ["Authorization"]: `bearer ${githubData.token}`,
    },
  });

  const fetchData = async () => await client.request(query, variables);

  return useQuery(key, fetchData, initialData, config);
};
