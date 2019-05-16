import leftPad from './leftPad';

const serNos = [6934, 23111, 23114, 1001, 211161];
const partEl = document.getElementById('part-list');
// eslint-disable-next-line no-return-assign, no-param-reassign
const strList = serNos.reduce((acc, element) => (acc += `<li>${leftPad(element, 8, '0')}</li>`), '');

partEl.innerHTML = strList;
