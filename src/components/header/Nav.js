/* @flow */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'react-emotion';

export type Props = {};

const NavItemSpacing = 20;
const NavItem = styled.li`
  display: inline-block;
  vertical-align: middle;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  height: 100%;
  position: relative;
  transition: background-color 150ms;
  text-align: center;

  &::before {
    content: '';
    width: 1px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
  }

  &:first-child::before {
    display: none;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const linkStyles = css`
  transition: background-color 150ms, color 150ms;
  padding: 0 ${NavItemSpacing}px;
  flex-direction: column;
  justify-content: center;

  &.active {
    color: white;
    pointer-events: none;
  }

  :hover {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.9);
  }

  @media (max-width: 600px) {
    padding: 0 ${NavItemSpacing / 2}px;
  }
`;

const ExactLink = ({ children, ...rest }) => (
  <NavLink exact css={linkStyles} className="full-height" {...rest}>
    {children}
  </NavLink>
);

const isMapPageActive = (match, location) =>
  !!match || location.pathname === '/maps';

export default class Nav extends React.Component {
  props: Props;

  render() {
    return (
      <ul
        className={`reset-list full-height ${this.props.className || ''}`}
        data-test="nav"
      >
        <NavItem className="full-height">
          <ExactLink isActive={isMapPageActive} to="/">
            Maps
          </ExactLink>
        </NavItem>
        <NavItem className="full-height">
          <ExactLink to="/passives">Passive quests</ExactLink>
        </NavItem>
        <NavItem className="full-height">
          <ExactLink to="/pantheons">Pantheons</ExactLink>
        </NavItem>
        <NavItem className="full-height">
          <ExactLink to="/trials">Trials</ExactLink>
        </NavItem>
      </ul>
    );
  }
}
