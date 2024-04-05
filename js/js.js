//FAQアコーディオン
//アコーディオンをクリックした時の動作
$(".action_btn2").on("click", function () {
  //タイトル要素をクリックしたら
  $(".box2").slideUp(500); //クラス名.boxがついたすべてのアコーディオンを閉じる

  var findElm = $(this).next(".box2"); //タイトル直後のアコーディオンを行うエリアを取得

  if ($(this).hasClass("close2")) {
    //タイトル要素にクラス名closeがあれば
    $(this).removeClass("close2"); //クラス名を除去
  } else {
    //それ以外は
    $(".close2").removeClass("close2"); //クラス名closeを全て除去した後
    $(this).addClass("close2"); //クリックしたタイトルにクラス名closeを付与し
    $(findElm).slideDown(500); //アコーディオンを開く
  }
});

//スクロール
$(function(){
  $('a[href^=#]').click(function() {
  var speed = 400; // スクロール速度(ミリ秒)
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $('html').animate({scrollTop:position}, speed, 'swing');
  return false;
  });
  });