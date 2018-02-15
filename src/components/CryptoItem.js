import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import _ from 'lodash';
import getNextColor from './Colors';

export default class CryptoItem extends Component {
    render() {

        const values = this.props.values;

        const mean = _.mean(values);
        const max = _.max(values) + 0.01 * mean;
        const min = _.min(values) - 0.01 * mean;

        return (
            <div style={{ width: '300px' }} >
                <Sparklines data={values}
                    limit={_.size(values)}
                    width={150} height={50}
                    margin={5}
                    max={max}
                    min={min}
                >
                    <SparklinesLine color={getNextColor()} />
                    <SparklinesSpots />
                </Sparklines>
            </div>
        );
    }
}