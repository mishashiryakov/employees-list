export const makeRequest = (url) => fetch(url).then(res => res.json());