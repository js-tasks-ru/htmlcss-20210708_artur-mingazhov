/*
   *script for testing histogram
*/


const numbOfColumns = 20;
const maxColumnHeight = 50;
const histogramBody = document.querySelector('.histogram__body');

histogramBody.innerHTML = ''

for (let x = 0; x < numbOfColumns; x++) {

   let histogramColumn = document.createElement('div')
   histogramColumn.innerHTML = `<div style="height: ${getColumnHeight()}px;" class="histogram__column"></div>`
   histogramColumn = histogramColumn.firstElementChild

   histogramBody.append(histogramColumn)

}

function getColumnHeight() {
   return Math.ceil(getRundomNumb() * maxColumnHeight)
}

function getRundomNumb() {

   const n = Math.random();
   return n > 0.9 ? 1 : n

}

