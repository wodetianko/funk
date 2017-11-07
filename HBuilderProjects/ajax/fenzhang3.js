var b=100;
var ajax ={}
ajax.get =function() {
	if (obj.async == undefined) {
		obj.async = true;
	}
	
	if (obj.data == undefined) {
		obj.data = "";
	}
	var a = new XMLHttpRequest();
	
	var url = obj.url;
		url += "?"
		url += obj.data;
		a.open("GET",url,obj.async);
		a.send()
		if (obj.async ==true) {
			a.onreadystatechange =function() {
				if (a.readyState ==4) {
					if (a.status ==200) {
						var str=a.responseText;
						obj.success && obj.success(str);
					} else{
						obj.fail && obj.fail();
					}
				}
			}
		} else {
			if (a.status ==200) {
				var str =a.responseText;
				obj.success && obj.success(str);
			} else{
				obj.fail && obj.fail();
			}
		}
    }
ajax.post=function() {
	if (obj.async ==undefined) {
		obj.async =true;
	}
	if (obj.data ==undefined) {
		obj.data="";
	}
	var a=new XMLHttpRequest();
	var url =obj.url;
	a.open("GET",url,obj.async);
	a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	a.send(obj.data)
	if (obj.async ==true) {
		a.onreadystatechange=function() {
			if (a.readystate == 4) {
				if (a.status == 200) {
					var str = a.responseText;
					obj.success && obj.success(str);
				} else{
					obj.fail && obj.fail();
				}
			}
		}
	} else {
		if (a.status ==200) {
			var str =a.responseText;
			obj.success && obj.success(str);
		} else{
			obj.fail && obj.fail();	
		}
	}
}
