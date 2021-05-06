/*const add = (a, b) => a + b;

it('Adds two values', () => {
  expect(add(2, 4)).toBe(6);
});*/

/*const add = (a, b) => a + b;

it('Adds two values', () => {
  expect(add(2, 4)).not.toBe(7);
});*/

const users = ['Marek', 'Paweł', 'Kamil', 'Patrycja', 'Alicja'];
it('Checking name of users', () => {
  expect(users).toContain('Marek');
  expect(users).not.toContain('apples');
});
