/* @flow */
import { Switch, Route, withRouter } from 'react-router-dom';
import AboutPage from 'src/components/pages/AboutPage';
import MapsPage from 'src/components/pages/MapsPage';
import PantheonsPage from 'src/components/pages/PantheonsPage';
import PassiveQuestsPage from 'src/components/pages/PassiveQuestsPage';
import React from 'react';
import TrialsPage from 'src/components/pages/TrialsPage';

export type Props = {};

export class Routes extends React.Component {
  props: Props;

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.gtag &&
        window.gtag('config', 'GA_TRACKING_ID', {
          page_path: '/',
        });
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={MapsPage} />
        <Route exact path="/maps" component={MapsPage} />
        <Route exact path="/trials" component={TrialsPage} />
        <Route exact path="/pantheons" component={PantheonsPage} />
        <Route exact path="/passives" component={PassiveQuestsPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
