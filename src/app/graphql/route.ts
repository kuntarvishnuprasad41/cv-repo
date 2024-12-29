import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { MeResolver } from "../../apollo/resolvers";
import { buildSchema } from "type-graphql";
import { NextRequest } from "next/server";

let apolloServer: ApolloServer;

async function createApolloServer() {
  const schema = await buildSchema({
    resolvers: [MeResolver],
  });

  apolloServer = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    introspection: true,
  });

  return startServerAndCreateNextHandler<NextRequest>(apolloServer, {
    context: async (req) => ({ req }),
  });
}

const handlerPromise = createApolloServer();

export async function GET(request: NextRequest) {
  const handler = await handlerPromise;
  return handler(request);
}

export async function POST(request: NextRequest) {
  const handler = await handlerPromise;
  return handler(request);
}
