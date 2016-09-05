//方法一 有局限性
function isString(str){
	if(typeof(str) == 'string'){
		return true;
	}
	return false;
}
//方法二 不错
function isString(str){
	if(Object.prototype.toString.call(str) == '[Object String]'){
		return true;
	}
	return false;
}