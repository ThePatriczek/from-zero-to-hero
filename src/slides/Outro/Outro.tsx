import * as React from 'react';
import { Heading, Slide, SlideProps } from 'spectacle';

export const Outro: React.FC<SlideProps> = (props: SlideProps) => (
  <Slide bgColor="secondary" {...props}>
    <Heading textColor="primary" textAlign={`right`}>
      {`Thank you.`}
    </Heading>
  </Slide>
);
