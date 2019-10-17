import * as React from 'react';
import { Heading, Slide, SlideProps, List, ListItem, Cite } from 'spectacle';
import { Link } from 'react-atlantic/lib/components/Typography/Link';

export const Outro: React.FC<SlideProps> = (props: SlideProps) => (
  <Slide bgColor="secondary" {...props}>
    <Heading textColor="primary" textAlign={`right`}>
      {`Thank you.`}
    </Heading>
    <List>
      <ListItem textAlign={`right`}>
        <Link
          href={`https://thepatriczek.github.io/from-zero-to-hero/`}
          target={`_blank`}
        >{`https://thepatriczek.github.io/from-zero-to-hero/`}</Link>
      </ListItem>
      <ListItem>
        <Cite textColor={`primary`}>{`Any questions?`}</Cite>
      </ListItem>
    </List>
  </Slide>
);
