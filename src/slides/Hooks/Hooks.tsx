import * as React from 'react';
import { Heading, Slide, SlideProps } from 'spectacle';
import { Example } from './Example';

export const Hooks: React.FC<SlideProps> & { Example: React.FC<SlideProps> } = (
  props: SlideProps
) => (
  <Slide bgColor="secondary" {...props}>
    <Heading textColor="quinary" fit>
      {`React Hooks`}
    </Heading>
  </Slide>
);

Hooks.Example = Example;
