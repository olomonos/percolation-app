
export class Lattice {
    constructor(side) {
        const size = side * side + 2;
        const lattice = [];
        const treeSize = [];

        this.size = size;

        for (let i = 0; i < size; i++) {
            lattice[i] = i;
        }
        this._lattice = lattice;
        
        for (let j = 0; j < size; j++) {
            treeSize[j] = 1;
        }
        this._treeSize = treeSize;

        for (let i = 1; i <= side; i++) {
            this.connect(i, 0);
        }

        for (let i = size - 1 - side; i < size - 1; i++) {
            this.connect(i, size - 1);
        }
    }

    connect(x, y) {
        const treeSize = this._treeSize;
        const array = this._lattice;
        const rootX = this.findAndUpdateRoot(x);
        const rootY = this.findAndUpdateRoot(y);

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
    }
        
    findAndUpdateRoot(x) {
        const array = this._lattice;
        const initial = x;

        while (array[x] != x) {
            x = array[x];
        }
        let root = x;
        array[initial] = root;
        return root;
    }

    isPercolated() {
        return this.findAndUpdateRoot(0) == this.findAndUpdateRoot(this.size - 1);
    }
}

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
    let joined = (rootX == rootY);
    return joined;
}

// add isPercolate function (like in it-percolates.js)