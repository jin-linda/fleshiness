
$(function(){
    $('#tuichu').hide();
    $('div#header').load('data/header.php',function(){
        var uname=sessionStorage['LoginName'];
        if(uname){
            $('#welcome').html("欢迎回来："+uname);
            $('#login_in').hide();
            $('#tuichu').show();
        }
    });
    $('div#footer').load('data/footer.php');
    $('#tuichu').click(function () {
        sessionStorage.removeItem('LoginName');
        window.location.reload();
    })
});

/******************/
$(".site>a").click(function(e){
    e.preventDefault();
    $(this).next("#navigation").toggleClass("in");});

/*************手风琴*************/
$("[data-toggle='title']>a").hover(function(e){
    e.preventDefault();
    $(this).parent().next().toggleClass("in")
        .siblings(".content").removeClass("in");
});
/****************************/
$(function() {
    $('#slider').nivoSlider();
});
/*********************/
$(function(){
    $('.dl2 li').hover(function(e) {
            e.preventDefault();
            $(this).addClass('on');
            $(this).find('.show_pic').css('left', '-120px')
        },
        function() {
            $(this).animate({height: "100px"}, 100).removeClass('on');
            $(this).find('.show_pic').css('left', '0')
        });
})
/*******************************/
$(function() {
    $.ajax({
        type: 'GET',
        url: 'data/art_all.php',
        success: function (list) {
            var html = "";
            $.each(list, function (i, p) {
                html += `
                <li>
					<p class="pic lf pic_in"><img src="${p.apic}" alt=""/></p>
					<div class="rt">
						<h2><a href="">${p.atitle}</a></h2>
						<p class=" pic_world">　　　　
					        ${p.atext}
						</p>
						<p class="pic_p">${p.atime}</p>
					</div>
				</li>
				`;
            });
            $('.show_pic ul').html(html);
        }
    })
})
/**************/
$(function() {
    $.ajax({
        type: 'GET',
        url: 'data/art_text.php',
        success: function (list) {
            var html = "";
            $.each(list, function (i, p) {
                html += `
                <li><a href="#">${p.atitle}</a></li>
				`;
            });
            $('.article ul').html(html);
        }
    })
})