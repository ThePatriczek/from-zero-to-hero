import * as React from 'react';
import { Heading, Slide, SlideProps } from 'spectacle';

export const Atlantic: React.FC<SlideProps> = (props: SlideProps) => (
  <Slide bgColor="secondary" {...props}>
    <Heading size={1} textColor="primary" fit caps>
      {`Atlantic`}
    </Heading>
  </Slide>
);
