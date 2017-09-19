
// class Lattice {
//     constructor() {

//     }

//     getRoot() {

//     }

//     connect() {

//     }
// }

export function getRoot(array, x) {
    let index = x;
    while (array[x] != x) {
        let newIndex = array[x];
        x = newIndex;
    }
    let root = x;
    array[index] = root;  // Shouldn`t all these functions be pure?
    return root;
}

export function connect(array, treeSize, x, y) {
    let rootX = getRoot(array, x);
    let rootY = getRoot(array, y);
    if (rootX != rootY) {
        if (treeSize[rootX] < treeSize[rootY]) {
            array[rootX] = rootY;
        } else {
            array[rootY] = rootX;            
        }
        let connectedTreeSize = treeSize[rootX] + treeSize[rootY];
        treeSize[rootX] = connectedTreeSize;
        treeSize[rootY] = connectedTreeSize;
    }
    return array;
}

export function isJoined(array, x, y) {
    let rootX = getRoot(array, x);
    let rootY = getRoot(array, y);
    let joined = (rootX == rootY) ? true : false;
    return joined;
}