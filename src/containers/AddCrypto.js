import React, { Component } from 'react';
import { fetchAllCryptos } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AddCrypto extends Component {

    componentWillMount() {
        this.props.fetchAllCryptos();
    }

    render() {
        return (
            <div>
                ADD NEW CRYPTO
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchAllCryptos }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AddCrypto);

