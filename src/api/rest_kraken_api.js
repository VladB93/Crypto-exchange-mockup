/*

var proxyURL = 'https://cors-anywhere.herokuapp.com/';
var requestURL = 'https://api.kraken.com/0/public/OHLC?pair=xbtusd&interval=30&since=1549836000';
fetch(proxyURL+requestURL).then(res=> res.json()).then(res=> console.log(res))

var proxyURL = 'https://cors-anywhere.herokuapp.com/';
var requestURL = 'https://api.kraken.com/0/public/Depth?pair=xbtusd';
fetch(proxyURL+requestURL).then(res=> res.json()).then(res=> console.log(res))

*/

import {createRequest} from './helper_functions';

const proxyURL = 'https://cors-anywhere.herokuapp.com';
const defaultSince = new Date().setHours(-24*14) // 2 weeks ago

export async function getHistoryOHLCdata(pair, interval, since = defaultSince) {
    const url = `${proxyURL}/https://api.kraken.com/0/public/OHLC?pair=${pair}&interval=${interval}&since=${since}`;
    const response = await createRequest(url)
    return response;
}

export async function getDepthData(pair, count) {
    const url = `${proxyURL}/https://api.kraken.com/0/public/OHLC?pair=${pair}&count=${count}`;
    const response = await createRequest(url);
    return response;
}
