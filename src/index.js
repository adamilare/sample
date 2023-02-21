import _ from "lodash";
import './style.scss';
import cuteRabbit from './images/cute_rabbit.png';

function textComponent() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack!'], ' ');
  element.classList.add('hello');
  return element;
}

function imageComponent() {
  const element = document.createElement('img');
  element.src = cuteRabbit;
  element.classList.add('rabbit');
  return element;
}

document.body.appendChild(textComponent());
document.body.appendChild(imageComponent());
