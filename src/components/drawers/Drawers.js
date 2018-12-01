/* @flow */
import React from 'react';
import styled from 'react-emotion';
import Drawer from 'src/components/drawers/Drawer';
import GoodEssences from 'src/components/essences/GoodEssences';
import SIZES from 'src/styles/SIZES';

export type Props = {};

const Wrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 5px;
  text-align: right;

  @media (max-width: ${SIZES.BP_HIDE_DRAWERS}px) {
    display: none;
  }
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
