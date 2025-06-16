function camelCase(input) {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }
  return input.toLowerCase().replace(/ /g, '_');
}

function toDotCase(str) {
  return str
    .toLowerCase()
    .trim()
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
    .join('.');
}

console.log(camelCase("HI THERe")); // "hi_there"
console.log(camelCase(123));        // Error: Input must be a string
