import * as React from 'react';
import { Heading, Slide, SlideProps } from 'spectacle';
import { Schema, FragmentQueryMutation } from './Example';

export const CodeGenerator: React.FC<SlideProps> & {
  Example: {
    Schema: React.FC<SlideProps>;
    FragmentQueryMutation: React.FC<SlideProps>;
  };
} = (props: SlideProps) => (
  <Slide bgColor="secondary" {...props}>
    <Heading size={1} textColor="tertiary" fit>
      {`GraphQL Code Generator`}
    </Heading>
  </Slide>
);

CodeGenerator.Example = {
  Schema,
  FragmentQueryMutation
};
