import * as React from 'react';
import { SlideProps } from 'spectacle';
// @ts-ignore
import CodeSlide from 'spectacle-code-slide';

const code = `fragment ExampleFragment on User {
  id
  name
  email
  class
}

query Example {
  users {
    ...ExampleFragment
  }  
}

mutation Example($variable: UserInput!) {
  createUser(userInput: $variable) {
    ...ExampleFragment
  }
}`;

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
      { loc: [0, 6], title: `GraphQL Fragment` },
      { loc: [7, 12], title: `GraphQL Query` },
      { loc: [13, 18], title: `GraphQL Mutation` }
    ]}
  />
);
