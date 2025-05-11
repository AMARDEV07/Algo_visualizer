const selection = document.querySelector(".SelectionSort");
selection.addEventListener('click', async function () {
    try {
        var mouseclick = new Audio('Mouseclick.mp3');
        mouseclick.play();
    } catch (e) {
        console.log("Audio file not found or failed to play");
    }
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await SelectionSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    const description = document.querySelector('#description');
    description.style.display = 'grid';
    description.classList.add('show');
    const section = document.querySelector('#fullbody');
    section.style.height = '185vh';
});

async function SelectionSort() {
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length; i++) {
        let min_index = i;
        ele[i].style.background = 'red';
        for (let j = i + 1; j < ele.length; j++) {
            ele[j].style.background = 'red';
            await waitforme(delay);
            if (parseInt(originalValues[j]) < parseInt(originalValues[min_index])) {
                if (min_index !== i) {
                    ele[min_index].style.background = '#3498db';
                }
                min_index = j;
            } else {
                ele[j].style.background = '#3498db';
            }
        }
        await waitforme(delay);
        swapping(ele[min_index], ele[i]);
        let temp = originalValues[min_index];
        originalValues[min_index] = originalValues[i];
        originalValues[i] = temp;
        ele[min_index].style.background = '#3498db';
        ele[i].style.background = 'green';
    }
    try {
        var beep = new Audio('beep3.mp3');
        beep.play();
    } catch (e) {
        console.log("Audio file not found or failed to play");
    }
}