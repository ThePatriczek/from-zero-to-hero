import * as React from 'react';
import { SlideProps } from 'spectacle';
// @ts-ignore
import CodeSlide from 'spectacle-code-slide';

const code = `export type Query = {
   __typename?: 'Query',
  user: User,
  users: Array<User>,
};

export type Mutation = {
   __typename?: 'Mutation',
  login: Maybe<User>,
  logout: Maybe<Scalars['Boolean']>,
  createUser: User,
};

export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};

export type MutationCreateUserArgs = {
  input: UserInput
};

export type UserInput = {
  name: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
  class: Class,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  name: Scalars['String'],
  email: Scalars['String'],
  class: Class,
};

export enum Class {
  Mage = 'MAGE',
  Warrior = 'WARRIOR',
  Rogue = 'ROGUE',
  Priest = 'PRIEST',
  Noob = 'NOOB'
};

export type Scalars = {
  ID: number,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  timestamp: number,
};`;

export const Schema: React.FC<SlideProps> = (props: SlideProps) => (
  <CodeSlide
    {...props}
    margin={0}
    bgColor="secondary"
    transition={[]}
    lang={`jsx`}
    code={code}
    ranges={[
      { loc: [0, 0], title: `Schema in TypeScript` },
      { loc: [0, 5] },
      { loc: [6, 12] },
      { loc: [13, 21] },
      { loc: [22, 28] },
      { loc: [29, 36] },
      { loc: [37, 44] },
      { loc: [45, 53] }
    ]}
  />
);
