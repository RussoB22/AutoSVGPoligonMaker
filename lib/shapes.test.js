const shapes = require('./shapes');

describe('shapes', () => {
  test('circle should return expected svg color', () => {
    const color = '#ff0000';
    const expected = `<circle cx="150" cy="100" r="90" fill="${color}" />`;
    const actual = shapes.circle.svg(color);
    expect(actual).toBe(expected);
  });

  test('triangle should return expected svg color', () => {
    const color = '#00ff00';
    const expected = `<polygon points="150,10 290,150 10,150" fill="${color}" />`;
    const actual = shapes.triangle.svg(color);
    expect(actual).toBe(expected);
  });

  test('square should return expected svg color', () => {
    const color = '#0000ff';
    const expected = `<rect x="5" y="5" width="290" height="190" fill="${color}" />`;
    const actual = shapes.square.svg(color);
    expect(actual).toBe(expected);
  });
});
