function find(array, value) {
	
	if(isNaN(array.indexOf(value))){
		console.log(-1);
	}
	else{console.log(array.indexOf(value));}
	
}

let products = [ "product1", "product2", "produc3", "product4", "product5" ];
find(products, "product2");
find(products, "product4");
find(products, "product7");