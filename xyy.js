//类名操作
var myClass = {
	//获取所有具有class的节点
	getClass:function(){
		var aClass = document.getElementsByTagName('*'),
		arr = [],
		len = aClass.length,
		for(var i = 0;i<len;i++){
			var aCls = aClass[i].className.split(' ');
			for(var j = 0;j<acls.length;j++){
				if(aCls[j] == cls){
					arr.push(aClass[i]);
				}
			}
		}
		return arr;
	},
	//添加类名
	addClass:function(element,cls){
		if(!element)return false;
		var aClass = element.className.split(""),
			flag = 1,
			for(var i = 0;i<aClass.length;i++){
				if(aClass[i].className == cls){
					flag = 0;
					break;
				}

			};
			if(flag){
				element.className+=" "+cls;
			}
	},

	//删除类名
	removeClass:function(element,cls){
		if(!element||!element.className)
			return false;
		var aClass = element.className.split("");
		for(var i = 0;i<aClass.length;i++){
			if(aClass[i] == cls){
				aClass[i]="";
			}
		}
		element.className = aClass.join("");
	}
}

//获取屏幕大小
var getScreenSize = function(w){
	var w = w||window;
	if(w.innerHeight){
		return {w:w.innerHeight,h:w.innerWidth};
	}
	var d = w.document;
	if(document.compatMode=="CSS1Compat"){
		return {w.d.documentElement.clientHeight,h:d.documentElement.clientWidth};
	}else{
		return {w:d.body.clientHeight,h:d.body.clientWidth};
	}
};