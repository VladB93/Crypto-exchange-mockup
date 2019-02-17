import { pairs } from '../consts';

export default class KrakenSocket {
    constructor(prop) {
        this.store = prop;
        this.socket = new WebSocket('wss://ws-sandbox.kraken.com');
        this.socket.onopen = () => {
            this.socket.send(JSON.stringify({
                "event": "subscribe",
                "pair": pairs,
                "subscription": {
                    "name": "spread",
                }
            }))
        }
        this.socket.onmessage = this.handleMessage.bind(this);
    }

    handleMessage(msg) {
        this.handleEvents(JSON.parse(msg.data));
    }

    handleEvents(response) {
        switch (response.event) {
            case 'heartbeat':
                break;
            case 'subscriptionStatus':
                this.store.dispatch({
                    type: 'CREATE_PAIR',
                    payload: {
                        channelID: response.channelID,
                        pair: response.pair,
                        bid: [],
                        ask: [],
                    }
                });
                break;
            case undefined:
                this.store.dispatch({
                    type: 'UPDATE_PAIR',
                    payload: {
                        channelID: response[0],
                        bid: response[1][0],
                        ask: response[1][1]
                    }
                });
                break;
            default:
                break;
        }
    }

    subscribe(pair) {
        this.socket.send(JSON.stringify({
            "event": "subscribe",
            "pair": [pair],
            "subscription": {
                "name": "spread",
            }
        }));
    }

}
