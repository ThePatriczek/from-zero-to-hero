import * as React from 'react';
import { SlideProps } from 'spectacle';
// @ts-ignore
import CodeSlide from 'spectacle-code-slide';

const code = `schema {
  query: Query
  mutation: Mutation
}

type Query {
  user(id: ID!): User
  users: [User!]!
}

type Mutation {
  login(
    email: String!, 
    password: String!
  ): User!
  logout: Boolean!
  createUser(input: UserInput!): User!
}

input UserInput {
  name: String!
  email: String!
  password: String!
  character: Character!
}

type User {
  id: ID!
  name: String!
  email: String!
  character: Character!
}

enum Character {
  MAGE
  WARRIOR
  ROGUE
  PRIEST
  NOOB
}

scalar ID
scalar timestamp`;

export const Schema: React.FC<SlideProps> = (props: SlideProps) => (
  <CodeSlide
    {...props}
    margin={0}
    bgColor="secondary"
    transition={[]}
    lang={`jsx`}
    code={code}
    ranges={[
      { loc: [0, 0], title: `schema.graphql` },
      { loc: [0, 4] },
      { loc: [5, 9] },
      { loc: [10, 18] },
      { loc: [19, 25] },
      { loc: [26, 32] },
      { loc: [33, 40] },
      { loc: [41, 43] }
    ]}
  />
);
