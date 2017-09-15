export const type = 'GENERATE';

export default (side) => ({type, payload: {side}});