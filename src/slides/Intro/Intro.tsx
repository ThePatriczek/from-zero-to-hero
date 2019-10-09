import * as React from 'react';
import { Heading, Slide, SlideProps } from 'spectacle';

export const Intro: React.FC<SlideProps> = (props: SlideProps) => (
  <Slide bgColor="secondary" {...props}>
    <Heading caps textColor="primary" textAlign={`right`}>
      {`FROM: `}
      <span style={{ textDecoration: 'line-through' }}>{`ZERO`}</span>
      <br />
      {`TO: `}
      <span style={{ textDecoration: 'underline' }}>
        {`HERO`}
      </span>
    </Heading>

    <Heading
      size={6}
      textColor="tertiary"
      textAlign={`right`}
      margin={`50px 0 0 0 `}
    >
      {`Patrik Szewczyk`}
    </Heading>
  </Slide>
);
