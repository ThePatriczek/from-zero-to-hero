import * as React from 'react';
import { Heading, Slide, SlideProps, List, ListItem, Cite } from 'spectacle';
import { Mutation, Query } from './Example';

export const Apollo: React.FC<SlideProps> & {
  Example: { Query: React.FC<SlideProps>; Mutation: React.FC<SlideProps> };
} = (props: SlideProps) => (
  <Slide bgColor="secondary" {...props}>
    <Heading size={1} textColor="tertiary" fit>
      {`React Apollo`}
    </Heading>
    <List>
      <ListItem>
        <Cite textColor={`primary`}>{`Library for state management for JavaScript apps`}</Cite>
      </ListItem>
      <ListItem>
        <Cite textColor={`primary`}>{`Simply write a GraphQL query, and Apollo Client will take care of requesting and caching your data`}</Cite>
      </ListItem>
    </List>
  </Slide>
);

Apollo.Example = {
  Query,
  Mutation
};
