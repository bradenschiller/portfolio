import { GraphQLClient } from "graphql-request";
import { githubData } from "./keys";

const endpoint = "https://api.github.com/graphql";

export const client = new GraphQLClient(endpoint, {
  headers: {
    ["Content-Type"]: "application/json",
    ["Authorization"]: `bearer ${githubData.token}`,
  },
});
