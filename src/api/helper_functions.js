function handleError(res) {
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return response;
}

export async function createRequest(url) {
    return fetch(url)
        .then(handleError)
        .then(res => res.json())
        .then(res => res)
        .catch(err => err);
}

export async function createMultipleRequests(requests) {
    const promises = [];
    for (let request of requests) {
        promises.push(request);
    }
    return await Promise.all(promises);
}