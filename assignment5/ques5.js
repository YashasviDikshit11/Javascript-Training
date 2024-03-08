// Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
// const obj = {
//    a: 1,
//    b: { c: 2, d: [3, 4] }
// };
// Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }
let obj = {
    a: 1,
    b: { c: 2, d: [3, 4] }
};

console.log(obj);

function flattenObject(obj) {
    const flatObject = {};

    function flatten(obj, prefix = '') {
        for (const key in obj) {
            const value = obj[key];
            const prefixedKey = prefix ? `${prefix}.${key}` : key;

            if (typeof value === 'object' && !Array.isArray(value)) {
                flatten(value, prefixedKey);
            } else if (Array.isArray(value)) {
                value.forEach((item, index) => {
                    if (typeof item === 'object') {
                        flatten(item, `${prefixedKey}.${index}`);
                    } else {
                        flatObject[`${prefixedKey}.${index}`] = item;
                    }
                });
            } else {
                flatObject[prefixedKey] = value;
            }
        }
    }

    flatten(obj);
    return flatObject;
}

console.log(flattenObject(obj));