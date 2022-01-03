const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;
const colors = [
  '#ffc6ff',
  '#bdb2ff',
  '#a0c4ff',
  '#9bf6ff',
  '#9bf6ff',
  '#caffbf',
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(element) {
  const color = getColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#fff';
  element.style.boxShadow = `0 0 2px #fff`;
}

function getColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
