import * as React from 'react';
import { SlideProps } from 'spectacle';
// @ts-ignore
import CodeSlide from 'spectacle-code-slide';

const code = `const Component: React.FC = () => {
  const myQuery = useQuery(TODOS);
  const [ fetchMore, { data } ] = 
  useLazyQuery(TODOS);
  const [ addTodo ] = useMutation(ADD_TODO);
  const client = useApolloClient();

  return (
    <>
      <Todos data={myQuery.data}/>
      <button onClick={() => fetchMore()}>
        {\`Click to fetch more\`}
      </button>
      <button 
        onClick={() => client.cache.reset()}>
        {\`Reset cache\`}
      </button>
    </>
  )
}`;

export const Apollo: React.FC<SlideProps> = (props: SlideProps) => (
  <CodeSlide
    {...props}
    margin={0}
    bgColor="secondary"
    transition={[]}
    lang={`jsx`}
    code={code}
    ranges={[
      { loc: [1, 6], title: `Apollo hooks` },
      { loc: [7, 19], title: `Apollo hooks` }
    ]}
  />
);
