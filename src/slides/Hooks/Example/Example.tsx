import * as React from 'react';
import { SlideProps } from 'spectacle';
// @ts-ignore
import CodeSlide from 'spectacle-code-slide';

const code = `const [state,setState] = React.useState(init);
React.useEffect(() => {...},[...]);
const value = useContext(MyContext);
const ref = React.useRef();
const [ state, dispatch ] = useReducer(reducer, initialArg, init);

const { loading, error, data } = useQuery(TODOS);
const [ loadGreeting, { data, loading, error } ] = useLazyQuery(TODOS);
const [ addTodo ] = useMutation(ADD_TODO);
const client = useApolloClient();

const { handleSubmit, errors, reset, setValue, getValues } = useForm();
const { loading, data } = useFetch("url",{...})
const { openPortal, closePortal, Portal, isOpen } = usePortal()`;

export const Example: React.FC<SlideProps> = (props: SlideProps) => (
  <CodeSlide
    {...props}
    margin={0}
    bgColor="secondary"
    transition={[]}
    lang={`jsx`}
    code={code}
    ranges={[
      { loc: [0, 5], title: `React hooks` },
      { loc: [6, 10], title: `Apollo hooks` },
      { loc: [11, 14], title: `Other  hooks` }
    ]}
  />
);
