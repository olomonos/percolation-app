export const type = 'PERCOLATION_BUTTON_CLICK';

export default (latticeStructure) => ({type, payload: {latticeStructure}});