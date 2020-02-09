// ここから開始
// alert(111);
$(".te").on("click", function() {
  alert("レベルを選んでね");
});
// ここから相手のエリア
// ここからレベル選択

// revel1を選択したとき
$("body").on("click", "#revel1", function() {
  $(".te").off("click");
  $(".aite .aite_te").html("<p></p>");
  $(".kekka").html("勝負！");
  $(".kekka").css("color", "#000000");
  $(".kekka").css("font-weight", "normal");
  $("#revel1").css("background", "tomato");
  $("#revel1").css("font-weight", "bold");
  //   $("#revel1").hover(
  //     function() {
  //       $(this).css("opacity", "1");
  //     },
  //     function() {
  //       $(this).css("opacity", "");
  //     }
  //   );
  //   $("#revel1").css("opacity", "1");
  $("#revel2").css("background", "#ffffff");
  $("#revel2").css("font-weight", "normal");
  //   $("#revel2").hover(function() {
  //     $(this).css("opacity", "0.6");
  //   });
  console.log("revel1");
  $(".te p img").hover(
    function() {
      $(this).css("transform", "scale(1.1, 1.1)");
    },
    function() {
      $(this).css("transform", "");
    }
  );
  $(".aite_img p").html('<p><img src="img/aite_revel1.png"></p>');
  revel = 1;
  // 自分がグーを出したとき
  $(".te .gu").on("click", function() {
    $(".aite_te").css("padding-top: 0px;");
    $(".kekka").css("font-weight", "bold");
    var random1 = Math.floor(Math.random() * 3 + 1);
    if (random1 == 1) {
      $(".aite .aite_te").html('<p><img src="img/janken_gu.png"></P>');
      $(".aite .aite_te img").css("padding-top", "50px");
      $(".kekka").html("あいこ");
      $(".kekka").css("color", "#00ff00");
      $(".aite_img p").html('<p><img src="img/aite_revel1_draw.png"></p>');
    } else if (random1 == 2) {
      $(".aite .aite_te").html('<P><img src="img/janken_choki.png"></P>');
      $(".aite .aite_te").css("padding-top", "7px");
      $(".kekka").html("勝ち");
      $(".kekka").css("color", "#ff0000");
      $(".aite_img p").html('<p><img src="img/aite_revel1_lose.png"></p>');
      // ここから二回目（無理やり）
      // $('.te .gu').on('click', function () {
      //     $('.aite_te').css('padding-top: 0px;')
      //     $('.kekka').css('font-weight','bold')
      //     var random2 = Math.floor(Math.random() * 3 + 1)
      //     if (random2 == 1) {
      //         $('.aite .aite_te').html('<p><img src="img/janken_gu.png"></P>')
      //         $('.aite .aite_te img').css('padding-top','50px')
      //         $('.kekka').html('あいこ')
      //         $('.kekka').css('color','#00ff00')
      //     } else if (random2 == 2) {
      //         $('.aite .aite_te').html('<P><img src="img/janken_choki.png"></P>')
      //         $('.aite .aite_te').css('padding-top','7px')
      //         $('.kekka').html('連勝')
      //         $('.kekka').css('color', '#ff0000')
      //     } else {
      //         $('.aite .aite_te').html('<P><img src="img/janken_pa.png"></P>')
      //         $('.aite .aite_te').css('padding-top','10px')
      //         $('.kekka').html('負け')
      //         $('.kekka').css('color','#0000ff')
      //     }
      //     console.log(random2);
      // });
      // ここまで二回目（無理やり）
    } else {
      $(".aite .aite_te").html('<P><img src="img/janken_pa.png"></P>');
      $(".aite .aite_te").css("padding-top", "10px");
      $(".kekka").html("負け");
      $(".kekka").css("color", "#0000ff");
      $(".aite_img p").html('<p><img src="img/aite_revel1_win.png"></p>');
    }
    console.log(random1);
  });
  // 自分がチョキを出したとき
  $(".te .choki").on("click", function() {
    $(".aite .aite_te").css("padding-top: 0px;");
    var random = Math.floor(Math.random() * 3 + 1);
    if (random == 1) {
      $(".aite .aite_te").html('<p><img src="img/janken_gu.png"></P>');
      $(".aite .aite_te img").css("padding-top", "50px");
      $(".kekka").html("負け");
      $(".kekka").css("color", "#0000ff");
      $(".aite_img p").html('<p><img src="img/aite_revel1_win.png"></p>');
    } else if (random == 2) {
      $(".aite .aite_te").html('<P><img src="img/janken_choki.png"></P>');
      $(".aite .aite_te").css("padding-top", "7px");
      $(".kekka").html("あいこ");
      $(".kekka").css("color", "#00ff00");
      $(".aite_img p").html('<p><img src="img/aite_revel1_draw.png"></p>');
    } else {
      $(".aite .aite_te").html('<P><img src="img/janken_pa.png"></P>');
      $(".aite .aite_te").css("padding-top", "10px");
      $(".kekka").html("勝ち");
      $(".kekka").css("color", "#ff0000");
      $(".aite_img p").html('<p><img src="img/aite_revel1_lose.png"></p>');
    }
    $(".kekka").css("font-weight", "bold");
    console.log(random);
  });
  // 自分がパーを出したとき
  $(".te .pa").on("click", function() {
    $(".aite .aite_te").css("padding-top: 0px;");
    var random = Math.floor(Math.random() * 3 + 1);
    if (random == 1) {
      $(".aite .aite_te").html('<p><img src="img/janken_gu.png"></P>');
      $(".aite .aite_te img").css("padding-top", "50px");
      $(".kekka").html("勝ち");
      $(".kekka").css("color", "#ff0000");
      $(".aite_img p").html('<p><img src="img/aite_revel1_lose.png"></p>');
    } else if (random == 2) {
      $(".aite .aite_te").html('<P><img src="img/janken_choki.png"></P>');
      $(".aite .aite_te").css("padding-top", "7px");
      $(".kekka").html("負け");
      $(".kekka").css("color", "#0000ff");
      $(".aite_img p").html('<p><img src="img/aite_revel1_win.png"></p>');
    } else {
      $(".aite .aite_te").html('<P><img src="img/janken_pa.png"></P>');
      $(".aite .aite_te").css("padding-top", "10px");
      $(".kekka").html("あいこ");
      $(".kekka").css("color", "#00ff00");
      $(".aite_img p").html('<p><img src="img/aite_revel1_draw.png"></p>');
    }
    $(".kekka").css("font-weight", "bold");
    console.log(random);
  });
});
// revel2を選択したとき
$("body").on("click", "#revel2", function() {
  $(".te").off("click");
  $(".aite .aite_te").html("<p></P>");
  $(".kekka").html("勝負！");
  $(".kekka").css("color", "#000000");
  $(".kekka").css("font-weight", "normal");
  $("#revel2").css("background", "tomato");
  $("#revel2").css("font-weight", "bold");
  //   $("#revel2").hover(function() {
  //     $(this).css("opacity", "1");
  //   });
  //   $("#revel2").css("opacity", "1");
  $("#revel1").css("background", "#ffffff");
  $("#revel1").css("font-weight", "normal");
  //   $("#revel1").hover(function() {
  //     $(this).css("opacity", "0.6");
  //   });
  //   $("#revel1").css("opacity", "0.6");
  console.log("revel2");
  $(".te p img").hover(
    function() {
      $(this).css("transform", "scale(1.1, 1.1)");
    },
    function() {
      $(this).css("transform", "");
    }
  );
  $(".aite_img p").html('<p><img src="img/aite_revel2.png"></p>');
  revel = 2;
  // 絶対負ける
  // 自分がグーを出したとき
  $(".te .gu").on("click", function() {
    $(".aite_te").css("padding-top: 0px;");
    $(".aite .aite_te").html('<P><img src="img/janken_pa.png"></P>');
    $(".aite .aite_te").css("padding-top", "10px");
    $(".kekka").html("負け");
    $(".kekka").css("color", "#0000ff");
    $(".kekka").css("font-weight", "bold");
    $(".aite_img p").html('<p><img src="img/aite_revel2_win.png"></p>');
  });
  // 自分がチョキを出したとき
  $(".te .choki").on("click", function() {
    $(".aite .aite_te").css("padding-top: 0px;");
    $(".aite .aite_te").html('<p><img src="img/janken_gu.png"></P>');
    $(".aite .aite_te img").css("padding-top", "50px");
    $(".kekka").html("負け");
    $(".kekka").css("color", "#0000ff");
    $(".kekka").css("font-weight", "bold");
    $(".aite_img p").html('<p><img src="img/aite_revel2_win.png"></p>');
  });
  // 自分がパーを出したとき
  $(".te .pa").on("click", function() {
    $(".aite .aite_te").css("padding-top: 0px;");
    $(".aite .aite_te").html('<P><img src="img/janken_choki.png"></P>');
    $(".aite .aite_te").css("padding-top", "7px");
    $(".kekka").html("負け");
    $(".kekka").css("color", "#0000ff");
    $(".kekka").css("font-weight", "bold");
    $(".aite_img p").html('<p><img src="img/aite_revel2_win.png"></p>');
  });
});
// ここまでレベル選択
// ここまで相手のエリア

// ランダムで相手の手を出す
// $('.te').on('click', function () {
//     $('.aite .aite_te').css('padding-top: 0px;')
//     var random = Math.floor(Math.random() * 3 + 1)
//     if (random == 1) {
//         $('.aite .aite_te').html('<p><img src="img/janken_gu.png"></P>')
//         $('.aite .aite_te img').css('padding-top','50px')
//     } else if (random == 2) {
//         $('.aite .aite_te').html('<P><img src="img/janken_choki.png"></P>')
//         $('.aite .aite_te').css('padding-top','7px')
//     } else {
//         $('.aite .aite_te').html('<P><img src="img/janken_pa.png"></P>')
//         $('.aite .aite_te').css('padding-top','10px')
//     }
//     console.log(random);
// });

// 自分がどの手を出したかで処理を変える
// 自分がグーを出したとき
// var revel = 0
// console.log(revel);
// if (revel == 1) {

// } else {

// }

// 勝った回数をカウント
// 自分がグーを出したとき

// var win = 0
// do {
// $('.te .gu').on('click', function () {
//     $('.aite .aite_te').css('padding-top: 0px;')
//     var random = Math.floor(Math.random() * 3 + 1)
//     if (random == 1) {
//         $('.aite .aite_te').html('<p><img src="img/janken_gu.png"></P>')
//         $('.aite .aite_te img').css('padding-top','50px')
//         $('.kekka').html('あいこ')
//         $('.kekka').css('color','#00ff00')
//     } else if (random == 2) {
//         $('.aite .aite_te').html('<P><img src="img/janken_choki.png"></P>')
//         $('.aite .aite_te').css('padding-top','7px')
//         $('.kekka').html('勝ち')
//         $('.kekka').css('color','#ff0000')
//         win++
//         console.log('勝ち星' + win );
//     } else {
//         $('.aite .aite_te').html('<P><img src="img/janken_pa.png"></P>')
//         $('.aite .aite_te').css('padding-top','10px')
//         $('.kekka').html('負け')
//         $('.kekka').css('color','#0000ff')
//     }
//     $('.kekka').css('font-weight','bold')
//     console.log(random);
// });

// } while (win < 1)

// $('.te .gu').on('click', function () {
//     $('.aite .aite_te').css('padding-top: 0px;')
//     var random = Math.floor(Math.random() * 3 + 1)
//     var win = 0
//     if (random == 1) {
//         $('.aite .aite_te').html('<p><img src="img/janken_gu.png"></P>')
//         $('.aite .aite_te img').css('padding-top','50px')
//         $('.kekka').html('あいこ')
//         $('.kekka').css('color','#00ff00')
//     } else if (random == 2) {
//         $('.aite .aite_te').html('<P><img src="img/janken_choki.png"></P>')
//         $('.aite .aite_te').css('padding-top','7px')
//         $('.kekka').html('勝ち')
//         $('.kekka').css('color','#ff0000')
//         console.log('勝ち星' + win );
//     } else {
//         $('.aite .aite_te').html('<P><img src="img/janken_pa.png"></P>')
//         $('.aite .aite_te').css('padding-top','10px')
//         $('.kekka').html('負け')
//         $('.kekka').css('color','#0000ff')
//     }
//     $('.kekka').css('font-weight','bold')
//     console.log(random);
// });

// $('.te .gu').on('click', function () {
//     $('.aite .aite_te').css('padding-top: 0px;')
//     var random = Math.floor(Math.random() * 3 - 1)
//     if (random == 1) {
//         $('.aite .aite_te').html('<P><img src="img/janken_choki.png"></P>')
//         $('.aite .aite_te').css('padding-top','7px')
//         $('.kekka').html('勝ち')
//         $('.kekka').css('color','#ff0000')
//     } else if (random == 0) {
//         $('.aite .aite_te').html('<p><img src="img/janken_gu.png"></P>')
//         $('.aite .aite_te img').css('padding-top','50px')
//         $('.kekka').html('あいこ')
//         $('.kekka').css('color','#00ff00')
//     } else {
//         $('.aite .aite_te').html('<P><img src="img/janken_pa.png"></P>')
//         $('.aite .aite_te').css('padding-top','10px')
//         $('.kekka').html('負け')
//         $('.kekka').css('color','#0000ff')
//     }
//     $('.kekka').css('font-weight','bold')
//     console.log(random);
//     var i = 0
//     var win = i + random
//     console.log('勝ち星' + win)
// });

// $('.te .gu').on('click', function () {

// }
