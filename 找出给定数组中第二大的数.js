//找出给定数组中第二大的数
function findSencondMax(arr){
		var max = arr[arr.length-1];
		var sencond_max = 0;
		for(var i=arr.length-1;i>=0;i++){
			if(arr[i]>max){
				sencond_max = max; 
				max = arr[i];
			}else if(arr[i]<max&&arr[i]>sencond_max){
				sencond_max = arr[i];
			}
		}
		return sencond_max;
}