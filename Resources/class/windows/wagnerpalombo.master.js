Titanium.include('../internal/wagnerpalombo.js');

var window = {};

window.master = (function() {

	// #variável para verificação de se a janela master está ativo
	var _init = false;

	// #variável de retorno dos métodos disponíveis da janela
	var m = {};

	// #variável do objeto da janela
	var win = Titanium.UI.currentWindow;

	// #variável para a criação da view master
	var masterView		= false;
	
	// #elemento header da janela
	var header			= function(){
		
		var buttonMenu 	= null;
		var _init		= false;
		
		this.view		= null;

		this.init		= function(){
			_init	= true;
			this.load();
		};

		this.load		= function(){
			this.view = Titanium.UI.createView({
				top:0, 
				left:0,
				backgroundColor: '#014569',
				height:60
			});
			
			buttonMenu = Titanium.UI.createButton({ 
				backgroundColor: 'transparent',
				backgroundImage: '/class/imgs/menu-button-off.png',
				backgroundSelectedImage: '/class/imgs/menu-button-on.png',
				top: 8,
				left: 10,
				width: 53,
				height: 40
			});
			
			this.view.add( buttonMenu );
			
			this.clickSlide();
		};
		
		this.clickSlide	= function(){
			buttonMenu.addEventListener('click', menuSmoothLeft);
		};
		
		var menuSmoothLeft		= function(){

			var w = Titanium.Platform.displayCaps.platformWidth;
			var t = Titanium.UI.create2DMatrix().translate(w,w-60);
			
			Titanium.UI.currentWindow.animate({translate:t, duration:400,left:w-65}, function(){
				buttonMenu.removeEventListener('click', menuSmoothLeft);
				buttonMenu.addEventListener('click', menuSmoothRight);
		    });
		};

		var menuSmoothRightRender	= function(i){
			var t = Titanium.UI.create2DMatrix().translate(i,0);
			Titanium.UI.currentWindow.animate({translate:t,duration:2,left:i});
		};

		var menuSmoothRight	= function(){
			var w = Titanium.Platform.displayCaps.platformWidth-60;
			if(wagnerpalombo.config.platform=="android"){
				for(var i=w;i>=0;i=i-10){
					menuSmoothRightRender(i);
				}
				menuSmoothRightRender(0);
				buttonMenu.removeEventListener('click', menuSmoothRight);
				buttonMenu.addEventListener('click', menuSmoothLeft);
			}else{
				Titanium.UI.currentWindow.animate({translate:t, duration:400,left:0}, function(){
					buttonMenu.removeEventListener('click', menuSmoothRight);
					buttonMenu.addEventListener('click', menuSmoothLeft);
			    });
			}
		};
	};

	// #método de inicialização da janela master
	m.init = function (){
		_init = true;
		
		var h = new header();
		
		h.init();
		
		m.win.add(h.view);

		m.load();
	};
	
	m.load = function(){
		m.win.backgroundColor = '#1c6292';
		m.win.open();
	};
	
	return m;
})();

window.master.init();
