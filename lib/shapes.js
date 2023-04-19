const shapes = {
    circle: {
      shapeName: 'circle',
      svg: function (color) {
        return `<circle cx="150" cy="100" r="90" fill="${color}" />`;
      },
    },
    triangle: {
      shapeName: 'triangle',
      svg: function (color) {
        return `<polygon points="150,10 290,150 10,150" fill="${color}" />`;
      },
    },
    square: {
      shapeName: 'square',
      svg: function (color) {
        return `<rect x="5" y="5" width="290" height="190" fill="${color}" />`;
      },
    },
  };
  
  module.exports = shapes;
  