import * as React from 'react';
import { Heading, Slide, SlideProps } from 'spectacle';

export const ProsCons: React.FC<SlideProps> = (props: SlideProps) => (
  <Slide bgColor="secondary" {...props}>
    <Heading size={1} textColor="tertiary" caps>
      {`+ Pros`}
    </Heading>
    <Heading size={1} textColor="quinary" caps>
      {`Cons -`}
    </Heading>
  </Slide>
);
