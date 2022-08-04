import React, { Component } from "react";
import ReactDOM from "react-dom";

import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import gql from "graphql-tag";

const endPointURL= `http://localhost:9000/graphql`;
const client = new ApolloClient({
    link: new HttpLink({ uri: endPointURL }),
    cache: new InMemoryCache(),
});

async function loadStudentAsync() {
    const query = gql`
        {
            students {
                id
                firstName
                lastName
                college {
                    name
                }
            }
        }
    `;
    const { data } = await client.query({ query });
    return data.students;
}

export { loadStudentAsync };
