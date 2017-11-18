/* @flow */
import { FlexWrapper, Left, Right } from 'src/components/styled/SideBySide';
import { H2 } from 'src/components/styled/Heading';
import PageDescription from 'src/components/styled/PageDescription';
import PageContainer from 'src/components/pages/PageContainer';
import Panel from 'src/components/styled/Panel';
import PassiveQuestsFilters from 'src/components/passives/PassiveQuestsFilters';
import PassiveQuestsList from 'src/components/passives/PassiveQuestsList';
import PASSIVES from 'src/data/PASSIVES';
import React from 'react';

export type Props = {};

export default class PassiveQuestsPage extends React.Component {
  props: Props;

  render() {
    return (
      <PageContainer page="passive-quests">
        <Panel>
          <FlexWrapper centerVertically>
            <Left data-test="left">
              <PageDescription>
                <H2>Passive quests</H2>
                <p>
                  These are all the quests that give you passive points. Type{' '}
                  <code>/passives</code> ingame <br />to see which ones you've
                  finished, check them here, and find out if you missed any.
                </p>
              </PageDescription>
            </Left>
            <Right data-test="right" css={`padding-top: 15px;`}>
              <PassiveQuestsFilters />
            </Right>
          </FlexWrapper>
          <PassiveQuestsList list={Object.values(PASSIVES)} />
        </Panel>
      </PageContainer>
    );
  }
}
