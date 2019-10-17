import * as React from 'react';
import {
  Heading,
  Slide,
  SlideProps,
  List,
  ListItem,
  Text,
  Cite
} from 'spectacle';
import { Apollo } from './Example/Apollo';
import { ReactSlide } from './Example/React';
import { Other } from './Example/Other';

export const Hooks: React.FC<SlideProps> & {
  Example: {
    Apollo: React.FC<SlideProps>;
    React: React.FC<SlideProps>;
    Other: React.FC<SlideProps>;
  };
} = (props: SlideProps) => (
  <Slide bgColor="secondary" {...props}>
    <Heading textColor="quinary" fit>
      {`React Hooks`}
    </Heading>
    <List>
      <ListItem>
        <Text
          textColor={`primary`}
        >{`Reausable methods for React Functional Components`}</Text>
      </ListItem>
      <ListItem>
        <Cite textColor={`primary`}>
          {`Be `}
          <strong>{`modern`}</strong>
          {` and clear, simplify your code!`}
        </Cite>
      </ListItem>
    </List>
  </Slide>
);

Hooks.Example = {
  Apollo,
  React: ReactSlide,
  Other
};
