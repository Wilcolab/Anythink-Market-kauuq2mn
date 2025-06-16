function toCamelCase(str) {
  return str
    .toLowerCase()
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((word, i) =>
      i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
}
console.log(toCamelCase("first name"));       // "firstName"
console.log(toCamelCase("user_id"));          // "userId"
console.log(toCamelCase("SCREEN_NAME"));      // "screenName"
console.log(toCamelCase("mobile-number"));    // "mobileNumber"
