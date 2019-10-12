import * as React from 'react';
import { SlideProps } from 'spectacle';
// @ts-ignore
import CodeSlide from 'spectacle-code-slide';

const code = `export type UserFragment = { __typename?: 'User', id: string, name: string, email: string, class: Class };

export type UsersQuery = { __typename?: 'Query', users: Array<(
    { __typename?: 'User' }
    & UserFragment
  )> };

export type CreateUserMutationVariables = {
  userInput: UserInput
};

export type CreateUserMutation = { __typename?: 'Mutation', createUser: (
    { __typename?: 'User' }
    & UserFragment
  ) };`;

export const FragmentQueryMutation: React.FC<SlideProps> = (
  props: SlideProps
) => (
  <CodeSlide
    {...props}
    margin={0}
    bgColor="secondary"
    transition={[]}
    lang={`jsx`}
    code={code}
    ranges={[
      { loc: [0, 1], title: `Fragment in TypeScript` },
      { loc: [2, 6], title: `Query in TypeScript` },
      { loc: [7, 15], title: `Mutation in TypeScript` }
    ]}
  />
);
