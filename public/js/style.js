//hamburger-menu
$(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("active");
        $("#g-nav").toggleClass("panelactive");
        $(".circle-bg").toggleClass("circleactive");
    });
    //activ-out
    $("#g-nav a").click(function () {
        $(".hamburger").removeClass("active");
        $("#g-nav").removeClass("panelactive");
        $(".circle-bg").removeClass("circleactive");
    });
});

//img slick
$(".slider").slick({
    fade: true,
    autoplaySpeed: 5000,
    speed: 1000,
    autoplay: true,
    isFinite: true,
    slidesToScroll: 1,
    arroes: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
});
//スマホ用slick
$(".slider").on("touchmove", function (event, sliick, currentSlide, nextSlide) {
    $(".slider").slick("slickPlay");
});

//skider-slick
$(".slider-b").slick({
    arrows: false, //矢印なし
    autoplay: true, //自動再生
    autoplaySpeed: 0,
    speed: 9000,
    Infinite: true,
    pauseOnHover: false, //フォーカス時の一時停止をさせない
    pauseOnFocus: false,
    cssEase: "linear", //動き方
    slidesToShow: 4, //何枚表示するか
    slidesToScroll: 1, //一回の動く枚数
    Responseive: [
        {
            //モニターサイズによって変える
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1.5,
            },
        },
    ],
});

//スクロールした際の動きを関数でまとめる
function PageTopCheck() {
    var winScrollTop = $(this).scrollTop();
    var secondTop = $("#concept").offset().top - 150; //#area-2の上から150pxの位置まで来たら
    if (winScrollTop >= secondTop) {
        $(".js-scroll").removeClass("scroll-view"); //.js-scrollからscroll-viewというクラス名を除去
        $(".js-pagetop").addClass("scroll-view"); //.js-pagetopにscroll-viewというクラス名を付与
    } else {
        //元に戻ったら
        $(".js-scroll").addClass("scroll-view"); //.js-scrollからscroll-viewというクラス名を付与
        $(".js-pagetop").removeClass("scroll-view"); //.js-pagetopからscroll-viewというクラス名を除去
    }
}

//クリックした際の動き
$(".scroll-top a").click(function () {
    var elmHash = $(this).attr("href"); //hrefの内容を取得
    if (elmHash == "#concept") {
        //もし、リンク先のhref の後が#area-2の場合
        var pos = $(elmHash).offset().top;
        $("body,html").animate({ scrollTop: pos }, pos); //#area-2にスクロール
    } else {
        $("body,html").animate({ scrollTop: 0 }, 500); //それ以外はトップへスクロール。数字が大きくなるほどゆっくりスクロール
    }
    return false; //リンク自体の無効化
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    PageTopCheck(); /* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
    PageTopCheck(); /* スクロールした際の動きの関数を呼ぶ*/
});

//logoの表示
$(window).on("load", function () {
    $("#splash").delay(2000).fadeOut("slow"); //ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(1700).fadeOut("slow"); //ロゴを1.2秒（1200ms）待機してからフェードアウト
});

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {
    // ふわっ
    $(".fadeUpTrigger").each(function () {
        //fadeUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 5; //要素より、5px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("fadeUp"); // 画面内に入ったらfadeUpというクラス名を追記
            // } else {
            //     $(this).removeClass("fadeUp"); // 画面外に出たらfadeUpというクラス名を外す
        }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述
