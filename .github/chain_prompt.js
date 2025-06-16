function toKebabCase(str) {
  if (typeof str !== 'string') throw new Error('Input must be a string');

  // Step 1 & 2: Remove non-alphanumeric except spaces, handle camel/Pascal case by adding space before uppercase letters
  const cleaned = str
    .replace(/[^a-zA-Z0-9 ]+/g, '')        // Remove special chars except spaces
    .replace(/([a-z])([A-Z])/g, '$1 $2')  // Add space between camelCase/PascalCase boundaries
    .replace(/\s+/g, ' ')                  // Replace multiple spaces with single space
    .trim();

  // Step 3: lowercase and replace spaces with hyphens
  return cleaned.toLowerCase().replace(/ /g, '-');
}
console.log(toKebabCase("helloWorld"));           // "hello-world"
console.log(toKebabCase("PascalCaseExample"));    // "pascal-case-example"
console.log(toKebabCase("multiple   spaces!@#")); // "multiple-spaces"
console.log(toKebabCase("special_characters*&^")); // "specialcharacters"
