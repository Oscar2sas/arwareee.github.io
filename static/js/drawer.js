$( document).ready(function(){
    $('ul.selectores li a:first').addClass('open');
    $('.items article').hide();
    $('.items article:first').show();


    $('ul.selectores li a').click(function(){
        $('ul.selectores a').removeClass('open');
        $(this).addClass('open');
        $('.items article').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    })
});