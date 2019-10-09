import * as React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Redbox from 'redbox-react';
import Presentation from './presentation';

import 'normalize.css';

const CustomErrorReporter = ({ error }: any) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Presentation />
  </AppContainer>,
  document.getElementById('root')
);

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./presentation', () => {
    const NextPresentation = require('./presentation').default;

    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <NextPresentation />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
