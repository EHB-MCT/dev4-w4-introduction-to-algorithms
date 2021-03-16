"use strict";

import students from "./students.js";

console.log(students);
let randomIndex = null;

/*
Werk de functies stupidSearch en binarySearch uit.
Tel in de functie het aantal stappen (= loop iteraties) dat nodig was om het getal te vinden.
Laat de functie het aantal stappen returnen.
*/

const stupidSearch = (array, value) => {
  return 0;
};

const binarySearch = (array, value) => {
  return 1;
};

const onClickStupidSearch = () => {
  console.log('Stupid search clicked');
  let start = performance.now();
  const steps = stupidSearch(students, students[randomIndex]);
  let end = performance.now();
  let time = end - start;
  updateHtml('stupid-search', students[randomIndex], steps, time);
};

const onClickBinarySearch = () => {
  console.log('binary search clicked');
  let start = performance.now();
  const steps = binarySearch(students, students[randomIndex]);
  let end = performance.now();
  let time = end - start;
  updateHtml('binary-search', students[randomIndex], steps, time);
};

const updateHtml = (id, result, steps, time) => {
  console.log('update');
  const container = document.getElementById(id);
  container.getElementsByClassName('guess')[0].innerHTML = result;
  container.getElementsByClassName('statistics')[0].innerHTML = `<h2>Steps: ${steps}</h2><h2>Time: ${time}ms</h2>`;
};

const init = () => {
  //get random student
  randomIndex = Math.floor(Math.random()*students.length);
  document.getElementById('random').innerHTML = students[randomIndex];

  //init click
  document.getElementById('click-stupid-search').addEventListener('click', onClickStupidSearch);
  document.getElementById('click-binary-search').addEventListener('click', onClickBinarySearch);
};

init();