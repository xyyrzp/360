function sqr(x){
	var min=0,max=x;mid=0;

	while(mid*mid!=x){
		mid=(min+max)/2;
		if(mid*mid<=x){
			min=mid;
		}else{
			max=mid;
		}
	}
	return mid;

}