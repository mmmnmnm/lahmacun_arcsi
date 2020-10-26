// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    $('.infos-show').click( function(e) {
        $(this).parent().find('.hidden-infos').toggle();
    } )

});