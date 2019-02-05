import React from 'react';
import { connect } from 'react-redux';

class PriceTable extends React.Component {

    render() {
        let channels = this.props.channels;
        return (
                <table>
                    <thead>
                        <tr>
                            {
                                channels.map((e) => (
                                    <td key={e.channelID}>
                                        <p>{e.pair}</p>
                                        <span>ASK|</span>
                                        <span>BID</span>
                                    </td>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                                channels.map((e) => (
                                    <td key={e.channelID}>
                                        <span>{e.ask}|</span>
                                        <span>{e.bid}</span>
                                    </td>
                                ))
                            }
                        </tr>
                    </tbody>
                </table>
        )
    }
}

function mapStateToProps({ channels }) {
    return {
        channels
    };
}

export default connect(mapStateToProps, null)(PriceTable);