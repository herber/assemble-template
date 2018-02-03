const assembleTemplate = require('./');

const fn = a => {
  return 'Module: ' + a;
};

test('normalizes tagged template literals', () => {
  const testing = 'testing';
  const literal = assembleTemplate`Some text
	for ${testing} + ${fn('assembleTemplate')}`;
  const expectedLiteral = `Some text
	for testing + Module: assembleTemplate`;

  expect(literal).toBe(expectedLiteral);
});
