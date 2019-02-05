import { pairs } from './consts';

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
        this.channels = [];
    }

    handleMessage(msg) {
        this.handleEvents(JSON.parse(msg.data));
    }

    handleEvents(response) {
        switch (response.event) {
            case 'heartbeat':
                break;
            case 'subscriptionStatus':
                this.channels.push({
                    channelID: response.channelID,
                    pair: response.pair,
                    ask: '',
                    bid: '',
                });
                break;
            case undefined:
                let channel = this.channels.find(el => el.channelID === response[0]);
                channel['bid'] = parseFloat(response[1][0]).toFixed(4);
                channel['ask'] = parseFloat(response[1][1]).toFixed(4);
                break;
            default:
                break;
        }
        this.store.dispatch({
            type: 'UPDATE',
            payload: this.channels
        });
    }

    subscribe(pair){
        this.socket.send(JSON.stringify({
            "event": "subscribe",
            "pair": [pair],
            "subscription": {
                "name": "spread", 
            }
        }))
        
    }

}


