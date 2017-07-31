/**
 * Created by bjwsl-001 on 2016/11/27.
 */
//记住密码
$('#remeber').click(function(){
});
function alertAn(){
    $('.alert').animate({
        position:'absolute',
        top:'0',
        opacity: '1',
        transform: 'rotateX(-270deg)',
        transition: 'transform 0.6s'
    },1000)
}
function alertAnimate(){
    $('.alert').animate({
        position:'absolute',
        top:'0',
        opacity: '1',
        transform: 'rotateX(270deg)',
        transition: 'transform 0.6s'
    },1000)
        .delay(1000)
        .animate({
            position:'absolute',
            top:'-150px',
            opacity: '0',
            transform: 'rotateX(270deg)',
            transition: 'transform 0.6s'
        },1000);
}
//登录
$('#bt-login').click(function(){
    var uname = $('[name="uname"]').val();
    var upwd = $('[name="upwd"]').val();
    $.ajax({
        type: 'POST',
        url: 'data/ladon.php',
        data: {"uname":uname, "upwd":upwd},
        success: function(txt){
            if(txt==='err'){
                zeroModal.show({
                    content: '用户名或者密码错误！',
                    width: '20%',
                    height: '20%'
                });
            }else if(txt==='ok'){
                zeroModal.show({
                    content: '登录成功！',
                    width: '20%',
                    height: '20%'
                });
                setTimeout(function () {
                    location.href = 'index.html';
                }, 2000);
                sessionStorage.setItem('LoginName',uname);
            }else {
                zeroModal.show({
                    content: '用户名或者密码错误！',
                    width: '20%',
                    height: '20%'
                });
            }
        }
    });
});


//忘记密码
 /*
$('.alert').animate({
    type: 'alert',
    width: 300,
    height: 200,
    hasMask: true,
    autoHide: true,
    time: 3000,
    effect: 'fall',
    title: 'title text',
    content: 'dialog content text,image,html file'
});*/