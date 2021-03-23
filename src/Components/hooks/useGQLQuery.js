import { useQuery } from "react-query";
import { request } from "graphql-request";
import { client } from "../../../graphqlClientHelpers";

export const useGQLQuery = (
  key,
  query,
  initialData,
  variables,
  config = {}
) => {
  const fetchData = async () => await client.request(query, variables);

  return useQuery(key, fetchData, initialData, config);
};
