const { sumar } = require("./app");

test("suma 2 + 3", () => {
  expect(sumar(2, 3)).toBe(5);
});
