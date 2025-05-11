let isPaused = false;
let array = [];
let originalValues = []; // Store original values for sorting

const output = document.querySelector('#size_value');
const bars = document.querySelector('#mainbody');
const arraySize = document.querySelector('#size_slider');
const selectText = document.querySelector('.selected');
output.innerHTML = arraySize.value;
let arrayVal = 10;
arraySize.addEventListener('input', function () {
    selectText.innerHTML = `Size Changed`;
    output.innerHTML = this.value;
    arrayVal = this.value;
    createNewArray(arrayVal);
});

let delay = 100;
let delayElement = document.querySelector('#speed_slider');
const speedOutput = document.querySelector('#speed_value');
speedOutput.innerHTML = delayElement.value;
delayElement.addEventListener('input', function () {
    selectText.innerHTML = `Speed Changed`;
    speedOutput.innerHTML = this.value;
    delay = 525 - parseInt(100 * this.value);
});

createNewArray(10);

// Code snippets and complexities for all sorting algorithms
const codeSnippets = {
    bubble: {
        java: `// Java program for implementation of Bubble Sort
class BubbleSort {
    void bubbleSort(int arr[], int n) {
        for (int i = 0; i < n-1; i++)
            for (int j = 0; j < n-i-1; j++)
                if (arr[j] > arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
    }
    public static void main(String args[]) {
        BubbleSort ob = new BubbleSort();
        int arr[] = {5, 1, 4, 2, 8};
        ob.bubbleSort(arr, arr.length);
        System.out.println("Sorted array");
        for (int i : arr)
            System.out.print(i + " ");
    }
}`,
        cpp: `// C++ program for implementation of Bubble Sort
#include <iostream>
using namespace std;
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
}
int main() {
    int arr[] = {5, 1, 4, 2, 8};
    int n = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, n);
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    return 0;
}`,
        javascript: `// JavaScript program for implementation of Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++)
        for (let j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
    return arr;
}
let arr = [5, 1, 4, 2, 8];
bubbleSort(arr);
console.log("Sorted array");
console.log(arr.join(" "));
`
    },
    selection: {
        java: `// Java program for implementation of Selection Sort
class SelectionSort {
    void selectionSort(int arr[], int n) {
        for (int i = 0; i < n-1; i++) {
            int min_idx = i;
            for (int j = i+1; j < n; j++)
                if (arr[j] < arr[min_idx])
                    min_idx = j;
            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }
    public static void main(String args[]) {
        SelectionSort ob = new SelectionSort();
        int arr[] = {5, 1, 4, 2, 8};
        ob.selectionSort(arr, arr.length);
        System.out.println("Sorted array");
        for (int i : arr)
            System.out.print(i + " ");
    }
}`,
        cpp: `// C++ program for implementation of Selection Sort
#include <iostream>
using namespace std;
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int min_idx = i;
        for (int j = i+1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}
int main() {
    int arr[] = {5, 1, 4, 2, 8};
    int n = sizeof(arr) / sizeof(arr[0]);
    selectionSort(arr, n);
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    return 0;
}`,
        javascript: `// JavaScript program for implementation of Selection Sort
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        let min_idx = i;
        for (let j = i+1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;
        let temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
let arr = [5, 1, 4, 2, 8];
selectionSort(arr);
console.log("Sorted array");
console.log(arr.join(" "));
`
    },
    insertion: {
        java: `// Java program for implementation of Insertion Sort
class InsertionSort {
    void insertionSort(int arr[], int n) {
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }
    public static void main(String args[]) {
        InsertionSort ob = new InsertionSort();
        int arr[] = {5, 1, 4, 2, 8};
        ob.insertionSort(arr, arr.length);
        System.out.println("Sorted array");
        for (int i : arr)
            System.out.print(i + " ");
    }
}`,
        cpp: `// C++ program for implementation of Insertion Sort
#include <iostream>
using namespace std;
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}
int main() {
    int arr[] = {5, 1, 4, 2, 8};
    int n = sizeof(arr) / sizeof(arr[0]);
    insertionSort(arr, n);
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    return 0;
}`,
        javascript: `// JavaScript program for implementation of Insertion Sort
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}
let arr = [5, 1, 4, 2, 8];
insertionSort(arr);
console.log("Sorted array");
console.log(arr.join(" "));
`
    },
    merge: {
        java: `// Java program for implementation of Merge Sort
import java.util.*;
class MergeSort {
    void mergeSort(int arr[], int l, int r) {
        if (l < r) {
            int mid = (l + r) / 2;
            mergeSort(arr, l, mid);
            mergeSort(arr, mid + 1, r);
            merge(arr, l, mid, r);
        }
    }
    void merge(int arr[], int l, int mid, int r) {
        int n1 = mid - l + 1;
        int n2 = r - mid;
        int L[] = new int[n1];
        int R[] = new int[n2];
        for (int i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; j++)
            R[j] = arr[mid + 1 + j];
        int i = 0, j = 0, k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
    public static void main(String args[]) {
        MergeSort ob = new MergeSort();
        int arr[] = { 5, 1, 4, 2, 8 };
        ob.mergeSort(arr, 0, arr.length - 1);
        System.out.println("Sorted array");
        for (int i : arr)
            System.out.print(i + " ");
    }
}`,
        cpp: `// C++ program for implementation of Merge Sort
#include <iostream>
using namespace std;
void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int mid = (l + r) / 2;
        mergeSort(arr, l, mid);
        mergeSort(arr, mid + 1, r);
        merge(arr, l, mid, r);
    }
}
void merge(int arr[], int l, int mid, int r) {
    int n1 = mid - l + 1;
    int n2 = r - mid;
    int L[n1], R[n2];
    for (int i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
int main() {
    int arr[] = { 5, 1, 4, 2, 8 };
    int n = sizeof(arr) / sizeof(arr[0]);
    mergeSort(arr, 0, n - 1);
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    return 0;
}`,
        javascript: `// JavaScript program for implementation of Merge Sort
function mergeSort(arr, l, r) {
    if (l < r) {
        let mid = Math.floor((l + r) / 2);
        mergeSort(arr, l, mid);
        mergeSort(arr, mid + 1, r);
        merge(arr, l, mid, r);
    }
}
function merge(arr, l, mid, r) {
    let n1 = mid - l + 1;
    let n2 = r - mid;
    let L = new Array(n1);
    let R = new Array(n2);
    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];
    let i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
let arr = [5, 1, 4, 2, 8];
mergeSort(arr, 0, arr.length - 1);
console.log("Sorted array");
console.log(arr.join(" "));
`
    },
    quick: {
        java: `// Java program for implementation of Quick Sort
class QuickSort {
    void quickSort(int arr[], int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    int partition(int arr[], int low, int high) {
        int pivot = arr[high];
        int i = (low - 1);
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }
    public static void main(String args[]) {
        QuickSort ob = new QuickSort();
        int arr[] = {5, 1, 4, 2, 8};
        ob.quickSort(arr, 0, arr.length - 1);
        System.out.println("Sorted array");
        for (int i : arr)
            System.out.print(i + " ");
    }
}`,
        cpp: `// C++ program for implementation of Quick Sort
#include <iostream>
using namespace std;
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}
int main() {
    int arr[] = {5, 1, 4, 2, 8};
    int n = sizeof(arr) / sizeof(arr[0]);
    quickSort(arr, 0, n - 1);
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    return 0;
}`,
        javascript: `// JavaScript program for implementation of Quick Sort
function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}
let arr = [5, 1, 4, 2, 8];
quickSort(arr, 0, arr.length - 1);
console.log("Sorted array");
console.log(arr.join(" "));
`
    }
};

const complexities = {
    bubble: {
        time: `Best Case: O(n) when array is already sorted
Average Case: O(n²)
Worst Case: O(n²)`,
        space: `Space Complexity: O(1)`
    },
    selection: {
        time: `Best Case: O(n²)
Average Case: O(n²)
Worst Case: O(n²)`,
        space: `Space Complexity: O(1)`
    },
    insertion: {
        time: `Best Case: O(n) when array is already sorted
Average Case: O(n²)
Worst Case: O(n²)`,
        space: `Space Complexity: O(1)`
    },
    merge: {
        time: `Best Case: O(n log n)
Average Case: O(n log n)
Worst Case: O(n log n)`,
        space: `Space Complexity: O(n)`
    },
    quick: {
        time: `Best Case: O(n log n)
Average Case: O(n log n)
Worst Case: O(n²) when array is already sorted`,
        space: `Space Complexity: O(log n) average, O(n) worst case`
    }
};

// Initialize code and complexity blocks
function initializeCodeBlocks(algorithm) {
    ['java', 'cpp', 'javascript'].forEach(lang => {
        const codeBlock = document.querySelector(`#code_${algorithm}_${lang} code`);
        if (codeBlock) {
            codeBlock.textContent = codeSnippets[algorithm][lang];
        }
    });
    const timeBlock = document.querySelector(`#time_${algorithm} code`);
    const spaceBlock = document.querySelector(`#space_${algorithm} code`);
    if (timeBlock && spaceBlock) {
        timeBlock.textContent = complexities[algorithm].time;
        spaceBlock.textContent = complexities[algorithm].space;
    }
    updateDisplay(algorithm);
}

// Update display for selected algorithm and language
function updateDisplay(algorithm, language = 'java') {
    const codeBlocks = document.querySelectorAll('.code-block');
    const complexityBlocks = document.querySelectorAll('.complexity-block');
    const codeTabs = document.querySelectorAll('.code-tab');

    codeBlocks.forEach(block => {
        block.style.display = block.id === `code_${algorithm}_${language}` ? 'block' : 'none';
    });
    complexityBlocks.forEach(block => {
        block.style.display = block.id.startsWith(`time_${algorithm}`) || block.id.startsWith(`space_${algorithm}`) ? 'block' : 'none';
    });

    codeTabs.forEach(tab => tab.classList.remove('active'));
    const activeTab = document.querySelector(`.code-tab[data-lang="${language}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
 Prism.highlightAll();
   
}

// Tab switching logic
const codeTabs = document.querySelectorAll('.code-tab');
codeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const currentAlgorithm = Array.from(document.querySelectorAll('.code-block')).find(block => block.style.display === 'block').id.split('_')[1];
        updateDisplay(currentAlgorithm, tab.dataset.lang);
        try {
            var mouseclick = new Audio('Mouseclick.mp3');
            mouseclick.play();
        } catch (e) {
            console.log("Audio file not found or failed to play");
        }
    });
});

// Dropdown menu toggle
const dropdown = document.querySelector('.dropdown');
const select = document.querySelector('.select');
const menu = document.querySelector('.menu');
select.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Handle sorting button and dropdown clicks
const sortButtons = document.querySelectorAll('#buttons > button:not(#toggle_animation)');
const dropdownItems = document.querySelectorAll('.menu > li');
sortButtons.forEach(button => {
    button.addEventListener('click', () => {
        const algorithm = button.classList[0].toLowerCase().replace('sort', '');
        initializeCodeBlocks(algorithm);
        selectText.innerHTML = `${button.textContent} Selected`;
        menu.style.display = 'none';
    });
});
dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        const algorithm = item.dataset.algorithm.toLowerCase().replace('sort', '');
        initializeCodeBlocks(algorithm);
        selectText.innerHTML = item.textContent;
        menu.style.display = 'none';
        try {
            var mouseclick = new Audio('Mouseclick.mp3');
            mouseclick.play();
        } catch (e) {
            console.log("Audio file not found or failed to play");
        }
        document.querySelector(`.${item.dataset.algorithm}`).click();
    });
});

function createNewArray(arrayVal, customArray = null) {
    deleteChild();
    array = [];
    originalValues = [];
    let maxHeight = 280; // 80% of 350px
    if (customArray) {
        originalValues = customArray;
        array = customArray.map(val => Math.max(20, Math.min(maxHeight, val * 2.8)));
    } else {
        for (let i = 0; i < arrayVal; i++) {
            let temp = Math.floor(Math.random() * (100 - 1) + 1);
            originalValues.push(temp);
            array.push(temp * 2.8);
        }
    }
    const barWidth = Math.max(1, 80 / Math.min(array.length, 20));
    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]}px`;
        bar.className = 'bar';
        bar.innerHTML = `${originalValues[i]}`;
        bar.style.width = `${barWidth}vw`;
        bars.appendChild(bar);
    }
}

function deleteChild() {
    while (bars.firstChild) {
        bars.removeChild(bars.firstChild);
    }
}

const newArray = document.querySelector("#generate");
newArray.addEventListener("click", function () {
    try {
        var mouseclick = new Audio('Mouseclick.mp3');
        mouseclick.play();
    } catch (e) {
        console.log("Audio file not found or failed to play");
    }
    enableSortingBtn();
    enableSizeSlider();
    selectText.innerHTML = `New Array Generated`;
    createNewArray(arrayVal);
    const description = document.querySelector('#description');
    description.style.display = 'none';
    const section = document.querySelector('#fullbody');
    section.style.height = '100vh';
});

// Custom Array Input Handling
const customArrayBtn = document.querySelector("#custom_array_btn");
customArrayBtn.addEventListener("click", function () {
    const input = document.querySelector("#custom_array_input").value;
    const customArray = input.split(',').map(num => {
        const trimmed = num.trim();
        const parsed = parseInt(trimmed);
        if (isNaN(parsed) || parsed < 1 || parsed > 100) {
            alert("Only positive numbers between 1 and 100 are allowed.");
            return null;
        }
        return parsed;
    }).filter(num => num !== null);
    
    if (customArray.length < 1 || customArray.length > 20) {
        selectText.innerHTML = `Error: Enter 1-20 numbers (1-100)`;
        alert("Please enter 1 to 20 positive numbers between 1 and 100.");
        return;
    }
    
    try {
        var mouseclick = new Audio('Mouseclick.mp3');
        mouseclick.play();
    } catch (e) {
        console.log("Audio file not found or failed to play");
    }
    selectText.innerHTML = `Custom Array Loaded`;
    arrayVal = customArray.length;
    createNewArray(arrayVal, customArray);
    const description = document.querySelector('#description');
    description.style.display = 'none';
    const section = document.querySelector('#fullbody');
    section.style.height = '100vh';
});

function disableSortingBtn() {
    document.querySelector(".BubbleSort").disabled = true;
    document.querySelector(".InsertionSort").disabled = true;
    document.querySelector(".MergeSort").disabled = true;
    document.querySelector(".QuickSort").disabled = true;
    document.querySelector(".SelectionSort").disabled = true;
}

function enableSortingBtn() {
    document.querySelector(".BubbleSort").disabled = false;
    document.querySelector(".InsertionSort").disabled = false;
    document.querySelector(".MergeSort").disabled = false;
    document.querySelector(".QuickSort").disabled = false;
    document.querySelector(".SelectionSort").disabled = false;
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
    document.querySelector("#custom_array_btn").disabled = true;
}

function enableNewArrayBtn() {
    document.querySelector("#generate").disabled = false;
    document.querySelector("#custom_array_btn").disabled = false;
}

async function waitforme(milisec) {
    if (isPaused) {
        return new Promise(resolve => {
            const checkPause = () => {
                if (!isPaused) {
                    resolve('');
                } else {
                    setTimeout(checkPause, 100);
                }
            };
            checkPause();
        });
    }
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    });
}

function swapping(element_1, element_2) {
    let temp = element_1.style.height;
    element_1.style.height = element_2.style.height;
    element_2.style.height = temp;
    
    let tempText = element_1.innerHTML;
    element_1.innerHTML = element_2.innerHTML;
    element_2.innerHTML = tempText;
}

const toggleAnimationBtn = document.querySelector("#toggle_animation");
toggleAnimationBtn.addEventListener("click", function () {
    isPaused = !isPaused;
    toggleAnimationBtn.textContent = isPaused ? "Start Animation" : "Stop Animation";
    try {
        var mouseclick = new Audio('Mouseclick.mp3');
        mouseclick.play();
    } catch (e) {
        console.log("Audio file not found or failed to play");
    }
    selectText.innerHTML = isPaused ? `Animation Paused` : `Animation Resumed`;
});

// Initialize with Merge Sort
initializeCodeBlocks('merge');