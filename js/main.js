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

var touch = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
if(touch) {
  try {
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(':hover')) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}