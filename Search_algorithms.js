// Doğrusal Arama Algoritması
function linearSeacrh(array, target){
	
	for(arr of array){
		if(arr == target){
			let bulundu = array.findIndex((f) => f == target )
		    return `find array ${target} and index No: ${bulundu}`
		}
		
	}
	let bak = function(a){
		return a == target
	}
	let varmı = array.findIndex(bak)
	if(varmı == -1){
		console.log("Not found array element")
	}
}

// İkili Arama Algoritması
function binarySeacth(array, target){
	let left_index = 0;
	let right_index = array.length - 1;
	while(left_index <= right_index){
		let middle_index = Math.floor((right_index + left_index) / 2)
		if(target === array[middle_index]){
			return middle_index;
		}
		if(target < array[middle_index]){
			right_index = middle_index - 1;
		}else {
			left_index = middle_index + 1
		}

	}
	return -1
}


// Sığ Öncekli Arama
class Graph{
	constructor(){
		this.elemanlar = [];
		this.kökler = {};
		this.köseler = 0;
	}

	eleman(x){
		this.elemanlar.push(x);
		this.kökler[x] = [];

	}

	graphlar(x, y){
		this.kökler[x].push(y);
		this.kökler[y].push(x);
		
	}
	bsf(hedef, kök=this.elemanlar[0]){
		let bsf_kök = this.kökler;
		let queue = [];
		let kontrol_kümesi= [];
		queue.push(kök)
		kontrol_kümesi[kök] = true;

		while(queue.length){
			 let k = queue.shift();

			if(k === hedef){
			    return true;
		    }
		
		   
		    
		    console.log(k);

		    for(let i=0; i<bsf_kök[k].length; i++){

			    if(!kontrol_kümesi[bsf_kök[k][i]]){
			    	kontrol_kümesi[bsf_kök[k][i]] = true;
				    queue.push(bsf_kök[k][i])
			    }
		     }
		}
		return false;

	}
}

let grh = new Graph()
grh.eleman("Faik'in Evi")
grh.eleman("Serkan'in Evi")
grh.eleman("Metmet'in Evi")
grh.eleman("Ahmet'in Evi")
grh.eleman("Derya'nın Evi")
grh.eleman("Buse'nin Evi")
grh.eleman("Polat'ın Evi")
grh.eleman("Elif'in Evi")
grh.eleman("Kamil'in Evi")
grh.eleman("Ayşe'nin Evi")
grh.eleman("Fahri'nin Evi")

grh.graphlar("Faik'in Evi", "Ahmet'in Evi")
grh.graphlar("Faik'in Evi", "Serkan'in Evi")
grh.graphlar("Faik'in Evi", "Metmet'in Evi")
grh.graphlar("Ahmet'in Evi", "Derya'nın Evi")
grh.graphlar("Ahmet'in Evi", "Buse'nin Evi")
grh.graphlar("Serkan'in Evi", "Polat'ın Evi")
grh.graphlar("Metmet'in Evi", "Elif'in Evi")
grh.graphlar("Metmet'in Evi", "Kamil'in Evi")
grh.graphlar("Kamil'in Evi", "Ayşe'nin Evi")
grh.graphlar("Kamil'in Evi", "Fahri'nin Evi")

console.log(grh)

console.log(grh.bsf("Fahri'nin Evi"))

