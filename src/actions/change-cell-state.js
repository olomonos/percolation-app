export const type = 'CHANGE_CELL_STATE';

export default (openCells, cellIndex) => ({type, payload: {openCells, cellIndex}});