/**
 * Created by bjwsl-001 on 2016/12/16.
 */
$(function(){
    $('div#shopname').load('data/shopheader.php');
});
/***********/
function loadProduct(pageNum ){
    $.ajax({
        type: 'GET',
        url: 'data/product_all.php',
        data: {'pageNum': pageNum},
        success: function(pager){
            var html = "";
            $.each(pager.data, function(i, p){
                html += `
                <li class="product_pic">
                    <div><img src="${p.picSm}" alt=""/></div>
                    <p>${p.pdecs}</p>
                    <div>￥<span>${p.price}</span></div>
                    <a href="#" class="button button-1">关注</a>
                    <a href="#" class="button button-1 settle_up">购买</a>
                </li>
				`;
            });
            $('.product_show').html(html);
            var html = "";
            if(pager.pageNum===1){
                html += `<li class="active">${pager.pageNum}</li> `;
                html += `<li><a href="#">${pager.pageNum+1}</a></li> `;
                html += `<li><a href="#">${pager.pageNum+2}</a></li> `;
            }else if(pager.pageNum===3){
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
loadProduct(1);
$('.pager').on('click', 'a', function(e){
    e.preventDefault();
    var pageNum = $(this).html();
    loadProduct(pageNum);
});