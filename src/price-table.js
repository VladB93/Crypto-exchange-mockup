import React from 'react';
import { connect } from 'react-redux';

class PriceTable extends React.Component {

    render() {
        let pairs = this.props.pairs;
        return (
            <table>
                <thead>
                    <tr>
                        {
                            pairs.map((e) => (
                                <td key={e.channelID}>
                                    <p className="title">{e.pair}</p>
                                    <span>ASK</span>
                                    <span className="right">BID</span>
                                </td>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            pairs.map((e, index) => {
                                let classColor = e.ask[1] >= e.ask[0] ? 'green' : 'red';
                                return <td key={index} className={classColor}>
                                    <span>{e.ask[1]}|</span>
                                    <span>{e.bid[1]}</span>
                                </td>
                            })
                        }
                    </tr>
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ pairs }) {
    return {
        pairs
    };
}

export default connect(mapStateToProps, null)(PriceTable);