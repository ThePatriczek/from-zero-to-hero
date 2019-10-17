import * as React from 'react';
import { Slide, SlideProps } from 'spectacle';
import {
  Button,
  Checkbox,
  Input,
  Switch,
  theme,
  ThemeProvider,
  Typography
} from 'react-atlantic';
import { Radio } from 'react-atlantic/lib/components/Radio';

const { Title, Text, Paragraph, Link } = Typography;

export const Atlantic: React.FC<SlideProps> = (props: SlideProps) => (
  <Slide
    bgColor="secondary"
    textColor={`primary`}
    {...props}
    style={{ zoom: 1.5 }}
  >
    <ThemeProvider theme={theme}>
      <Title level={1}>{`Our library`}</Title>
      <Title level={2}>{`of reusable`}</Title>
      <Title level={3}>{`custom components`}</Title>
      <Paragraph>
        <Text>{`CSS-in-JS (StyledComponents)`}</Text>
      </Paragraph>
      <Paragraph>
        <Text>{`Type definitions`}</Text>
      </Paragraph>
      <Paragraph>
        <Text>{`Unit tests`}</Text>
      </Paragraph>
      <Paragraph>
        <Text isCopyable>{`Documentation`}</Text>
      </Paragraph>
      <Paragraph>
        <Text isEditable>{`Plyaground`}</Text>
      </Paragraph>
      <Paragraph>
        <Link
          href={`https://thepatriczek.github.io/React-Atlantic/?path=/story/button--playground`}
          target={`_blank`}
        >{`Storybook`}</Link>
      </Paragraph>

      <Input placeholder={`Some text...`} />
      <Button type={'primary'}>{`Click`}</Button>

      <div>
        <Checkbox isDefaultChecked>
          <Text>{`Checkbox`}</Text>
        </Checkbox>
      </div>
      <div>
        <Switch isDefaultChecked />
      </div>
      <div>
        <Radio.Group onChange={() => null}>
          <Radio value={0}>
            <Text>{`Radio 1`}</Text>
          </Radio>
          <Radio value={1} isDefaultChecked>
            <Text>{`Radio 2`}</Text>
          </Radio>
        </Radio.Group>
      </div>
    </ThemeProvider>
  </Slide>
);
