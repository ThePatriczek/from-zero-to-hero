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
    <Slides.Topics />
    <Slides.Graphql.Info />
    <Slides.Graphql.Example.Schema />
    <Slides.Graphql.Example.FragmentQueryMutation />
    <Slides.Graphql.ProsCons />
    <Slides.Graphql.Apollo />
    <Slides.Graphql.Apollo.Example.Query />
    <Slides.Graphql.Apollo.Example.Mutation />
    <Slides.Graphql.CodeGenerator />
    <Slides.Graphql.CodeGenerator.Example.Schema />
    <Slides.Graphql.CodeGenerator.Example.FragmentQueryMutation />
    {/*<Slides.Hooks/>*/}
    {/*<Slides.Hooks.Example/>*/}
    <Slides.Atlantic />
    <Slides.Outro/>
  </Deck>
);

export default Presentation;
