// ==UserScript==
// @name         Leetcode 75 turn off category
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://leetcode.com/studyplan/leetcode-75/*
// @grant        none
// ==/UserScript==


async function hideCategories() {
  console.log('hideCategories called')
  const categoryElementsSelector = '.text-\\[12px\\].font-medium';

  const categoryElements = document.querySelectorAll(categoryElementsSelector);
  console.log(`categoryElements count: ${categoryElements.length}`)
  for(let i=0;i<categoryElements.length;i++) {
    categoryElements[i].parentElement.style.display = 'none';
  }
  console.log('Hiding done')
}

async function waitFor(durationInSeconds) {
   console.log(`Waiting for ${durationInSeconds} seconds`);

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Wait over');
      resolve("anything");
    }, durationInSeconds*1000);
  });
}


async function perform() {
   await waitFor(2);
   await hideCategories();
}

window.onload = perform;
