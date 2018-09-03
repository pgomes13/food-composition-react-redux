/**
 * Construct the api query string as per the terms provided
 * @param base_url - the USDA NDB api base url
 * @param type - the api type ie. search
 * @param api_key - must be a data.gov registered API key
 * @param q - Search terms
 * @param ds - Data source. Must be either 'Branded Food Products' or 'Standard Reference'
 * @param fg - Food group ID
 * @param sort - Sort the results by food name (n) or by search relevance (r)
 * @param max - maximum rows to return
 * @param offset - beginning row in the result set to begin
 * @return {string} - the complete api query string
 */
export const constructAPIQueryString = ({ base_url, type, api_key, q = "", ds = "", fg = "", sort = "r", max = 50, offset = 0 }) => {
    return `${base_url}/${type}?q=${q}&ds=${ds}&fg=${fg}&sort=${sort}&max=${max}&offset=${offset}&api_key=${api_key}`;
};

/**
 * Get the header for the request
 * @return {Object} - the request header
 */
export const getHeaders = () => {
    return {
        headers: {
            'Content-Type': 'application/json'
        }
    };
};