export const type = 'CURRENT_POSITION';

const findCurrentPosition = id => {
    return {
        type,
        payload: id,
    }
}

export default findCurrentPosition;