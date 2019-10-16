import * as React from 'react';
import { Heading, Slide, SlideProps, List, ListItem, Text } from 'spectacle';

export const ProsCons: React.FC<SlideProps> = (props: SlideProps) => (
  <Slide bgColor="secondary" {...props}>
    <Heading size={1} textColor="tertiary" caps textAlign={`left`}>
      {`+ Pros`}
    </Heading>
    <Heading size={1} textColor="quinary" caps textAlign={`right`}>
      {`Cons -`}
    </Heading>
    <List>
      <ListItem>
        <Text textColor={`tertiary`} textAlign={`left`}>{`Type safety`}</Text>
        <Text textColor={`quinary`} textAlign={`right`}>{`Browser cache`}</Text>
        <Text textColor={`tertiary`} textAlign={`left`}>{`Documentation`}</Text>
        <Text
          textColor={`quinary`}
          textAlign={`right`}
        >{`Recursive data structures`}</Text>
        <Text
          textColor={`tertiary`}
          textAlign={`left`}
        >{`Multiple operations in one request`}</Text>
        <Text
          textColor={`primary`}
          textAlign={`center`}
          margin={`30px 0 0 0`}
        >{`Versioning`}</Text>
      </ListItem>
    </List>
  </Slide>
);
