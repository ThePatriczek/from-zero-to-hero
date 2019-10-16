import * as React from 'react';
import { SlideProps } from 'spectacle';
// @ts-ignore
import CodeSlide from 'spectacle-code-slide';

const code = `export const Component = () => {
  const { loading, error, data } = 
    useQuery(
      gql\`
        query Example { 
          users { 
             ...ExampleFragment
          } 
        }\`
    );
  
  if (error) { 
    return <Error message={error} />; 
  }
   
  if (loading) { 
    return <Loading />; 
  }
  
  return <List users={data.users} />
};`;

export const Query: React.FC<SlideProps> = (props: SlideProps) => (
  <CodeSlide
    {...props}
    margin={0}
    bgColor="secondary"
    transition={[]}
    lang={`jsx`}
    code={code}
    ranges={[{ loc: [1, 10], title: `useQuery hook` }, { loc: [11, 20] }]}
  />
);
