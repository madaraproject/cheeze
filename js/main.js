// グローバルメニュー関連
$('.toggle-menu-btn, .header-navi-item').click(function(){
    $('.toggle-menu-btn, .header-navi, body').toggleClass('closed');
});

// リロード・リサイズ対応
$(window).on('load resize', function(){
    if (window.matchMedia('(min-width: 1080px)').matches){
        $('.toggle-menu-btn, .header-navi').addClass('closed');
        $('body').removeClass('closed');
    }
});