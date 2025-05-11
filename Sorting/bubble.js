const bubble = document.querySelector(".BubbleSort");
bubble.addEventListener('click', async function () {
    try {
        var mouseclick = new Audio('Mouseclick.mp3');
        mouseclick.play();
    } catch (e) {
        console.log("Audio file not found or failed to play");
    }
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await BubbleSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    const description = document.querySelector('#description');
    description.style.display = 'grid';
    description.classList.add('show');
    const section = document.querySelector('#fullbody');
    section.style.height = '185vh';
});

async function BubbleSort() {
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length - 1; i++) {
        for (let j = 0; j < ele.length - i - 1; j++) {
            ele[j].style.background = 'red';
            ele[j + 1].style.background = 'red';
            if (parseInt(originalValues[j]) > parseInt(originalValues[j + 1])) {
                await waitforme(delay);
                swapping(ele[j], ele[j + 1]);
                let temp = originalValues[j];
                originalValues[j] = originalValues[j + 1];
                originalValues[j + 1] = temp;
            }
            ele[j].style.background = '#3498db';
            ele[j + 1].style.background = '#3498db';
        }
        ele[ele.length - i - 1].style.background = 'green';
    }
    ele[0].style.background = 'green';
    try {
        var beep = new Audio('beep3.mp3');
        beep.play();
    } catch (e) {
        console.log("Audio file not found or failed to play");
    }
}