var arr=[8,3,5,6,9,1]
n = arr.length
function bubbleSort(arr,n){
    for(let i=0; i<n-1;i++){
        for (let j=0;j<n-1;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp
            }
        }
    }
}

console.log("Before BubbleSorting: "+ arr)
bubbleSort(arr,n)
console.log("After BubbleSorting: "+ arr)

var arr1=[8,3,5,6,9,1,2,7]
n = arr1.length
function selectionSort(arr1,n){
    for(let i=0; i<n-1;i++){
        
        for (let j=0;j<n-1;j++){
            if(arr1[i]>arr1[j+1]){
                var temp = arr1[j];
                arr1[j]=arr1[j+1];
                arr1[j+1]=temp
            }
        }
    }
}

console.log("Before Sorting: "+ arr1)
selectionSort(arr1,n)
console.log("After Sorting: "+ arr1)

var arr2=[8,3,5,6,9]
n = arr2.length
function selectionSort(arr2,n){
    for(let i=0; i<n-1;i++){
        for (let j=i+1;j<n-1;j++){
            if(arr2[i]>arr2[j]){
                var temp = arr2[i];
                arr2[i]=arr2[j];
                arr2[j]=temp
            }
        }
    }
}

console.log("Before Sorting: "+ arr2)
selectionSort(arr2,n)
console.log("After Sorting: "+ arr2)