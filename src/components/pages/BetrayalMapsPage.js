/* @flow */
import React from 'react';
import MapsPage from './MapsPage';
import { MAPS_BETRAYAL } from 'src/data/MAPS';

export type Props = {};

export default class BetrayalMapsPage extends React.Component {
  props: Props;

  render() {
    return (
      <MapsPage
        version={3.5}
        maps={MAPS_BETRAYAL}
        extraDescription={
          <div>
            <p>
              <strong>
                PS! This is provisional data for maps in 3.5 Betrayal league.
              </strong>
              <br />
              Things might be inaccurate or change. <br />The data is mostly
              from{' '}
              <a href="https://www.pathofexile.com/forum/view-thread/2253540">
                this announcement
              </a>.{' '}
            </p>
          </div>
        }
      />
    );
  }
}
