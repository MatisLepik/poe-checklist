/* @flow */
import { H2, H4 } from 'src/components/styled/Heading';
import MapFilters from 'src/components/maps/MapFilters';
import MAPS, { ACTIVE_VERSION } from 'src/data/MAPS';
import MapsList from 'src/components/maps/MapsList';
import PageContainer from 'src/components/pages/PageContainer';
import PageDescription from 'src/components/styled/PageDescription';
import Panel from 'src/components/styled/Panel';
import React from 'react';
import MapRegionFilters from '../maps/MapRegionFilters';
import styled, { css } from 'react-emotion';

const Padding = styled.div`
  padding: 0 15px;
`;

export type Props = {};

export default class MapsPage extends React.Component {
  props: Props;

  static defaultProps = {
    maps: MAPS,
    version: ACTIVE_VERSION,
  };

  render() {
    return (
      <PageContainer page="maps">
        <Panel>
          <PageDescription>
            <H2
              className={css`
                margin-bottom: 0;
              `}
            >
              Maps ({this.props.version})
            </H2>
          </PageDescription>
          <Padding>
            <H4>Region filters</H4>
            <MapRegionFilters />
            <H4>Misc filters</H4>
            <MapFilters version={this.props.version} />
          </Padding>
          <MapsList list={this.props.maps} version={this.props.version} />
        </Panel>
      </PageContainer>
    );
  }
}
