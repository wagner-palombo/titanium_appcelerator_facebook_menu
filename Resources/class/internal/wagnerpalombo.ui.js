wagnerpalombo.ui = (function() {
	var m = {};
	
	m.winMenu	= Titanium.UI.createWindow({ 
		backgroundColor:'#666', 
		url : '/class/windows/wagnerpalombo.menu.js', 
		top: 0, 
		zIndex: 0
	});

	m.winMaster	=  Titanium.UI.createWindow({
		backgroundColor:'#FFF',
		url : '/class/windows/wagnerpalombo.master.js',
		top: 0,
		left: 0,
		zIndex: 1
	});
	
	m.init = function(){};
	
	return m;
})();