window.onload = function(){
	fn();
	function fn(){
		var meta = document.createElement("meta");
		var dpr = window.devicePixelRatio;//获取像素比
		var sca = (dpr>1) ? 1/dpr : 1;
		meta.name = "viewport";
		meta.content = "width=device-width,user-scalable=no,initial-scale="+sca;
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(meta);
		var winwidth = document.documentElement.clientWidth;
		var html = document.getElementsByTagName("html")[0];
		var remRoot = winwidth*100/414;
		html.style.fontSize = remRoot+"px";
	}
	window.onresize = function(){
		fn();
	}
}

