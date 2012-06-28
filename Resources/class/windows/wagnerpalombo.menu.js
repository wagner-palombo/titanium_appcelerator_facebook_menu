Titanium.include('../internal/wagnerpalombo.js');

var window = {};

window.menu = (function() {
	var _init = false;
	
	var m = {};
	
	var win = null;
	
	var menu = null;
	
	m.init = function ()
	{
		_init = true;
		m.win = Titanium.UI.currentWindow;
		m.load();
	};

	m.load = function(){};
	
	return m;
})();

window.menu.init();
