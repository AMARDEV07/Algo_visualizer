const insertion = document.querySelector(".InsertionSort");
insertion.addEventListener('click', async function () {
    try {
        var mouseclick = new Audio('Mouseclick.mp3');
        mouseclick.play();
    } catch (e) {
        console.log("Audio file not found or failed to play");
    }
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await InsertionSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    const description = document.querySelector('#description');
    description.style.display = 'grid';
    description.classList.add('show');
    const section = document.querySelector('#fullbody');
    section.style.height = '185vh';
});

async function InsertionSort() {
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background = 'green';
    for (let i = 1; i < ele.length; i++) {
        let j = i - 1;
        let key = parseInt(originalValues[i]);
        let keyHeight = ele[i].style.height;
        let keyText = ele[i].innerHTML;
        ele[i].style.background = 'red';
        await waitforme(delay);
        while (j >= 0 && parseInt(originalValues[j]) > key) {
            ele[j].style.background = 'red';
            originalValues[j + 1] = originalValues[j];
            ele[j + 1].style.height = ele[j].style.height;
            ele[j + 1].innerHTML = ele[j].innerHTML;
            j--;
            await waitforme(delay);
            for (let k = i; k >= 0; k--) {
                ele[k].style.background = 'green';
            }
        }
        originalValues[j + 1] = key;
        ele[j + 1].style.height = keyHeight;
        ele[j + 1].innerHTML = keyText;
        ele[i].style.background = 'green';
    }
    try {
        var beep = new Audio('beep3.mp3');
        beep.play();
    } catch (e) {
        console.log("Audio file not found or failed to play");
    }
}