// https://cryptopanic.com/developers/api/
import { createRequest } from './helper_functions';
const API_TOKEN = '6b6cc9898bd669d03b8fc3e9fa7c44138752a5a6';

export async function getNews(currencies = [], filter = '') {
    currencies = currencies.split('').join(',');
    const url = `https://cryptopanic.com/api/v1/posts/?auth_token=${API_TOKEN}&public=true&currencies=${currencies}&filters=${filter}`;
    const response = await createRequest(url)
    return response;
}