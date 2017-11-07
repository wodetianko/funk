function ajax(obj) {
	if (obj.method ==undefined) {
		obj.method ="GET";
	}
	if (obj.async ==undefined) {
		obj.async =true;
	}
	if (obj.data ==undefined) {
		obj.data ="";
	}
	var a=new XMLHttpRequest();
	var url =obj.url;
	if (obj.method =="GET") {
		url +="?"
		url +=obj.data;
	}
	a.open(obj.method,url,obj.async);
	if (obj.method =="POST") {
		a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		a.send(obj.data)
	} else{
		a.send()
	}
	if (obj.async ==true) {
		a.onreadystatechange =function() {
			if (a.readyState ==4) {
				if (a.status ==200) {
					var str =a.responseText;
					obj.success && obj.success(str);
				} else{
					obj.fail && obj.fail();
				}
			}
		}
	}else {
		if (a.status ==200) {
			var str =a.responseText;
			obj.success && obj.sucess(str);
		} else{
			obj.fail && obj.fail;
			
		}
	}
}
