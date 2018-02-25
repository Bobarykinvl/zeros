module.exports = function getZerosCount(number) {
	
  	var count_zero = 0;
	while(number){
		number = Math.floor(number / 5);
		count_zero += number;
		console.log('number:  ' + number);
		console.log('count_zero:  ' + count_zero);
		
	}

	
	return count_zero;	
		
}
