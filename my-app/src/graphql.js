import gql from 'graphql-tag';


export const GET_USER = gql`
  query GetUser($ref: string) {
    users(ref: $ref) @rtdbQuery(ref: $ref) {
      name
      email
    }
  }
`;
