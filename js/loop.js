$('document').ready(function() {

    var origDocHeight = document.body.offsetHeight;

    var clone=$('#lisbon-tiles').contents().clone();
    clone.appendTo('#lisbon-tiles');
    clone.prependTo('#lisbon-tiles');

    $(document).scroll(function(){ 

        var scrollWindowPos = $(document).scrollTop(); 

        if(scrollWindowPos >= origDocHeight ) { 
            $(document).scrollTop(0); 
        }
        if(scrollWindowPos <= 0 ) { 
             $(document).scrollTop(origDocHeight); 
         }        
    });
});