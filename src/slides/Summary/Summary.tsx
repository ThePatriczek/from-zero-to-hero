import * as React from 'react';
import { Heading, Slide, SlideProps, List, ListItem, Cite } from 'spectacle';

export const Summary: React.FC<SlideProps> = (props: SlideProps) => (
  <Slide bgColor="secondary" {...props}>
    <Heading textColor="tertiary">{`Summary`}</Heading>
    <List>
      <ListItem>
        <Cite textColor={`primary`}>
          {`GraphQL - `} <strong>{`Type safety`}</strong>
        </Cite>
      </ListItem>
      <ListItem>
        <Cite textColor={`primary`}>
          {`GraphQL Code Generator - `}{' '}
          <strong>{`GraphQL to TypeScript`}</strong>
        </Cite>
      </ListItem>
      <ListItem>
        <Cite textColor={`primary`}>
          {`React Apollo - `}{' '}
          <strong>{`Client for GraphQL communication`}</strong>
        </Cite>
      </ListItem>
      <ListItem>
        <Cite textColor={`primary`}>
          {`React Hooks - `} <strong>{`Reusable methods, easy to use`}</strong>
        </Cite>
      </ListItem>
      <ListItem>
        <Cite textColor={`primary`}>
          {`Custom component library - `} <strong>{`DRY`}</strong>
          {` (Don't Repeat Yourself)`}
        </Cite>
      </ListItem>
    </List>
  </Slide>
);
