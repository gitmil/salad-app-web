import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { createRtdbLink } from 'apollo-link-firebase';
import * as firebase from 'firebase';
import gql from 'graphql-tag';


const apolloCache = new InMemoryCache();

export default (database: any) => new ApolloClient({
  cache: apolloCache,
  link: createRtdbLink({database})
});


// create Realtime Database link
const rtdbLink = createRtdbLink({
  database: firebase.database()
});

const client = new ApolloClient({
  link: rtdbLink,
  cache: new InMemoryCache(),
});

// A simple query to retrieve data from
// firebase.database().ref("/profile/me")
// @rtdbQuery stands for Realtime Database Query
const query = gql`
  query members {
    members @rtdbQuery(ref: "/members/") {
      userName
    }
  }
`;

// Invoke the query and log the person's name
client.query({ query }).then(response => {
  // console.log('data', response.data.userName);
  console.log('data', response);
});
