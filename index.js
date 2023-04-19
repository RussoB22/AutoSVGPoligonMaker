const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

function createSVG(text, textColor, shapeName, shapeColor, shapes) {
  const shape = shapes[shapeName];
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.svg(shapeColor)}
    <text x="150" y="125" font-size="60" fill="${textColor}" dy="-0.25rem" text-anchor="middle">${text}</text>
  </svg>`;
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => (input.length <= 3 ? true : 'Text must be up to three characters.'),
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or a hexadecimal number for the text:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or a hexadecimal number for the shape:',
    },
  ])
  .then(({ text, textColor, shape, shapeColor }) => {
    const svgContent = createSVG(text, textColor, shape, shapeColor, shapes);
    fs.appendFile('./examples/' + `${shape}-${text}.svg`, svgContent, (err) => {
      if (err) {
        console.error('Error creating logo.svg:', err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  });
