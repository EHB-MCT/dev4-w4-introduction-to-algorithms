"use strict";

const unsortedList = new Array(100);
const randomMaxValue = 100;

const renderList = (htmlId, title, array) => {
    let htmlString = `<div class="list"><h3>${title}</h3><div class="list-elements">`;
    array.forEach(el => {
        htmlString += `<div>${el}</div>`;
    });
    htmlString += '</div></div>';
    document.getElementById(htmlId).insertAdjacentHTML('beforeend', htmlString);
};

const init = () => {
    //fill array with randoms
    for(let i = 0; i < unsortedList.length; i++) {
        unsortedList[i] = Math.floor(Math.random() * randomMaxValue);
    }

    console.log(unsortedList);
    renderList('unsorted', 'Unsorted List', unsortedList);
};

const bubbleSort = (unsorted) => {
    return unsorted;
};

const selectionSort = (unsorted) => {
    return unsorted;
};

const mergeSort = (unsorted) => {
    return unsorted;
};

/* const quickSort = (unsorted) => {
    return unsorted;
} */

init();

//Doe dit met de verschillende render sorteermethodes:
renderList('sorted', 'Bubble sort', bubbleSort(unsortedList));