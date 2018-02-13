import React, { Component } from 'react';
import { fetchAllCryptos } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input } from 'antd';

class AddCrypto extends Component {

    componentWillMount() {
        this.props.fetchAllCryptos();
    }

    render() {
        return (
            <div>
                <Input placeholder="Search currency"
                    style={{ maxWidth: '300px' }} />
            </div>
        );
    }
}

const mapStateToProps = ({ allCryptos }) => ({ allCryptos });

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchAllCryptos }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddCrypto);