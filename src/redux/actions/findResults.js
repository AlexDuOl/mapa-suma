export const type = 'RESULTS';

const findResults = text => {
    return {
        type,
        payload: text,
    }
}

export default findResults;