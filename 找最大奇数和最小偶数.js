//实现一个函数，
//找出一个整数数组中最大的奇数和最小的偶数，
//返回它们的和，如果最大奇数和最小偶数其中一个数不存在，返回null。
function findNum(arr){
	if(Object.prototype.toString.call(arr) !== "[Object Array]"){
			return false;
	}
	var arrList = arr.sort(function(a,b){
		return a-b;
	});
	var resultEven = arrList.filter(function(x){
		return x % 2 === 0;
	});
	var resultOdd = arrList.filter(function(x) {
		return x % !== 0;
	});
	if(resultEven.length == 0 || resultOdd.length == 0){
		return null;
	}else{
		  var result = resultEven[0] + resulrOdd[resultOdd.length-1];
		  return result;
	}
}