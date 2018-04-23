
$('#hide-settings').click(function(){
	$('#hide-settings').toggleClass('hide-settings-active');
	$('.settings').slideToggle();

});

$('#toggle-dropdown').click(function(){
	$('#dropdown').slideToggle();
});



// /********

// 			PLAYGROUND SETTINGS





// busca partes do código SVG e guarda em variáveis,

var tile_cor1 = $('#tile-cor1').val();
var tile_cor2 = $('#tile-cor2').val();


// inicia bgs conforme settings do html
var svg_bg = $('.tile').css('background-image');
var newBg = svg_bg.replace('D0AE36',tile_cor1);
newBg = newBg.replace('4F4C3F',tile_cor2);
$('.tile').css({'background-image':newBg});

var range_arranca = $('#range-input').attr('value');
$('.tile').css('background-size',+range_arranca);

/**

	COR 1 (st0)

**/

$('#tile-cor1').change(function(){	
	//Guarda valores retirados do change do input

	newBg = newBg.replace(tile_cor1 , $(this).val() );
	
	tile_cor1 = $(this).val();

	$('.tile').css({'background-image':newBg});

});

/**

	COR 2 (st1)

**/

$('#tile-cor2').change(function(){	
	//Guarda valores retirados do change do input
	newBg = newBg.replace(tile_cor2 , $(this).val() );
	
	tile_cor2 = $(this).val();

	$('.tile').css({'background-image':newBg});
});


/**

	BG COLOR

**/
var bg_arranca_cor = $('#tile-bg').attr('value');
$('.tile').css({'background-color':'#'+bg_arranca_cor});

$('#tile-bg').change(function(){	
	var tile_bg = $(this).val();
	$('.tile').css({'background-color':'#'+tile_bg});
});




/**

	BACKGROUND SIZE

**/

$('#range-input').change(function() {
   var new_bgsize_value = $(this).val();
   $('.tile').css('background-size',+new_bgsize_value);

});




/********

			MODAL

********/


// ABRE O MODAL
$('#click-open-modal').click(function(){

	// BUSCA VALOR DO RANGE
	var new_bgsize_value = $('#range-input').val();
	
	// GUARDA CODIGO DE BG-IMG DA SVG EM URI
	var pattern_content_img = $('.tile').css('background-image');
	
	// GUARDA COR DE FUNDO
	var bg_color_svg = $('#tile-bg').val();

	// CRIA CSS COM OS VALORES GUARDADOS
	var generated_css = 'background-size:'+new_bgsize_value+'px;'+'background-image:'+pattern_content_img+';background-color: #'+bg_color_svg+';';

	// SUBSTITUI HTML DO TEXTAREA PELO VALOR GUARDADO NA VAR GENERATED CSS
	$('#svg-txt-area').html(generated_css)

	// FADE IN DO MODAL DEPOIS DO CLICK
	$('.modal-playground').fadeIn();
});

// FECHA O MODAL
$('.modal-content i').click(function(){
	$('.modal-playground').fadeOut();
});	


	//FUNCAO DE CLICK NO BOTAO COPY
$('.btn-svg').click(function(){

	//SELECIONA O TEXTO
 	var copyText = $('#svg-txt-area').select();

  	//EXECUTE COMANDO DE COPIAR
  	document.execCommand("Copy");
});
