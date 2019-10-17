import * as React from 'react';
import { SlideProps } from 'spectacle';
// @ts-ignore
import CodeSlide from 'spectacle-code-slide';

const code = `const Component: React.FC = () => {
  const Form = useForm();
  const { loading, data } = useFetch("url",{...});
  const { openPortal, closePortal, Portal, isOpen } = usePortal();
  
  return (
    <form onSubmit={Form.handleSubmit}>
        <button onClick={() => Form.reset()}>
            {\`Reset\`}
        </button>
        <button onClick={() => openPortal()}>
            {\`Show info\`}
        </button>
    </form>)
}`;

export const Other: React.FC<SlideProps> = (props: SlideProps) => (
  <CodeSlide
    {...props}
    margin={0}
    bgColor="secondary"
    transition={[]}
    lang={`jsx`}
    code={code}
    ranges={[
      { loc: [1, 4], title: `Other hooks` },
      { loc: [5, 14], title: `Other hooks` }
    ]}
  />
);
