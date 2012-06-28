/** #inicializa o applicativo **/

// #inclui arquivo de inicialização
Titanium.include("class/internal/wagnerpalombo.js");

// #instância inicial do app
wagnerpalombo.app = (function()
{
	// #sinalizador da instância do objeto
	var _init 		= false;
	
	// #objeto interno responsável pelo acesso aos demais atributos e métodos
	var m = {};
	
	// #método de inicialização do obejto
	m.init 		= function (){
		// #sinaliza o objeto como inicializado
		_init = true;
		
		// #chamada método que carrega o app
		m.load();
	};
	
	// #método que carrega o app
	m.load 		= function(){
		// #define a cor de fundo da window pai
		Titanium.UI.setBackgroundColor('#000');

		// #abre a janela Menu
		wagnerpalombo.ui.winMenu.open({animated:true});

		// #abre a janela Master
		wagnerpalombo.ui.winMaster.open({animated:true});
	};
	
	// #retorna variáveis e métodos públicos
	return m;
})();


wagnerpalombo.app.init();