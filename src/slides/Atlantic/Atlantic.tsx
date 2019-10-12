import * as React from 'react';
import { Heading, Slide, SlideProps, Text } from 'spectacle';
import { quinary, tertiary, theme } from '../../theme';

export const Atlantic: React.FC<SlideProps> = (props: SlideProps) => (
  <Slide bgColor="secondary" {...props}>
    <Heading textColor="primary" fit>
      {`Custom component library`}
    </Heading>

    <Text textColor={`primary`}>
      <span>{`React Atlantic `}</span>
      <span>{`(`}</span>
      <span style={{ color: tertiary }}>{`Atla`}</span>
      <span>{`s `}</span>
      <span style={{ color: quinary }}>{`c`}</span>
      <span>{`o`}</span>
      <span style={{ color: tertiary }}>{`n`}</span>
      <span>{`sul`}</span>
      <span style={{ color: tertiary }}>{`ti`}</span>
      <span>{`ng)`}</span>
    </Text>
  </Slide>
);
