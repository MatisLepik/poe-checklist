/* @flow */
import { FlexWrapper, Left, Right } from 'src/components/styled/SideBySide';
import { H2 } from 'src/components/styled/Heading';
import MapFilters from 'src/components/maps/MapFilters';
import MAPS from 'src/data/MAPS';
import MapsList from 'src/components/maps/MapsList';
import PageContainer from 'src/components/pages/PageContainer';
import PageDescription from 'src/components/styled/PageDescription';
import Panel from 'src/components/styled/Panel';
import React from 'react';

export type Props = {};

export default class MapsPage extends React.Component {
  props: Props;

  static defaultProps = {
    maps: MAPS,
    version: 3.4,
  };

  render() {
    return (
      <PageContainer page="maps">
        <Panel>
          <FlexWrapper centerVertically>
            <Left data-test="left">
              <PageDescription>
                <H2>Maps</H2>
                <p>
                  This list contains all the maps, including ones that aren't on
                  the atlas. <br />Hide the non-atlas maps to keep track of
                  which maps you've bought/completed, or hide maps that don't
                  drop a Shaper's Orb when you're shaping your atlas.
                </p>
                <p>
                  Click on the picture icon to bring up an image of the map.
                </p>
                {this.props.extraDescription}
              </PageDescription>
            </Left>
            <Right data-test="right">
              <MapFilters version={this.props.version} />
            </Right>
          </FlexWrapper>
          <MapsList list={this.props.maps} version={this.props.version} />
        </Panel>
      </PageContainer>
    );
  }
}
