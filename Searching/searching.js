let isStopped = false;
let lastAlgorithm = null;
let initialArray = [];
let currentSearchValue = null;

const slider = document.querySelector('#size_slider');
const output = document.querySelector('#size_value');
const body = document.querySelector('#mainbody');
const speedSlider = document.querySelector('#speed_slider');
const speedOutput = document.querySelector('#speed_value');
const select = document.querySelector('.select');
const icon = document.querySelector('.icon');
const menu = document.querySelector('.menu');
const options = document.querySelectorAll('.menu li');
const selected = document.querySelector('.selected');
const generate = document.querySelector('#generate');
const searchedVal = document.querySelector('#searchingVal');
const searchText = document.querySelector('.selected');
const stopResumeBtn = document.querySelector('#stop_resume');
const animationStatus = document.querySelector('#animation_status');

function disableSortingBtn() {
    document.querySelector("#linear_Search").disabled = true;
    document.querySelector("#binary_Search").disabled = true;
    document.querySelector("#searchingVal").disabled = true;
    document.querySelector("#stop_resume").disabled = true;
}

function enableSortingBtn() {
    document.querySelector("#linear_Search").disabled = false;
    document.querySelector("#binary_Search").disabled = false;
    document.querySelector("#searchingVal").disabled = false;
    document.querySelector("#stop_resume").disabled = false;
}

function disableSizeSlider() {
    document.querySelector("#size_slider").disabled = true;
    document.querySelector('#size').disabled = true;
}

function enableSizeSlider() {
    document.querySelector("#size_slider").disabled = false;
    document.querySelector('#size').disabled = false;
}

function disableNewArrayBtn() {
    document.querySelector("#generate").disabled = true;
}

function enableNewArrayBtn() {
    document.querySelector("#generate").disabled = false;
}

function waitcount(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    });
}

function resetBars() {
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    for (let i = 0; i < initialArray.length; i++) {
        let div = document.createElement('div');
        div.className = 'bars';
        div.style.height = `${initialArray[i]}px`;
        div.innerHTML = `${initialArray[i]}`;
        div.style.width = `${90 / arrayVal}vw`;
        body.appendChild(div);
    }
    const step = document.querySelector('.step');
    step.innerHTML = '';
    const index = document.querySelector('.index');
    index.innerHTML = '';
    count = 0;
}

output.innerHTML = slider.value;

var arr = [];
for (let i = 1; i <= slider.value; i++) {
    let temp = Math.floor(Math.random() * 100) + 1;
    arr.push(temp);
}
for (let i = 0; i < slider.value; i++) {
    let bar = document.createElement('div');
    bar.className = 'bars';
    bar.style.height = `${arr[i]}px`;
    bar.innerHTML = `${arr[i]}`;
    bar.style.width = `${90 / slider.value}vw`;
    body.appendChild(bar);
}
initialArray = [...arr];

var arrayVal = slider.value;
slider.oninput = function () {
    searchText.innerHTML = `Size Changed`;
    output.innerHTML = this.value;
    arrayVal = this.value;
    arr = [];
    for (let i = 1; i <= this.value; i++) {
        let temp = Math.floor(Math.random() * 100) + 1;
        arr.push(temp);
    }
    resetBars();
    initialArray = [...arr];
};

generate.addEventListener('click', () => {
    var mouseclick = new Audio('Mouseclick.mp3');
    mouseclick.play();
    enableSortingBtn();
    enableSizeSlider();
    searchText.innerHTML = `New Array Generated`;
    const description = document.querySelector('#description');
    description.style.display = 'none';
    const section = document.querySelector('#fullbody');
    section.style.height = '100vh';
    searchedVal.value = '';
    resetBars();
    arr = [];
    for (let i = 1; i <= arrayVal; i++) {
        let temp = Math.floor(Math.random() * 100) + 1;
        arr.push(temp);
    }
    initialArray = [...arr];
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    for (let i = 0; i < arrayVal; i++) {
        let div = document.createElement('div');
        div.className = 'bars';
        div.style.height = `${arr[i]}px`;
        div.innerHTML = `${arr[i]}`;
        div.style.width = `${90 / arrayVal}vw`;
        body.appendChild(div);
    }
});

speedOutput.innerHTML = speedSlider.value;
let delay = 260;
speedSlider.oninput = function () {
    searchText.innerHTML = `Speed Changed`;
    speedOutput.innerHTML = this.value;
    delay = 760 - (100 * this.value);
};

menu.classList.toggle('close');
select.addEventListener('click', () => {
    menu.classList.toggle('close');
    icon.classList.toggle('icon-rotate');
});
options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText;
        menu.classList.toggle('close');
        icon.classList.toggle('icon-rotate');
    });
});

searchedVal.addEventListener('input', () => {
    const searchVal = searchedVal.value.trim();
    if (searchVal) {
        const searchNum = parseInt(searchVal);
        if (isNaN(searchNum) || searchNum < 1 || searchNum > 100) {
            alert('Please enter a valid search value between 1 and 100.');
            searchedVal.value = '';
            return;
        }
        currentSearchValue = searchNum;
    }
});

stopResumeBtn.addEventListener('click', async () => {
    var mouseclick = new Audio('Mouseclick.mp3');
    mouseclick.play();
    isStopped = !isStopped;
    stopResumeBtn.textContent = isStopped ? 'Resume Animation' : 'Stop Animation';
    animationStatus.textContent = isStopped ? 'Stopped' : 'Running';
    searchText.innerHTML = isStopped ? `Animation Stopped` : `Animation Resumed`;
    if (isStopped) {
        resetBars();
        findingAudio.pause();
    } else if (lastAlgorithm && currentSearchValue) {
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();
        const array1 = document.querySelectorAll('.bars');
        let Array = [];
        array1.forEach(element => Array.push(element));
        if (lastAlgorithm === 'linear') {
            var ind = await linearSearch(Array, Array.length, parseInt(currentSearchValue));
            const index = document.querySelector('.index');
            if (ind != -1) {
                searchText.innerHTML = `Searching Complete`;
                index.innerHTML = `${currentSearchValue} found at index ${ind}.`;
            } else {
                searchText.innerHTML = `Not Found!!`;
                index.innerHTML = `${currentSearchValue} not found in the array.`;
                findingAudio.pause();
            }
        } else if (lastAlgorithm === 'binary') {
            await sorting(Array);
            await Arrange(Array);
            var ind = await binarySearch(Array, Array.length, parseInt(currentSearchValue));
            const index = document.querySelector('.index');
            if (ind != -1) {
                searchText.innerHTML = `Searching Complete`;
                index.innerHTML = `${currentSearchValue} found at index ${ind}.`;
            } else {
                searchText.innerHTML = `Not Found!!`;
                index.innerHTML = `${currentSearchValue} not found in the array.`;
            }
        }
        enableNewArrayBtn();
    }
});