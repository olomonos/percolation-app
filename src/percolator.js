
// class Lattice {
//     constructor() {

//     }

//     getRoot() {

//     }

//     connect() {

//     }
// }

export function getRoot(array, index) {
    while (array[index] != index) {
        let newIndex = array[index];
        index = newIndex;
    }
    return index;
}

// weighted trees
export function connect(array, x, y) {
    let rootX = getRoot(array, x);
    let rootY = getRoot(array, y);
    if (rootX != rootY) {
        array[rootX] = rootY;
    }
    return array;
}

export function isJoined(array, x, y) {
    let rootX = getRoot(array, x);
    let rootY = getRoot(array, y);
    let joined = (rootX == rootY) ? true : false;
    return joined;
}