function randomArray(arr){
	if(!arr instanceof Array){
		return false;
	}
	return arr.sort(function(){
		return 0.5 - Math.random();
	});
}