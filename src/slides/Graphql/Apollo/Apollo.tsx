import * as React from 'react';
import { Heading, Slide, SlideProps } from 'spectacle';
import { Mutation, Query } from './Example';

export const Apollo: React.FC<SlideProps> & {
  Example: { Query: React.FC<SlideProps>; Mutation: React.FC<SlideProps> };
} = (props: SlideProps) => (
  <Slide bgColor="secondary" {...props}>
    <Heading size={1} textColor="primary" fit>
      {`React Apollo`}
    </Heading>
  </Slide>
);

Apollo.Example = {
  Query,
  Mutation
};
