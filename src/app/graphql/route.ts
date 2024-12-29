import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { MeResolver } from "../../apollo/resolvers";
import { buildSchema } from "type-graphql";
import { NextRequest } from "next/server";

const schema = await buildSchema({
  resolvers: [MeResolver],
});

const apolloServer = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
  introspection: true,
});

// Define the context type
type Context = {
  req: NextRequest;
};

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
  context: async (req): Promise<Context> => ({ req }),
});

// Explicitly type the handlers
export const GET = handler;
export const POST = handler;
