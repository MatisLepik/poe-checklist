/* @flow */
import React from 'react';
import styled, { css } from 'react-emotion';
import Drawer from 'src/components/drawers/Drawer';
import GoodEssences from 'src/components/essences/GoodEssences';
import Notes from 'src/components/notes/Notes';
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

const NotesWrapper = styled.div``;

export default class Drawers extends React.Component {
  props: Props;

  render() {
    return (
      <Wrapper>
        <Drawer
          data-test="drawer"
          className={isOpen =>
            css`
              width: ${isOpen ? `${SIZES.NOTES_WIDTH}px` : 'auto'};
            `}
          name="notes"
          drawerContent={<div>Build notes</div>}
        >
          <NotesWrapper data-test="notes-wrapper">
            <div>Build notes</div>
            <Notes />
          </NotesWrapper>
        </Drawer>
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
