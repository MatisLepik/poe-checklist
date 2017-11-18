import { FlexWrapper, Left, Right } from 'src/components/styled/SideBySide';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import COLORS from 'src/styles/COLORS';
import EventListener from 'react-event-listener';
import Header from 'src/components/header/Header';
import Notes from 'src/components/notes/Notes';
import React from 'react';
import Routes from 'src/components/Routes';
import GoodEssences from 'src/components/essences/GoodEssences';
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
    transition: fill 150ms;
  }
`;

class App extends React.Component {
  keys = '';
  state = {
    showNotes: false,
  };

  handleKeyDown = evt => {
    const secret = 'notes';
    this.keys += evt.key;
    this.keys = this.keys.substring(
      this.keys.length - secret.length,
      this.keys.length
    );
    if (this.keys === secret) {
      this.setState(state => ({
        showNotes: !state.showNotes,
      }));
    }
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <HashRouter>
          <SiteContainer
            data-test="site-container"
            data-has-notes={this.state.showNotes}
          >
            <EventListener target="window" onKeyDown={this.handleKeyDown} />

            <Header />
            {this.state.showNotes ? (
              <FlexWrapper css={`align-items: stretch;`}>
                <Left css={`flex-grow: 1;`}>
                  <Routes />
                </Left>
                <Right>
                  <Notes />
                </Right>
              </FlexWrapper>
            ) : (
              <Routes />
            )}
            <GoodEssences />
          </SiteContainer>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
