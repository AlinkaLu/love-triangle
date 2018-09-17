const {isEqualArrays, isFakeTriangle, sumArray} = require('./modules');
/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

    let loveTriangles = [];
    for (let i = 0; i < preferences.length; i++) {

        let keys = [];
        let values = [];
        let key = i;
        for (let j = 0; j < 3; j++) {
            keys[j] = key + 1;
            values[j] = preferences[key];
            key = preferences[key] - 1;
        }

        if ((sumArray(keys) === sumArray(values)) && (i + 1 === values[2]) && !isFakeTriangle(values)) {
            let exists = false;
            for (let k = 0; k < loveTriangles.length; k++) {
                if (isEqualArrays(loveTriangles[k], values)) {
                    exists = true;
                }
            }

            if (!exists) {
                loveTriangles.push(values);
            }
        }
    }

    return loveTriangles.length;

};

 






   
