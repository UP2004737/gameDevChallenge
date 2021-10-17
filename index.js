'use strict';
// If your solution needs to add any
// listeners do so here
function init() {
    const nick = document.querySelector('#nick');
    nick.addEventListener('input', nickChanged)
}

// Here you should add any other
// code, functions, etc.

function updateLeaderBoard(names, me) {
    const topTen = document.querySelector("#top10")
    while (topTen.hasChildNodes()) {
        topTen.removeChild(topTen.firstChild);
    }

    for (let i = 0;i < names.length && i < 10; i++) {
        let li = document.createElement('li');
        li.append(names[i]);

        if (me === names[i]) {
            li.classList.add('myself')
        }

        topTen.appendChild(li);
    }
}

function nickChanged() {
    const name = document.querySelector('#playername');
    const nick = document.querySelector('#nick');
    name.innerHTML = nick.value
    
}

function updateStep() {
    let scalerange = document.querySelector('#scalerange')
    step = Number(scalerange.value)
}

function leaders(nameCount) {
    const topTen = document.querySelector("#top10")
    let leaderList = []
    let loopVal = 0
    let nodeLength = topTen.children.length

    if (nameCount > nodeLength) {
        loopVal = nodeLength
    } else {
        loopVal = nameCount
    }
    for (let i = 0; i < loopVal; i++) {
        leaderList.push(topTen.children[i].innerHTML)
    }

    return leaderList
}

// Don't edit below this line
window.addEventListener('load', init);
