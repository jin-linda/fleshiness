/**
 * Created by Administrator on 2016/12/11 0011.
 */
/******用户名***************/
$(function() {
    var unameT=false;
    var upwdT=false;
    var upwd2T=false;
    var inputCodeT=false;
    uname.onfocus = function () {
        $('.user_name').css("visibility", "visible");
    };
    uname.onblur = function () {
        if (this.value == "") {
            var msg = "请填写用户名";
            this.nextElementSibling.innerHTML = msg;
            this.nextElementSibling.className = "help-block bg-danger";
            this.setCustomValidity(msg);
        } else {
            if (uname.validity.valid != true) {
                var msg = "请输入5-16位数字或英文字符";
                this.nextElementSibling.innerHTML = msg;
                this.nextElementSibling.className = "help-block bg-danger";
                this.setCustomValidity(msg);
            } else {
                $.ajax({
                    type: 'GET',
                    url: 'data/user_checked.php',
                    data: {uname: uname.value},
                    success: function (result) {
                        if (result == 'no') {
                            uname.nextElementSibling.innerHTML = '该用户名已被占用！';
                            uname.nextElementSibling.className = "help-block bg-danger";
                        } else if (result == 'ok') {
                            uname.nextElementSibling.innerHTML = 'OK！';
                            uname.nextElementSibling.className = "help-block bg-success";
                            unameT=true;
                        } else {
                            zeroModal.show({
                                content: '出现未知错误，请联系后台小哥',
                                width: '20%',
                                height: '20%'
                            });
                        }
                    }
                })
            }
        }
    }
    /**********密码***************/
    upwd.onfocus = function () {
        $('.user_pwd').css("visibility", "visible");
    };
    upwd.onblur = function () {
        if (this.validity.valueMissing) {
            var msg = "请填写密码";
            this.nextElementSibling.innerHTML = msg;
            this.nextElementSibling.className = "help-block bg-danger";
            this.setCustomValidity(msg);
        } else if (this.validity.tooShort) {
            var msg = '密码不能少于6位！';
            this.nextElementSibling.innerHTML = msg;
            this.nextElementSibling.className = 'help-block bg-danger';
            this.setCustomValidity(msg);
        } else if (this.validity.tooLong) {
            var msg = '密码不能大于13位！';
            this.nextElementSibling.innerHTML = msg;
            this.nextElementSibling.className = 'help-block bg-danger';
            this.setCustomValidity(msg);
        } else if (this.validity.patternMismatch) {
            var msg = '密码格式错误！';
            this.nextElementSibling.innerHTML = msg;
            this.nextElementSibling.className = 'help-block bg-danger';
            this.setCustomValidity(msg);
        } else {
            this.nextElementSibling.innerHTML = '合格';
            this.nextElementSibling.className = 'help-block bg-success';
            this.setCustomValidity(msg);
            upwdT=true;
        }
    };
    /*************确认密码********************/
    upwd_again.onblur = function () {
        if (this.value != upwd.value) {
            this.nextElementSibling.innerHTML = '与密码不一致';
            this.nextElementSibling.className = 'help-block bg-danger';
        } else if (this.value === upwd.value) {
            this.nextElementSibling.innerHTML = 'OK';
            this.nextElementSibling.className = 'help-block bg-success';
            upwd2T=true;
        }
        if (upwd_again.value == "") {
            this.nextElementSibling.innerHTML = '请填写密码';
            this.nextElementSibling.className = "help-block bg-danger";
        }
    }
    /**********验证码*********/
    function rn(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function rc(min, max) {
        var r = rn(min, max);
        var g = rn(min, max);
        var b = rn(min, max);
        return `rgb(${r},${g},${b})`;
    }

    var codeStr;

    function vcodeNum() {
        var w = 100, h = 30;
        vcode.width = w;
        vcode.height = h;
        var ctx = vcode.getContext('2d');
        ctx.textBaseline = 'top';

        ctx.fillStyle = rc(160, 240);
        ctx.fillRect(0, 0, w, h);
        var src = 'ABCDEFGHKMNPQSTUVWXY23456789abcdefghkmnpqrstuvwxyz';
        codeStr = '';
        for (var i = 0; i < 5; i++) {
            var c = src[rn(0, src.length)];
            ctx.fillStyle = rc(30, 160);
            var f = rn(18, 36);
            ctx.font = f + 'px SimHei';
            var x = 20 * i + 3;
            var y = rn(-1, 5);
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rn(-30, 30) * Math.PI / 180);
            ctx.fillText(c, 0, 0);
            ctx.restore();
            //console.log(c);
            codeStr += c;
        }
//干扰杂色点
        for (var i = 0; i < 80; i++) {
            ctx.beginPath();
            ctx.arc(rn(0, w), rn(0, h), 1, 0, 2 * Math.PI);
            ctx.fillStyle = rc(30, 250);
            ctx.fill();
        }
        //console.log(codeStr);
    }

    vcodeNum();
    $('#captcha').blur(function () {
        var capCode = codeStr;
        var inputCode = $(this).val();
        if (inputCode.toUpperCase() != capCode.toUpperCase()) {
            vcodeNum();
            var msg = '验证码错误！';
            this.parentElement.lastElementChild.innerHTML = msg;
            this.parentElement.lastElementChild.className = 'help-block bg-danger';
            this.setCustomValidity(msg);
        } else if (inputCode.toUpperCase() == capCode.toUpperCase()) {
            this.parentElement.lastElementChild.innerHTML = '正确！';
            this.parentElement.lastElementChild.className = 'help-block bg-success';
            this.setCustomValidity('合格');
            inputCodeT=true;
        }
    });
//单击vcode改变验证码
    $('#vcode').click(function () {
        vcodeNum();
    });
    /*********提交***********/
    $('#bt-submit').click(function () {
        // console.log(unameT);
        // console.log(upwdT);
        // console.log(upwd2T);
        // console.log(inputCodeT);
        if (unameT && upwdT && upwd2T && inputCodeT) {
        $.ajax({
            type: 'POST',
            url: 'data/user_add.php',
            data: {uname: uname.value, upwd: upwd.value},
            success: function (result) {
                if (result.code == 1) {
                    zeroModal.show({
                        content: '注册成功！3秒钟跳转到首页...',
                        width: '20%',
                        height: '20%'
                    });
                    sessionStorage['LoginName'] = uname.value;
                    setTimeout(function () {
                        location.href = 'index.html';
                    }, 3000);
                } else {
                    zeroModal.show({
                        content: '注册失败！',
                        width: '20%',
                        height: '20%'
                    });
                }
            }
        })
        }else{
            zeroModal.show({
                content: '输入有误，请检查输入',
                width: '20%',
                height: '20%'
            });
        }
    })
})
/*********重置*******************/
$('#reset').click(function(){
        //var htnl= $('.help-block').html();
        $('.help-block').html();
        // console.log(htnl);
    }
)