function ajax(url,callback) {
			var a=new XMLHttpRequest();
			a.open("GET",url,true);
			a.send();
			a.onreadystatechange =function() {
				if (a.readyState == 4 && a.status ==200) {
					var str =a.responseText;
					callback && callback(str);
			}
		}
    }
