function sortFunc(arr){
	for(i=1; i<arr.length; i++){
		let numberToInsert = arr[i];
		let j = i - 1;
		while(j >= 0 && arr[j] > numberToInsert){
            arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j+1] = numberToInsert;
    }
}   

sortFunc([20, 15, 5, -2, 10])


function selectionSort(arr){

	for(let i=0; i<arr.length; i++){
		let minIndex = i;

		for(let j=1; j<arr.length; j++){
			if(arr[j] < arr[minIndex]){
				minIndex = j;
			}
			let temp = arr[minIndex];
			arr[minIndex] = arr[i]
			arr[i] = temp;

		}

	}
	return arr
}

console.log(selectionSort([1, 2, 3, 4]))