/* @flow */
import React from 'react';
import styled from 'react-emotion';
import Drawer from 'src/components/drawers/Drawer';
import GoodEssences from 'src/components/essences/GoodEssences';

export type Props = {};

const Wrapper = styled.div`
  position: fixed;
  bottom: 5px;
  right: 5px;
  opacity: 0.8;
`;

export default class Drawers extends React.Component {
  props: Props;

  render() {
    return (
      <Wrapper>
        <Drawer
          name="essences"
          drawerContent={
            <div>
              <div>Top tier essences</div>
              <div>
                <small>(worth corrupting)</small>
              </div>
            </div>
          }
        >
          <GoodEssences />
        </Drawer>
      </Wrapper>
    );
  }
}
