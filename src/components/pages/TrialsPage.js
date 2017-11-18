/* @flow */
import { FlexWrapper, Left, Right } from 'src/components/styled/SideBySide';
import { H2 } from 'src/components/styled/Heading';
import TrialsFilters from 'src/components/trials/TrialsFilters';
import TRIALS from 'src/data/TRIALS';
import TrialsList from 'src/components/trials/TrialsList';
import PageContainer from 'src/components/pages/PageContainer';
import PageDescription from 'src/components/styled/PageDescription';
import Panel from 'src/components/styled/Panel';
import React from 'react';

export type Props = {};

export default class TrialsPage extends React.Component {
  props: Props;

  render() {
    return (
      <PageContainer page="trials">
        <Panel>
          <FlexWrapper centerVertically>
            <Left data-test="left">
              <PageDescription>
                <H2>Trials of Ascendancy</H2>
                <p>
                  You can use this list to keep track of which trials you've
                  done this league.
                </p>
              </PageDescription>
            </Left>
            <Right data-test="right">
              <TrialsFilters />
            </Right>
          </FlexWrapper>
          <TrialsList list={Object.values(TRIALS)} />
        </Panel>
      </PageContainer>
    );
  }
}
