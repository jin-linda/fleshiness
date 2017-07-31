/**
 * Created by Administrator on 2016/12/11 0011.
 */
$(function(){
    $('header#top').load('data/top.php');
    $('div#header').load('data/header.php');
    $('div#shopname').load('data/shopheader.php');

        if(sessionStorage['LoginName']) {
                $('#welcome').html("欢迎回来："+sessionStorage['LoginName']);
                $('#login_in').hide();
        }
});

$(function() {
    $('#slider').nivoSlider();
});
/*********************/
function loadProduct(pageNum ){
    $.ajax({
        type: 'GET',
        url: 'data/product_page.php',
        data: {'pageNum': pageNum},
        success: function(pager){
            var html = "";
            $.each(pager.data, function(i, p){
                html += `
                <div class=" col-sm-12 col-1-3">
                    <div class="wrap-col">
                        <div class="box-item">
                            <span class="ribbon">${p.pname}<b></b></span>
                            <a href=""><img src="${p.pic}" alt=""></a>
                            <p>${p.pdecs}</p>
                            <p>优惠价：￥${p.price}</p>
                            <a href="#" class="button button-1 addcart">加入购物车</a>
                            <a href="#" class="button button-1 settle_up">购买</a>
                        </div>
                    </div>
                </div>
				`;
            });
            $('.shop_product').html(html);
            var html = "";
            if(pager.pageNum===1){
                html += `<li class="active">${pager.pageNum}</li> `;
                html += `<li><a href="#">${pager.pageNum+1}</a></li> `;
                html += `<li><a href="#">${pager.pageNum+2}</a></li> `;
            }else if(pager.pageNum==3){
                html += `<li><a href="#">${pager.pageNum-2}</a></li> `;
                html += `<li><a href="#">${pager.pageNum-1}</a></li> `;
                html += `<li class="active">${pager.pageNum}</li> `;
            }else{
                html += `<li><a href="#">${pager.pageNum-1}</a></li> `;
                html += `<li class="active">${pager.pageNum}</li> `;
                html += `<li><a href="#">${pager.pageNum+1}</a></li> `;
            }
            $('.pager').html(html);
        }
    });
}
loadProduct(1,1);

$('.pager').on('click', 'a', function(e){
    e.preventDefault();
    var pageNum = $(this).html();
    loadProduct(pageNum);
});
/*********************************/
function productSelcte(pkind){
    $.ajax({
        type: 'GET',
        url: 'data/product_select.php',
        data: {'pkind':pkind},
        success: function(list){
            var html = "";
            $.each(list,function(i, p){
                html += `
                 <div class="col-sm-12 col-md-3 ">
                 <div class="wrap-col  ">
                        <div class="box-item">
                            <a href=""><img class="img-responsive" src="${p.pic}" alt=""></a>
                            <p>${p.pname}</p>
                            <p>优惠价：￥${p.price}</p>
                            <a href="#" class="button button-1 addcart">加入购物车</a>
                            <a href="#" class="button button-1">购买</a>
                        </div>
                    </div>
                 </div>
                `;
            });
            $('.shop_product_a').html(html);
        }
    })
    };
productSelcte(2);

/******************************/
$('.shop_product ').on('click', 'a.addcart', function(e){
    e.preventDefault();
    var pid = $(this).attr('href');
    $.ajax({
        type: 'POST',
        url: 'data/carAdd.php',
        data: {uname:sessionStorage['LoginName'], pid: pid},
        success: function(result){
            if(result.msg==='succ'){
                alert('购买成功！该商品已购买的数量：'+result.count);
                $("#right-shopping-cart-num").html(result.count);
            }else {
                alert('购买失败！失败原因为：'+result.reason);
                if(! sessionStorage['LoginName']){
                    alert("请登录或注册！");
                    setTimeout(function(){
                        location.href = 'login.html';
                    }, 1000);
                }
            }
        },
        error: function(){
            console.log('error');
            console.log(arguments);
        }
    });
});

$('.shop_product').on('click', '.settle_up', function(){
    location.href="index.html";
});