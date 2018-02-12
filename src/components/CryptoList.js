import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCrypto } from '../actions/index';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class CryptoList extends Component {

    componentDidMount() {
        this.props.fetchCrypto("BTC");
    }

    render() {
        if (!this.props.cryptos) return <div></div>;

        return (
            <div style={{ width: '300px' }}>
                <Sparklines data={this.props.cryptos.BTC}
                    limit={12}
                    width={150}
                    height={50}
                    margin={5}
                    max={9000}
                    min={8000}
                >
                    <SparklinesLine color="#aa55aa" />
                </Sparklines>
            </div>
        )
    }
}

const mapStateToProps = ({ cryptos }) => ({ cryptos })

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCrypto }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoList);