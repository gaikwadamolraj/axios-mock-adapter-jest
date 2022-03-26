export const bubbleSort = (arr, order = 'desc') => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (order === 'desc') {
                if (new Date(arr[j + 1].dateHired) < new Date(arr[j].dateHired)) {
                    [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                }
            } else {
                if (new Date(arr[j + 1].dateHired) > new Date(arr[j].dateHired)) {
                    [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                }
            }

        }
    }
    return arr;
}

const merge = (arr1, arr2) => {
    // Make a new array, and 2 pointers to keep track of elements of arr1 and arr2     
    let res = [],
        i = 0,
        j = 0;

    // Loop until either arr1 or arr2 becomes empty
    while (i < arr1.length && j < arr2.length) {
        // If the current element of arr1 is lesser than that of arr2, push arr1[i] and increment i         
        if (new Date(arr1[i].dateHired) > new Date(arr2[j].dateHired)) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }

    // Add the rest of the remining subarray, to our new array
    while (i < arr1.length) {
        res.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        res.push(arr2[j]);
        j++;
    }
    return res;
}

// Recursive merge sort
export const mergeSort = arr => {
    // Base case
    if (arr.length <= 1) return arr;

    // Splitting into two halves
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    // merging the two sorted halves
    return merge(left, right);
}