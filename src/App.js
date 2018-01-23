import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { validateVersion } from 'src/redux/modules/checklist';
import COLORS from 'src/styles/COLORS';
import Drawers from 'src/components/drawers/Drawers';
import EventListener from 'react-event-listener';
import Header from 'src/components/header/Header';
import React from 'react';
import Routes from 'src/components/Routes';
import styled from 'react-emotion';

const SiteContainer = styled.div`
  padding-bottom: 50px;
  min-width: 320px;
  color: ${COLORS.FOREGROUND};

  a {
    color: ${COLORS.LINK};
    transition: color 150ms;
  }

  svg {
    transition: transform 75ms, fill 150ms;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.store.dispatch(validateVersion());
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <HashRouter>
          <SiteContainer data-test="site-container">
            <EventListener target="window" onKeyDown={this.handleKeyDown} />
            <Header />
            <Routes />
            <Drawers />
          </SiteContainer>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
