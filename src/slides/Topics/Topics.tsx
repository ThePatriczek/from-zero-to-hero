import * as React from 'react';
import { Heading, Slide, SlideProps, List, ListItem, Cite } from 'spectacle';

export const Topics: React.FC<SlideProps> = (props: SlideProps) => (
  <Slide bgColor="secondary" {...props}>
    <Heading size={1} textColor="tertiary">{`Topics`}</Heading>
    <List>
      <ListItem>
        <Cite textColor={`primary`}>{`GraphQL`}</Cite>
      </ListItem>
      <ListItem>
        <Cite textColor={`primary`}>{`React Apollo`}</Cite>
      </ListItem>
      <ListItem>
        <Cite textColor={`primary`}>{`GraphQL Code Generator`}</Cite>
      </ListItem>
      <ListItem>
        <Cite textColor={`primary`}>{`React Hooks`}</Cite>
      </ListItem>
      <ListItem>
        <Cite textColor={`primary`}>{`Custom component library`}</Cite>
      </ListItem>
    </List>
  </Slide>
);
