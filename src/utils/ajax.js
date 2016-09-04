
export function AJAX(method ,url, data, callback) {
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.open(method, url, true);
	xmlhttp.onreadystatechange = () => {
		if (xmlhttp.readyState == 4) {
	      if(xmlhttp.status == 200) { 
	        callback(JSON.parse(xmlhttp.responseText));
          } else {
          	callback({ error: xmlhttp.status });
          }
	    }	
	}
	let toSend = '{}';
	if(data instanceof Object)
		toSend = encodeURIComponent(JSON.stringify(data));
	xmlhttp.send(toSend);
}