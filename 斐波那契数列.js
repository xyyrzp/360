function getNthFibonacci(){
	if(count == 0 || count == 1){
		return 1;
	}else{
		return getNthFibonacci(count-1)+getNthFibonacci(count-2);
	}
}