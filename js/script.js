/*******

		HOME

*******/

// Menu abre e fecha
$('#open-menu').click(function(){
	$('.menu-overlay').fadeIn();
});

$('.menu-overlay i').click(function(){
	$('.menu-overlay').fadeOut();
});

/*******

		HOME SCROLL

*******/
$('#browse-tiles').click(function(evento){
	//Impedir o comportamento padrão do browser
	evento.preventDefault();

	// Guardar href do menu clicado
	var href = $(this).attr('href');

	// Guardar a distância ao topo do elemento com id igual ao href do menu clicado
	var topo = $(href).offset().top;

	// Animar o Scroll
	$('html, body').animate( {'scrollTop':topo} , 800 );
});


/*******

		Post Section pop hover

*******/

$(window).scroll(function(){
	var current_scroll = $(window).scrollTop();
	var windowHeight = $(window).height();

	if (current_scroll > windowHeight/1.6) { 
		$('.hero-overlay header').fadeOut();
		$('.hero-overlay').fadeIn();
		$('.nav-posts').fadeIn(500);
		

	} else {

		$('.hero-overlay').fadeOut();
		$('.nav-posts').fadeOut(500);


}


});


/*******

		Playground

*******/







// Cores Playground

$('.box-tile-cor1 .jscolor').change(function(){	
	var tile_cor1 = $(this).val();
	$('.st0').css({'fill':'#'+tile_cor1});
});


$('.box-tile-cor2 .jscolor').change(function(){	
	var tile_cor2 = $(this).val();
	$('.st1').css({'fill':'#'+tile_cor2});

});

$('.box-tile-bg .jscolor').change(function(){	
	var tile_bg = $(this).val();
	$('.tile').css({'background-color':'#'+tile_bg});
});


var tile_cor1 = $('#tile-cor1').val();
$('.st0').css({'fill':'#'+tile_cor1});


var tile_cor2 = $('#tile-cor2').val();
$('.st1').css({'fill':'#'+tile_cor2});

var tile_bg = $('#tile-bg').val();
$('.tile').css({'background-color':'#'+tile_bg});





// Modal

var pattern_content = $('pattern').html();

$('#click-open-modal').click(function(){
	$('#svg-txt-area').html(pattern_content)
	$('.modal-playground').fadeIn();
});

$('.modal-content i').click(function(){
	$('.modal-playground').fadeOut();
});	


	//COPY
$('.btn-svg').click(function(evento){
	evento.preventDefault();
	/* Get the text field */
  var copyText = document.getElementById("#svg-txt-area");

  /* Select the text field */
  copyText.select();

  alert('oi');

  /* Copy the text inside the text field */
  document.execCommand("Copy");



});
