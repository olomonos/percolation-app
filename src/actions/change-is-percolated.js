export const type = 'CHANGE_IS_PERCOLATED';

export default (isPercolated) => ({type, payload: {isPercolated}});