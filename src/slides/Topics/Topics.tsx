import * as React from 'react';
import { Heading, Slide, SlideProps, List, ListItem } from 'spectacle';

export const Topics: React.FC<SlideProps> = (props: SlideProps) => (
  <Slide bgColor="secondary" {...props}>
    <Heading size={1} textColor="tertiary" fit>
      {`Topics`}
    </Heading>
  </Slide>
);
