function insertSort(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let cur = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > cur) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = cur;
    }
    return arr;
}
var arr = [5, 6, 3, 1, 8, 7, 2, 4];
console.log(insertSort(arr))