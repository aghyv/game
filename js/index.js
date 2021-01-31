var score=0;


//usere choice

  $("#rock").on("click", function(){
    var computerNum = Math.floor(Math.random()*3)+1; //create num 1-3
    var randomImg = "icon"+ computerNum + ".svg"; //
    var randomImgSrc = "images/" + randomImg;
    var img1 = $("#computerChoice")[0];
    img1.setAttribute("src" , randomImgSrc);
  var rock = $("#rock").val();
  var userNum = parseInt(rock);
  $("#scissors").fadeOut();
  $("#paper").fadeOut();
  $(".start-comp").addClass("active");
  $(".game-heading").addClass("active");
  showResult(userNum , computerNum);
  playAgain();
});
$("#paper").on("click", function(){
  var computerNum = Math.floor(Math.random()*3)+1; //create num 1-3
  var randomImg = "icon"+ computerNum + ".svg"; //
  var randomImgSrc = "images/" + randomImg;
  var img1 = $("#computerChoice")[0];
  img1.setAttribute("src" , randomImgSrc);
  var paper = $("#paper").val();
  var userNum = parseInt(paper);

$("#scissors").fadeOut();
$("#rock").fadeOut();
$(".start-comp").addClass("active");
$(".game-heading").addClass("active");
 showResult(userNum , computerNum);
 playAgain();
});
//
$("#scissors").on("click", function(){
  var computerNum = Math.floor(Math.random()*3)+1; //create num 1-3
  var randomImg = "icon"+ computerNum + ".svg"; //
  var randomImgSrc = "images/" + randomImg;
  var img1 = $("#computerChoice")[0];
  img1.setAttribute("src" , randomImgSrc);
  var scissor = $("#scissors").val();
  var userNum = parseInt(scissor);
$("#paper").fadeOut();
$("#rock").fadeOut();
$(".start-comp").addClass("active");
$(".game-heading").addClass("active");
showResult(userNum , computerNum);
playAgain();
});


 //result section

function showResult(userNum , computerNum){

if (userNum === computerNum){
  $(".result-block").addClass("active");
  $(".result").html("Tie");
}
else if(userNum==3 && computerNum==1){
  $(".result-block").addClass("active");
  $(".result").html("You Lost");
  score=score-1;
  $(".scoretext").html(score);
}
else if(userNum==1 && computerNum==3){
  $(".result-block").addClass("active");
  $(".result").html("You win");
  score=score+1;
  $(".scoretext").html(score);
}
else if (userNum > computerNum){
  $(".result-block").addClass("active");
  $(".result").html("You win");
  score=score+1;
  $(".scoretext").html(score);
}
else{
  $(".result-block").addClass("active");
  $(".result").html("You Lost");
  score=score-1;
  $(".scoretext").html(score);
}
};

//play again
function playAgain(){
  $(".play-again").on("click" , function(){
    $("#rock").fadeIn();
    $("#scissors").fadeIn();
    $("#paper").fadeIn();
    $(".start-comp").removeClass("active");
    $(".game-heading").removeClass("active");
    $(".result-block").removeClass("active");

  });
}
//
//rules section
$(".rules").on("click", function() {
  $(".modal-wrap, .modal-content").addClass("active");
});
$(".close, .modal-wrap").on("click", function() {
  $(".modal-wrap, .modal-content").removeClass("active");
});
