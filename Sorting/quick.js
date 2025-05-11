const quick = document.querySelector(".QuickSort");
quick.addEventListener('click', async function () {
    try {
        var mouseclick = new Audio('Mouseclick.mp3');
        mouseclick.play();
    } catch (e) {
        console.log("Audio file not found or failed to play");
    }
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    const ele = document.querySelectorAll(".bar");
    await QuickSort(0, ele.length - 1);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    const description = document.querySelector('#description');
    description.style.display = 'grid';
    description.classList.add('show');
    const section = document.querySelector('#fullbody');
    section.style.height = '185vh';
});

async function QuickSort(l, r) {
    if (l < r) {
        let pi = await partition(l, r);
        await QuickSort(l, pi - 1);
        await QuickSort(pi + 1, r);
    } else {
        if (l >= 0 && r >= 0 && l < document.querySelectorAll(".bar").length && r < document.querySelectorAll(".bar").length) {
            document.querySelectorAll(".bar")[l].style.background = 'green';
        }
    }
}

async function partition(l, r) {
    const ele = document.querySelectorAll(".bar");
    let pivot = parseInt(originalValues[r]);
    ele[r].style.background = 'red';
    let i = l - 1;
    for (let j = l; j < r; j++) {
        ele[j].style.background = 'yellow';
        await waitforme(delay);
        if (parseInt(originalValues[j]) <= pivot) {
            i++;
            ele[i].style.background = 'orange';
            await waitforme(delay);
            swapping(ele[i], ele[j]);
            let temp = originalValues[i];
            originalValues[i] = originalValues[j];
            originalValues[j] = temp;
            ele[j].style.background = 'yellow';
            if (i !== j) ele[i].style.background = '#3498db';
        } else {
            ele[j].style.background = '#3498db';
        }
    }
    await waitforme(delay);
    swapping(ele[i + 1], ele[r]);
    let temp = originalValues[i + 1];
    originalValues[i + 1] = originalValues[r];
    originalValues[r] = temp;
    ele[r].style.background = '#3498db';
    ele[i + 1].style.background = 'green';
    return i + 1;
}