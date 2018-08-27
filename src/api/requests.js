import { constructAPIQueryString, getHeaders } from './utils';

export const searchProducts = (query) => {
    const USDA_SEARCH_API_ENDPOINT = constructAPIQueryString(query);

    return fetch(USDA_SEARCH_API_ENDPOINT, getHeaders)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json.list.item.map(({ offset, group, name, ndbno, ds, manu }) => ({
                offset,
                group,
                name,
                ndbno,
                ds,
                manu
            }));
        });
};


