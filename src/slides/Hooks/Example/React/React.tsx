import * as React from 'react';
import { SlideProps } from 'spectacle';
// @ts-ignore
import CodeSlide from 'spectacle-code-slide';

const code = `const Component: React.FC = () => {
  const [num,setNum] = React.useState(init);
  React.useEffect(() => {...},[...]);
  const context = useContext(MyContext);
  const divRef = React.useRef();
  const [ state, dispatch ] = useReducer(reducer, initialArg, init);
  
  return (
    <div ref={divRef}>
        {context.user.name}
        <button 
            onClick={() => setNum(num + 1)}>
            {num}
        </button>
    </div>)
}`;

export const ReactSlide: React.FC<SlideProps> = (props: SlideProps) => (
  <CodeSlide
    {...props}
    margin={0}
    bgColor="secondary"
    transition={[]}
    lang={`jsx`}
    code={code}
    ranges={[
      { loc: [1, 6], title: `React hooks` },
      { loc: [7, 15], title: `React hooks` }
    ]}
  />
);
