export default function (state = [], action) {

    switch (action.type) {
        case 'CREATE_PAIR':
            return [...state, action.payload];
        case 'UPDATE_PAIR':
            const { channelID, bid, ask } = action.payload;
            let pairs = state.map((el) => {
                if (channelID === el.channelID) {
                    if (el.bid.length === 0) {
                        el.bid = [bid, bid];
                        el.ask = [ask, ask];
                    } else {
                        if (el.bid[1] !== bid) {
                            el.bid.shift();
                            el.bid.push(bid);
                        }
                        if (el.ask[1] !== ask) {
                            el.ask.shift();
                            el.ask.push(ask);
                        }
                    }
                }
                return el;
            })
            return pairs;
        default:
            return state;
    }
}