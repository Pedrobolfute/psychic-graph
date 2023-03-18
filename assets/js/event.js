//to-do

const main = document.querySelector('.main');

const div = document.createElement('div');
const svg = document.createElement('svg');
const span = document.createElement('span')


const chart = div;
chart.classList.add('chart');
main.appendChild(chart);

const svgCategory1 = svg;
svgCategory1.classList.add('category-1 points');
svgCategory1.setAttribute('viewBox', '0 0 260 80');
svgCategory1.setAttribute('preserveAspectRatio', 'none');
chart.appendChild(svgCategory1);

const svgCategory2 = div.classList.add('opa');