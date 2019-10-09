import * as React from 'react';
import { Heading, Slide, SlideProps } from 'spectacle';

export const AboutMe: React.FC<SlideProps> = (props: SlideProps) => (
  <Slide bgColor="secondary" {...props}>
    <Heading size={1} textColor="primary" fit caps>
      {`About me`}
    </Heading>
  </Slide>
);
