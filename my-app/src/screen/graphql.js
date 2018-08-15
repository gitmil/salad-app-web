import gql from 'graphql-tag';


export const GET_MEMBERS = gql`
  query getMembers($ref: string) {
    members(ref: $ref) @rtdbQuery(ref: $ref) {
      userName
    }
  }
`;
