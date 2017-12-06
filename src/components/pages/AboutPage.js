/* @flow */
import { H2 } from 'src/components/styled/Heading';
import PageContainer from 'src/components/pages/PageContainer';
import PageDescription from 'src/components/styled/PageDescription';
import Panel from 'src/components/styled/Panel';
import React from 'react';

const EMAIL = atob('bWF0aXMubGVwaWtAZ21haWwuY29t'); // I am paranoid :D

export type Props = {};

export default class AboutPage extends React.Component {
  props: Props;

  render() {
    return (
      <PageContainer page="pantheons">
        <Panel>
          <PageDescription>
            <H2>About PoE checklist</H2>
            <p>Hello!</p>
            <p>
              This site will help you keep track of some of the content that
              you'll want to finish at the start of a league, or character.{' '}
              <br />If you check an item, it will be stored on your machine, so
              next time you come back, the information will still be here.
            </p>

            <p css={`margin-top: 25px`}>
              If you have any questions, contact me at{' '}
              <a href={EMAIL}>{EMAIL}</a>, on the{' '}
              <a
                href="https://github.com/MatisLepik/poe-checklist"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github page
              </a>{' '}
              or on <a href="https://www.reddit.com/user/MatisLepik">Reddit</a>.
            </p>
          </PageDescription>
        </Panel>
      </PageContainer>
    );
  }
}
