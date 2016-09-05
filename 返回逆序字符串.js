function reverseStr(obj){
	if(typeof(obj) == 'string'){
		var str = obj.split("").reverse();
		return str.join("");	
	}
}