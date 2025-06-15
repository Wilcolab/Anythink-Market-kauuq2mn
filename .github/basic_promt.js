function toCamelCase(str) {
  return str
    .toLowerCase()
    .split(/[^a-zA-Z0-9]+/)
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
}
console.log(toCamelCase("hello world")); // "helloWorld"
console.log(toCamelCase("Make-this_camel case!")); // "makeThisCamelCase"
