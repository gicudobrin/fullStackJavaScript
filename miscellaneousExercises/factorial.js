function factorial(n){
	if(n===0){
		return 1;
	} else {
		return n*factorial(n-1);
	}
}

document.write(factorial(0));
console.log(factorial(6));