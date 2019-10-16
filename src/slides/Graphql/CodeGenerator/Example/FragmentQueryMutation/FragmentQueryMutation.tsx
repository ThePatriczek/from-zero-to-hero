import * as React from 'react';
import { SlideProps } from 'spectacle';
// @ts-ignore
import CodeSlide from 'spectacle-code-slide';

const code = `export type ExampleFragment = { __typename?: 'User', id: number, name: string, email: string, character: Character };

export type ExampleQuery = { __typename?: 'Query', users: Array<(
    { __typename?: 'User' }
    & ExampleFragment
  )> };

export type ExampleMutationVariables = {
  userInput: UserInput
};

export type ExampleMutation = { __typename?: 'Mutation', createUser: (
    { __typename?: 'User' }
    & ExampleFragment
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
      { loc: [0, 1], title: `fragment.ts` },
      { loc: [2, 6], title: `query.ts` },
      { loc: [7, 15], title: `mutation.ts` }
    ]}
  />
);
