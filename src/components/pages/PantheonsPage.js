/* @flow */
import { FlexWrapper, Left, Right } from 'src/components/styled/SideBySide';
import { H2 } from 'src/components/styled/Heading';
import PantheonsFilters from 'src/components/pantheons/PantheonsFilters';
import PANTHEONS from 'src/data/PANTHEONS';
import BOSSES from 'src/data/BOSSES';
import { MAPS_BY_NAME } from 'src/data/MAPS';
import PantheonsList from 'src/components/pantheons/PantheonsList';
import PageContainer from 'src/components/pages/PageContainer';
import PageDescription from 'src/components/styled/PageDescription';
import Panel from 'src/components/styled/Panel';
import React from 'react';

export type Props = {};

export default class PantheonsPage extends React.Component {
  props: Props;

  render() {
    const pantheonUpgrades = Object.values(PANTHEONS).reduce((acc, cur) => {
      const { name, id, upgrades } = cur;
      upgrades.forEach(({ boss, ...upgrade }, i) => {
        const bossData = BOSSES[boss];
        acc.push({
          ...upgrade,
          god: name,
          id: `${id}-${i}`,
          bossName: bossData.name,
          map: MAPS_BY_NAME[bossData.map],
        });
      });

      return acc;
    }, []);

    return (
      <PageContainer page="pantheons">
        <Panel>
          <FlexWrapper centerVertically>
            <Left data-test="left">
              <PageDescription>
                <H2>Pantheon upgrades</H2>
                <p>
                  Here you can see which bosses you need to kill to get all of
                  the{' '}
                  <a href="https://pathofexile.gamepedia.com/Pantheon_system">
                    pantheon upgrades
                  </a>.
                </p>
              </PageDescription>
            </Left>
            <Right data-test="right">
              <PantheonsFilters />
            </Right>
          </FlexWrapper>
          <PantheonsList list={pantheonUpgrades} />
        </Panel>
      </PageContainer>
    );
  }
}
