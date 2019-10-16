import * as React from 'react';
import { SlideProps } from 'spectacle';
// @ts-ignore
import CodeSlide from 'spectacle-code-slide';

const code = `export const Component = () => {
  const [createUser, {data, error, loading}] = 
    useMutation(
      gql\`
        mutation Example(
        $variable: userInput!) { 
          createUser(userInput: $variable) { 
             ...ExampleFragment
          } 
        }\`
    );
     
  return <Button 
          onClick={
          () => 
            createUser({variables: {...}})
          }>
            {\`Create user\`}
         </Button>
};`;

export const Mutation: React.FC<SlideProps> = (props: SlideProps) => (
  <CodeSlide
    {...props}
    margin={0}
    bgColor="secondary"
    transition={[]}
    lang={`jsx`}
    code={code}
    ranges={[{ loc: [1, 11], title: `useMutation hook` }, { loc: [13, 16] }]}
  />
);
