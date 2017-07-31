/**
 * Created by Administrator on 2016/12/11 0011.
 */

uname.onblur = function(){
    if(this.validity.valueMissing){
        var msg = '用户名不能为空！';
        this.nextElementSibling.innerHTML = msg;
        this.nextElementSibling.className = 'help-block bg-danger';
        this.setCustomValidity(msg);
    }else if(this.validity.tooShort){
        var msg = '用户名不能少于5位！';
        this.nextElementSibling.innerHTML = msg;
        this.nextElementSibling.className = 'help-block bg-danger';
        this.setCustomValidity(msg);
    }else if(this.validity.tooLong){
        var msg = '用户名不能大于16位！';
        this.nextElementSibling.innerHTML = msg;
        this.nextElementSibling.className = 'help-block bg-danger';
        this.setCustomValidity(msg);
    }else if(this.validity.patternMismatch){
        var msg = '用户名格式错误！';
        this.nextElementSibling.innerHTML = msg;
        this.nextElementSibling.className = 'help-block bg-danger';
        this.setCustomValidity(msg);
    } else {
        this.nextElementSibling.innerHTML = '用户名输入合法';
        this.nextElementSibling.className = 'help-block bg-success';
        this.setCustomValidity('合格');
    }
};

/**********密码***************/
upwd.onfocus=function(){
    $('.user_pwd').css("display","inline-block");
};
upwd.onblur=function(){
    if(this.validity.valueMissing){
        var msg="请填写密码";
        this.nextElementSibling.innerHTML=msg;
        this.nextElementSibling.className="help-block bg-danger";
        this.setCustomValidity(msg);
    }else if(this.validity.tooShort){
        var msg = '密码不能少于6位！';
        this.nextElementSibling.innerHTML = msg;
        this.nextElementSibling.className = 'help-block bg-danger';
        this.setCustomValidity(msg);
    }else if(this.validity.tooLong){
        var msg = '密码不能大于13位！';
        this.nextElementSibling.innerHTML = msg;
        this.nextElementSibling.className = 'help-block bg-danger';
        this.setCustomValidity(msg);
    }else if(this.validity.patternMismatch){
        var msg = '密码格式错误！';
        this.nextElementSibling.innerHTML = msg;
        this.nextElementSibling.className = 'help-block bg-danger';
        this.setCustomValidity(msg);
    }else {
        this.nextElementSibling.innerHTML = '合格';
        this.nextElementSibling.className = 'help-block bg-success';
        this.setCustomValidity('合格');
    }
};
/******************************/
var a;
$('#upwd_again').blur(function(){
    if($(this).val()==""){
        var msg="请输入密码";
        this.nextElementSibling.innerHTML=msg;
        this.nextElementSibling.className="help-block bg-danger";
        this.setCustomValidity(msg);
        return a=false;
    }else if($(this).val()!==$("#upwd").val()){
        var msg = '两次密码不一致！';
        this.nextElementSibling.innerHTML = msg;
        this.nextElementSibling.className = 'help-block bg-danger';
        this.setCustomValidity(msg);
        return a=false;
    }else {
        this.nextElementSibling.innerHTML = '合格';
        this.nextElementSibling.className = 'help-block bg-success';
        this.setCustomValidity('合格');
        return a=true;
    }
});
/*******************/
function alertAn(){
    $('.alert').animate({
        position:'absolute',
        top:'-90px',
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
$('#bt-submit').click(function(){
    $.ajax({
        type: 'POST',
        url: 'data/user_add.php',
        data: {uname: uname.value, upwd: upwd.value},
        success: function(result){
            if(result.code==1&&a==true){
                $('.alert h4').html('注册成功！马上回主页面！！');
                $('.alert a').css('display','inline-block');
                    alertAn();
            }else {
                $('.alert h4').html('注册失败！用户名已被注册');
                $('.alert a').css('display','none');
                alertAnimate();
            }
        }
    })
})
console.log($('.alert'))
