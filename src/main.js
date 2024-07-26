import { nanoid } from 'nanoid';
import './style.css';

const randomIdBtnEl = document.querySelector('button');
const displayEl = document.querySelector('h2');

randomIdBtnEl.addEventListener('click', () => {
  displayEl.innerHTML = nanoid();
});