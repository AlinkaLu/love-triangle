module.exports =  {
    isEqualArrays(arr1, arr2) {
        const objMap = {};

        arr1.forEach((e1) => arr2.forEach((e2) => {
            if (e1 === e2) {
                    objMap[e1] = objMap[e1] + 1 || 1;
                }
            }
        ));

        return Object.keys(objMap).map(e => Number(e)).length === arr1.length;
    },

    isFakeTriangle(arr) {
        return arr[0] === arr[1];
    },

    sumArray(arr) {
        return arr.reduce((x, y) => x + y);
    }
};