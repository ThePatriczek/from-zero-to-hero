import React from 'react';
import { Deck } from 'spectacle';
import { theme } from './theme';
import * as Slides from './slides';

const Presentation: React.FC = () => (
  <Deck
    transition={['zoom', 'fade']}
    transitionDuration={500}
    theme={theme}
    showFullscreenControl={false}
    controls={false}
    progress={'none'}
  >
    <Slides.Intro />
    <Slides.AboutMe />
    <Slides.Graphql.Info />
    <Slides.Atlantic />
  </Deck>
);

export default Presentation;
