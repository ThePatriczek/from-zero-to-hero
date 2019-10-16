import * as React from 'react';
import { Heading, Slide, SlideProps, List, ListItem, Cite } from 'spectacle';

export const Info: React.FC<SlideProps> = (props: SlideProps) => (
  <Slide bgColor="secondary" {...props}>
    <Heading size={1} textColor="quinary" fit>
      {`GraphQL`}
    </Heading>
    <List>
      <ListItem>
        <Cite textColor={`primary`}>{`Query language for your API`}</Cite>
      </ListItem>
      <ListItem>
        <Cite
          textColor={`primary`}
        >{`A GraphQL service is created by defining types and fields on those types`}</Cite>
      </ListItem>
    </List>
  </Slide>
);
