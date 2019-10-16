import * as React from 'react';
import { Heading, Slide, SlideProps, Cite, List, ListItem } from 'spectacle';
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
    <List>
      <ListItem>
        <Cite textColor={`primary`}>
          {`Generate code from your GraphQL schema with a single function call`}
        </Cite>
      </ListItem>
    </List>
  </Slide>
);

CodeGenerator.Example = {
  Schema,
  FragmentQueryMutation
};
