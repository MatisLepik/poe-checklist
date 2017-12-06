/* @flow */
import { rgba } from 'polished';
import Check from 'src/components/styled/Check';
import COLORS from 'src/styles/COLORS';
import React from 'react';
import styled, { css } from 'react-emotion';

export type Props = {};

const Wrapper = styled.label`
  position: relative;
  cursor: pointer;
  display: flex;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;

  &:checked ~  {
    visibility: visible;
  }

  ~ .checkbox-status-display {
    transition: border-color 150ms ease-in;

    .checkbox-check {
      transition: opacity 150ms, transform 150ms ease-in;
      opacity: 0;
      pointer-events: none;
      transform: scale(0) rotate(-45deg);
    }
  }

  &:checked ~ .checkbox-status-display {
    border-color: transparent;

    .checkbox-check {
      opacity: 1;
      transform: scale(1) rotate(-45deg);
    }
  }
`;

const StatusDisplay = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 17px;
  height: 17px;
  background-color: transparent;
  border: 1px solid ${rgba(COLORS.FOREGROUND, 0.5)};
  flex-shrink: 0;

  + * {
    margin-left: 7px;
  }
`;

const Label = styled.div`
  display: inline-block;
  vertical-align: middle;
  user-select: none;
`;

const checkStyles = css`
  position: absolute;
  top: 4px;
  left: 3px;
`;

export default class Checkbox extends React.Component {
  props: Props;

  render() {
    const { children, ...rest } = this.props;

    return (
      <Wrapper>
        <Input {...rest} type="checkbox" />
        <StatusDisplay className="checkbox-status-display">
          <Check css={checkStyles} className="checkbox-check" />
        </StatusDisplay>
        {children && <Label className="label">{children}</Label>}
      </Wrapper>
    );
  }
}
