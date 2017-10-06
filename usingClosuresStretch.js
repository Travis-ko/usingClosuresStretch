var wrapLog = function(callback, name) {
    return function(a, b, c) {
        if (c == undefined)
            var temp = `${name} (${a},${b}) => ${callback(a, b, c)}`;
        if (c !== undefined) {
            var temp = `${name} (${a},${b},${c}) => ${callback(a, b, c)}`;
        }
        return temp;
    };

};
//area accepts two arguements to call on. Its a function
var area = function(x, y) {
    return x * y;
};
var logArea = wrapLog(area, "area");
var volume = function(x, y, z) {
    return x * y * z;
};
var logVolume = wrapLog(volume, "volume");
console.log(logArea(5, 3)); // area(5, 3) => 15
console.log(logArea(3, 2)); // area(3, 2) => 6
console.log(logVolume(5, 3, 2)); // volume(5, 3, 2) => 30
console.log(logVolume(3, 2, 4)); // volume(3, 2, 4) => 24