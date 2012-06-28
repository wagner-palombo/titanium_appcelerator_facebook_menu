wagnerpalombo.config = (function() {
	var _init = false;
	
	var m = {};
	
	var platform		= '';
	var displayH		= 0;
	var displayW		= 0;
	
	m.init = function ()
	{
		_init = true;
		
		m.platform	= Titanium.Platform.getName();
		
		m.displayH	= Titanium.Platform.displayCaps.platformHeight;
		
		m.displayW	= Titanium.Platform.displayCaps.platformWidth;
		
	};

	return m;
})();