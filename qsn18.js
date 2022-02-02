/*Q.18 Write a JavaScript function which accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.*/
const datatypeOfFunction = (value) => {
  let dataTypes = [Number, String, Boolean, RegExp, Function, Object],
    x = 0,
    length;

  if (typeof value === "object" || typeof value === "function") {
    for (length = dataTypes.length; x < length; x++) {
      if (value instanceof dataTypes[x]) {
        return dataTypes[x];
      }
    }
  }
  return typeof value;
};
console.log(datatypeOfFunction(1222));
console.log(datatypeOfFunction("string"));
console.log(datatypeOfFunction(false));
