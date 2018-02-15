import React, { Component } from 'react';
import { connect } from 'react-redux';
import CryptoItem from '../components/CryptoItem';
import _ from 'lodash';

class CryptoList extends Component {

    render() {

        if (!this.props.cryptosData) return <div> No cryptos selected. </div>;

        const cryptos = _.map(this.props.cryptosData, (values, key) =>
            <CryptoItem key={key} values={values} code={key} />
        );

        return (
            <div>
                {cryptos}
            </div>
        );
    }
}

const mapStateToProps = ({ cryptosData }) => ({ cryptosData })

export default connect(mapStateToProps)(CryptoList);