import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCrypto } from '../actions/index';

class CryptoList extends Component {

    componentDidMount() {
        this.props.fetchCrypto("bitcoin");
    }

    render() {
        return (
            <div>
                Hi from components
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCrypto }, dispatch);
}

export default connect(null, mapDispatchToProps)(CryptoList);