const merge = document.querySelector(".MergeSort");
merge.addEventListener('click', async function () {
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
    await MergeSort(0, ele.length - 1);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    const description = document.querySelector('#description');
    description.style.display = 'grid';
    description.classList.add('show');
    const section = document.querySelector('#fullbody');
    section.style.height = '185vh';
});

async function MergeSort(l, r) {
    if (l < r) {
        let mid = Math.floor((l + r) / 2);
        await MergeSort(l, mid);
        await MergeSort(mid + 1, r);
        await mergeArray(l, mid, r);
    }
}

async function mergeArray(l, mid, r) {
    const ele = document.querySelectorAll(".bar");
    let n1 = mid - l + 1;
    let n2 = r - mid;
    let L = new Array(n1);
    let R = new Array(n2);
    let L_values = new Array(n1);
    let R_values = new Array(n2);
    for (let i = 0; i < n1; i++) {
        await waitforme(delay);
        ele[l + i].style.background = 'orange';
        L[i] = ele[l + i].style.height;
        L_values[i] = parseInt(originalValues[l + i]);
    }
    for (let j = 0; j < n2; j++) {
        await waitforme(delay);
        ele[mid + 1 + j].style.background = 'yellow';
        R[j] = ele[mid + 1 + j].style.height;
        R_values[j] = parseInt(originalValues[mid + 1 + j]);
    }
    await waitforme(delay);
    let i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        await waitforme(delay);
        if (L_values[i] <= R_values[j]) {
            if (n1 + n2 === ele.length) {
                ele[k].style.background = 'green';
            } else {
                ele[k].style.background = '#3498db';
            }
            ele[k].style.height = L[i];
            ele[k].innerHTML = L_values[i];
            originalValues[k] = L_values[i];
            i++;
        } else {
            if (n1 + n2 === ele.length) {
                ele[k].style.background = 'green';
            } else {
                ele[k].style.background = '#3498db';
            }
            ele[k].style.height = R[j];
            ele[k].innerHTML = R_values[j];
            originalValues[k] = R_values[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        await waitforme(delay);
        if (n1 + n2 === ele.length) {
            ele[k].style.background = 'green';
        } else {
            ele[k].style.background = '#3498db';
        }
        ele[k].style.height = L[i];
        ele[k].innerHTML = L_values[i];
        originalValues[k] = L_values[i];
        i++;
        k++;
    }
    while (j < n2) {
        await waitforme(delay);
        if (n1 + n2 === ele.length) {
            ele[k].style.background = 'green';
        } else {
            ele[k].style.background = '#3498db';
        }
        ele[k].style.height = R[j];
        ele[k].innerHTML = R_values[j];
        originalValues[k] = R_values[j];
        j++;
        k++;
    }
}