import React, { Component } from 'react';
import { fetchAllCryptos } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'antd';
import { AutoComplete } from 'antd';
import _ from 'lodash';

class AddCrypto extends Component {

    constructor(props, state) {
        super(props);

        this.state = {
            recommendations: []
        }
    }

    componentWillMount() {
        if (_.isEmpty(this.props.allCryptos)) {
            this.props.fetchAllCryptos();
        }
    }

    addCrypto() {
        console.log('Added!');
    }

    handleSearch = (input) => {
        const values = this.props.allCryptos.map(c => { return { value: c.name, text: c.name } });
        const matched = _.filter(values, c => c.value.toLowerCase().indexOf(input.toLowerCase()) !== -1)

        this.setState({ recommendations: _.slice(matched, 0, 5) })
    }

    render() {
        if (_.isEmpty(this.props.allCryptos)) {
            return <div> Loading... </div>
        }

        return (
            <div>
                <AutoComplete
                    dataSource={this.state.recommendations}
                    placeholder="Search currency"
                    style={{ maxWidth: '300px' }}
                    onSearch={this.handleSearch}
                />
                <Button type="primary" style={{ margin: '0 15px' }}
                    onClick={this.addCrypto.bind(this)}> Add </Button>
            </div>
        );
    }
}

const mapStateToProps = ({ allCryptos }) => ({ allCryptos });

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchAllCryptos }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddCrypto);