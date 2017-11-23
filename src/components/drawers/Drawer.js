/* @flow */
import { connect } from 'react-redux';
import { rgba } from 'polished';
import ArrowOutline from 'src/components/styled/ArrowOutline';
import COLORS from 'src/styles/COLORS';
import React from 'react';
import styled from 'react-emotion';
import { toggleDrawer } from 'src/redux/modules/ui';

export type Props = {};

const Wrapper = styled.button`
  padding: 7px 12px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 10px;
  background-color: ${rgba(COLORS.BACKGROUND_PANEL, 0.85)};
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 68px;
`;

export class Drawer extends React.Component {
  props: Props;

  handleClick = () => this.props.toggleDrawer(this.props.name);

  render() {
    return (
      <Wrapper onClick={this.handleClick}>
        <div>
          <ArrowOutline direction={this.props.isOpen ? 'right' : 'left'} />
        </div>
        <div css={`padding-left: 10px;`}>
          <div>
            {this.props.isOpen ? this.props.children : this.props.drawerContent}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    isOpen: !!state.ui.drawers[ownProps.name],
  }),
  { toggleDrawer }
)(Drawer);
