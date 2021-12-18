import { GraphQLClient } from "graphql-request";

export const graphcms = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHCMS_URL,
  {
    headers: {},
  }
);
