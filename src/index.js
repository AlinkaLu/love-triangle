
module.exports = function getLoveTrianglesCount(preferences = []) {
    function isEqualArrays(arr1, arr2) {
        const objMap = {};

        arr1.forEach((e1) => arr2.forEach((e2) => {
            if (e1 === e2) {
                    objMap[e1] = objMap[e1] + 1 || 1;
                }
            }
        ));

        return Object.keys(objMap).map(e => Number(e)).length === arr1.length;
    }

    function isFakeTriangle(arr) {
        return arr[0] === arr[1];
    }

    function sumArray(arr) {
        return arr.reduce((x, y) => x + y);
    }


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

 






   
