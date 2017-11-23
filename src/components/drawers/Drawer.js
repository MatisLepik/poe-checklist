/* @flow */
import { connect } from 'react-redux';
import { rgba } from 'polished';
import ArrowOutline from 'src/components/styled/ArrowOutline';
import COLORS from 'src/styles/COLORS';
import React from 'react';
import styled from 'react-emotion';
import { toggleDrawer } from 'src/redux/modules/ui';
import SIZES from 'src/styles/SIZES';

export type Props = {};

const Wrapper = styled.div`
  position: relative;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 10px;
  background-color: ${p => rgba(COLORS.BACKGROUND_PANEL, p.isOpen ? 1 : 0.8)};
  border-radius: 3px;
  display: inline-flex;
  align-items: center;
  height: ${SIZES.DRAWER_HEIGHT}px;
  margin-top: 10px;
  padding-right: 10px;
  cursor: pointer;
  justify-content: flex-end;
`;

const Toggle = styled.button`
  height: 100%;
  padding-left: 10px;
  padding-right: 20px;
`;

export class Drawer extends React.Component {
  props: Props;

  handleClick = () => this.props.toggleDrawer(this.props.name);

  render() {
    const {
      className,
      isOpen,
      children,
      drawerContent,
      keepDrawerContentWhileOpen,
    } = this.props;

    return (
      <div>
        <Wrapper
          data-test="drawer"
          isOpen={isOpen}
          onClick={this.handleClick}
          className={
            typeof className === 'function' ? className(isOpen) : className
          }
        >
          <Toggle>
            <ArrowOutline direction={isOpen ? 'right' : 'left'} />
          </Toggle>
          {keepDrawerContentWhileOpen && isOpen && drawerContent}
          {(isOpen && children) || drawerContent}
        </Wrapper>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    isOpen: !!state.ui.drawers[ownProps.name],
  }),
  { toggleDrawer }
)(Drawer);
