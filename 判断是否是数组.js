//方法一 instanceof是不能用在不同的window或iframe间的对象类型检测
//虽然在检测基本数据类型时typeof是非常得力的助手，但在检测引用类型的值时，
//这个操作符的用处不大。通常我们并不是想知道某个值是对象，而是想知道它是
//什么类型的对象  p614
function isArray(arr){
	if(arr instanceof Array){
		return true;
	}
	return false;
}
//方法二
function isArray(arr){
	if(Array.isArray(arr)){
		return true;
	}
	return false;
}
//方法三
function isArray(arr){
	if(Object.prototype.toString.apply(arr) == "[Object Array]"){
		return true;
	}
	return false;
}
