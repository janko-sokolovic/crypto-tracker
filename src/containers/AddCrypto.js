import React, { Component } from 'react';
import { fetchAllCryptos, fetchCrypto } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'antd';
import { AutoComplete } from 'antd';
import _ from 'lodash';

class AddCrypto extends Component {

    constructor(props, state) {
        super(props);

        this.state = {
            recommendations: [],
            selected: '',
            error: ''
        }
    }

    componentWillMount() {
        if (_.isEmpty(this.props.allCryptos)) {
            this.props.fetchAllCryptos();
        }
    }

    addCrypto() {
        const doesExist = _.some(this.props.allCryptos, c => c.name === this.state.selected);
        if (doesExist) {
            const cryptoId = _(this.props.allCryptos).find(c => c.name === this.state.selected).asset_id;
            this.props.fetchCrypto(cryptoId);
        } else {
            this.setState({ error: 'not-found' });
        }
    }

    onChange(value) {
        const values = this.props.allCryptos.map(c => { return { value: c.name, text: c.name } });
        const matched = _.filter(values, c => c.value.toLowerCase().indexOf(value.toLowerCase()) !== -1)

        this.setState({ recommendations: _.slice(matched, 0, 5), selected: value });
    }

    render() {
        if (_.isEmpty(this.props.allCryptos)) {
            return <div> Loading... </div>
        }
        const error = this.state.error === 'not-found' ? <div>Not Found!</div> : ''

        return (
            <div>
                <AutoComplete
                    dataSource={this.state.recommendations}
                    placeholder="Search currency"
                    style={{ maxWidth: '300px' }}
                    onChange={this.onChange.bind(this)}
                />
                <Button type="primary" style={{ margin: '0 15px' }}
                    onClick={this.addCrypto.bind(this)}> Add </Button>
                {error}
            </div>
        );
    }
}

const mapStateToProps = ({ allCryptos }) => ({ allCryptos });

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchAllCryptos, fetchCrypto }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddCrypto);