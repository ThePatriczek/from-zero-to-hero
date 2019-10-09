import * as React from 'react';
import { Heading, Slide, SlideProps } from 'spectacle';

export const Info: React.FC<SlideProps> = (props: SlideProps) => (
  <Slide bgColor="secondary" {...props}>
    <Heading size={1} textColor="quinary" fit caps>
      {`WTF is GraphQL?`}
    </Heading>
  </Slide>
);
