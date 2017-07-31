/***toTop**/
var div=document.getElementById("toTop");
	window.addEventListener("scroll",
	function(){
		var scrollTop=document.body.scrollTop;			
		div.style.display=scrollTop>400?"block":"none";
	});

/***********************/
$(".site>a").click(function(e){
	e.preventDefault();
	$(this).next("ul").toggleClass("in");});
/****************************/
$(function(){
    $('header#top').load('data/top.php');
	$('div#header').load('data/header.php');
});
/*********************************/

window.onload = function () {
	var container = document.getElementById('container');
	var list = document.getElementById('side_img');
	var btns = document.getElementById('buttons').getElementsByTagName('span');
	var index = 1;
	var timer;

	function animate(offset) {
		var newbtu = parseInt(list.style.right) + offset;
		list.style.right = newbtu + 'px';
		if (newbtu > 0) {
			list.style.right = -450 + 'px';
		}
		if (newbtu < -450) {
			list.style.right = -450 + 'px';
		}
	}
	function play() {
		timer = setInterval(function () {
			index += 1;
			if (index > 4) {
				index = 1
			}
			animate(150);
			btnShow();
		}, 2000)
	}
	function stop() {clearInterval(timer);}

	function btnShow() {//圆点
		for (var i = 0; i < btns.length; i++) {
			if (btns[i].className == "on") {
				btns[i].className = "";
			}
			btns[index-1].className = "on";
		}
	}

	for (var i = 0; i < btns.length; i++) {
		(function (i) {
			btns[i].onclick = function () {
				var clickIndex = parseInt(this.getAttribute('index'));
				var offset = 150 * (index - clickIndex);
				animate(offset);
				index = clickIndex;
				btnShow();
			}
		})(i)
	}

	container.onmouseover = stop;
	container.onmouseout = play;
	play();

};
/***********************/
$(".intro_img ul li p").hide();
$(".intro_img img").hover(function(){
	$(this).siblings('div').slideToggle(500);
})