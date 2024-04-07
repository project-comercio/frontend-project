"use client";

import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "@/utils/routes/apollo-client"; 
import React from "react";

export const ApolloContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const client = createApolloClient()
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
};