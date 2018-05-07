window.console = window.console || function() {
   var e = {};
   e.log = e.warn = e.debug = e.info = e.error = e.time = e.dir = e.profile = e.clear = e.exception = e.trace = e.assert = function() {};
   return e
}();

$(document).ready(function() {
	var e = '<div class="toolbar clearfix">'+
                '<div class="products">'+
                    '<a class="active-theme">'+
                        '<span class="theme-title">Monster</span>'+
                    '</a>'+
                    '<ul class="dropdown">'+
                        '<li class="dropdown-item selected">'+
                            '<a href="https://themeforest.net/item/medicare-dentist-medical-html5-template/15254028?ref=themesflat">'+
                                '<span class="title">Medicare</span>'+
                            '</a>'+
                            '<div class="preview">'+
                                '<img src="http://themesflat.com/html/assets/medicare-preview.png" alt="Focus">'+
                            '</div>'+
                        '</li>'+
                        '<li class="dropdown-item ">'+
                            '<a href="https://themeforest.net/item/arch-construction-building-and-business-html-template/17619744?ref=themesflat">'+
                                '<span class="title">Arch</span>'+
                            '</a>'+
                            '<div class="preview">'+
                                '<img src="http://themesflat.com/html/assets/arch-preview.png" alt="arch">'+
                            '</div>'+
                        '</li>'+

                        '<li class="dropdown-item ">'+
                            '<a href="https://themeforest.net/item/canava-logistics-and-business-html-template/17510344ref=themesflat">'+
                                '<span class="title">Canava</span>'+
                            '</a>'+
                            '<div class="preview">'+
                                '<img src="http://themesflat.com/html/assets/canava-preview.png" alt="Cosine">'+
                            '</div>'+
                        '</li>'+              

                        '<li class="dropdown-item ">'+
                            '<a href="https://themeforest.net/item/cosine-training-coaching-business-html-template/17377330?ref=themesflat">'+
                                '<span class="title">Cosine</span>'+
                            '</a>'+
                            '<div class="preview">'+
                                '<img src="http://themesflat.com/html/assets/cosine-preview.png" alt="Fusion">'+
                            '</div>'+
                        '</li>'+

                        '<li class="dropdown-item ">'+
                            '<a href="https://themeforest.net/item/nah-multipurpose-construction-responsive-html5-template/16603461?>ref=themesflat">'+
                                '<span class="title">Nah</span>'+
                            '</a>'+
                            '<div class="preview">'+
                                '<img src="http://themesflat.com/html/assets/nah-preview.png" alt="HnK">'+
                            '</div>'+
                        '</li>'+

                        '<li class="dropdown-item ">'+
                            '<a href="https://themeforest.net/item/hnk-business-and-architecture-html-template/17198191?ref=themesflat">'+
                                '<span class="title">Hnk</span>'+
                            '</a>'+
                            '<div class="preview">'+
                                '<img src="http://themesflat.com/html/assets/hnk-preview.png" alt="BooStore">'+
                            '</div>'+
                        '</li>'+

                        '<li class="dropdown-item ">'+
                            '<a href="https://themeforest.net/item/mountain-the-minimal-portfolio-template-for-inspiration/16923070?ref=themesflat">'+
                                '<span class="title">Mountain</span>'+
                            '</a>'+
                            '<div class="preview">'+
                                '<img src="http://themesflat.com/html/assets/mountain-preview.png" alt="mountain">'+
                            '</div>'+
                        '</li>'+
                    '</ul>'+               
                '</div>'+
                '<h1 class="brand">'+
                    '<a href="http://corpthemes.com/" target="_blank">'+
                        '<img src="http://corpthemes.com/wp-content/uploads/2016/10/logo.png" alt="corpthemes">'+
                    '</a>'+
                '</h1>'+

                '<div class="buttons">'+
                    '<a href="https://themeforest.net/item/monster-html-creative-business/18347595?s_rank=5&ref=themesflat&license=regular&open_purchase_for_item_id=18347595&purchasable=source" id="btn-purchase" class="btn green" target="_blank">Purchase</a>'+
                    '<a href="http://themesflat.com/html/monster/" id="btn-close" class="btn black close">×</a>'+
                '</div>'+
            '</div>';
	$('body').append(e);
    toolBar();	
    });

    var toolBar = function() {
        $('body').addClass('has_toolbar');
        $('.products a.active-theme').on('click', function() {           
            if ( $('.products').hasClass('active') ) {
                $(this).parent('.products').removeClass('active');
            } else {
                $(this).parent('.products').addClass('active');
            }                
            return false;        
        });

        $( '#btn-close' ).on( 'click', function( e ) {
            var iframeDoc = $( 'iframe' ).contents().get( 0 );

            if ( typeof( iframeDoc ) != 'undefined' ) {
                e.preventDefault();
                window.location = iframeDoc.location.href;
            }
        } );  
    }

    
    

