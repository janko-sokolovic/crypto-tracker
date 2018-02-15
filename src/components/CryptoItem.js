import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import _ from 'lodash';
import getNextColor from './Colors';
import { Card } from 'antd';


export default class CryptoItem extends Component {
    render() {

        const values = this.props.values;

        const mean = _.mean(values);
        const max = _.max(values) + 0.01 * mean;
        const min = _.min(values) - 0.01 * mean;

        const current = _.last(values);

        return (
            <Card title={this.props.code}
                bordered={false}
                extra={'$' + current}
                style={{ width: '25%', minWidth: '270px', margin: '5px', float: 'left' }}>
                <Sparklines data={values}
                    limit={_.size(values)}
                    height={100}
                    max={max}
                    min={min}
                >
                    <SparklinesLine color={getNextColor()} />
                    <SparklinesSpots />
                </Sparklines>
            </Card>
        );
    }
}