$(function(){
    writesp('#loai1', 0, prdlist.length);
    getListData('#data2', 0, datalist2.length);
    getListDatas('#idthere', 0, datalist3.length);
    getListDataClothing('#idfour', 0, datalist2.length);
    getListCart('#idfive',0 ,listCart.length);
});

function writesp(idelm, start, end){
    console.log(idelm);
    for(i = start; i < end ; i++)
    {
        var prd = prdlist[i];
        var html='<div id  = "pro-'+prd.id +'" class="col-md-3 col-6 mysp ">';
            html +='<div class="card">';
            html +='<a href="sanpham.html"><img src=' + prd.img + '></a>';
            html+='<div class="card-body">';
            html+='<h5>' + prd.type + '</h5>';
            html+='<h5>' + prd.price + '.000 VND</h5>';
            html+='<button type="button" onclick= "addcart('+prd.id+')" productId ="'+prd.id+'" class="btn btn-danger add2cart"><i class="fa fa-cart-plus" aria-hidden="true"></i>Add to Cart</button>';
            html+='</div>';
            html+='</div>';
            html+='</div>';
            $(idelm).append(html);
    }
}


function getListData(idtwo, start, end){
    console.log(idtwo);
    for(i = start; i < end; i++){
        var prd = datalist2[i];
        var html = '<div class="product_single col-sm-3 col-md-3 col-6 text-center">';
            html += '<div class="product_img ">';
            html += ' <a href="sanpham.html"><img src=' + prd.img +'>';
            html += ' <span><i class="fal fa-cart-plus"></i></span>';
            html += ' </a>';
            html += ' </div>';
            html += ' <div class="product_tittle text-center">';
            html += ' <div class="product_name">';
            html += ' <h3 itemprop="name"><a href="sanpham.html">'+ prd.type +'</a></h3>';
            html += ' </div>';
            html += ' <div class="product_price">';
            html += ' <ins itemprop="price">'+ prd.price +'.000 VND </ins>';
            html += '</div>';
            html +='</div>';
            html +='</div>';
            $(idtwo).append(html);
    }
}

function getListDatas(idthere, start, end){
    console.log(idthere);
    for(i = start; i < end; i++){
        var prd = datalist3[i];
        var html = '<div class="col-md-3 col-6 col-sm-3 text-center">';
            html += '<div class="product_img ">';
            html += '  <a href="sanpham.html"><img src='+ prd.img +'><span><i class="fal fa-cart-plus"></i></span></a>';
            html += '  </div>';
            html += ' <div class="product_tittle text-center">';
            html += ' <div class="product_name">';
            html += '   <h3 itemprop="name"><a href="sanpham.html">'+ prd.type +'</a></h3>';
            html += ' </div>';
            html += ' <div class="product_price">';
            html += '  <ins itemprop="price">'+ prd.price +'.000đ</ins>';
            html += '  </div>';
            html += '  </div>';
            html += '  </div>';
            $(idthere).append(html);
    }
}

function getListDataClothing(idfour, start, end){
    console.log(idfour);
    for(i = start; i< end; i++){
        var prd = datalist2[i];
        var html = ' <div class="col-md-3 col-6 col-sm-3 text-center p-2">';
            html +=' <div class="product_img ">';
            html +='  <a href="#"><img src='+ prd.img +'><span><i class="fal fa-cart-plus"></i></span></a>';
            html +=' </div>';
            html +='  <div class="product_tittle text-center">';
            html +='  <div class="product_name">';
            html +='  <h3 itemprop="name"><a href="#">'+ prd.type +'</a></h3>';
            html +=' </div>';
            html +=' <div class="product_price">';
            html +='   <ins itemprop="price">'+ prd.price +'.000đ</ins>';
            html +=' </div>';
            html +=' </div>';
            html +=' </div>';
            $(idfour).append(html);
            
    }
}

function getListCart(idfive, start, end){
    
    for(i = start; i< end; i++){
        var prd = listCart[i];
        var html = '  <li>';
            html +='  <span class="item">';
            html +='   <span class="item-left">';
            html +=' <img src="http://lorempixel.com/50/50/" alt="" />';
            html +=' <span class="item-info">';
            html +='  <span>'+ prd +'</span>';
            html +=' <span>'+ prd +'</span>';
            html +='</span>';
            html +='</span>';
            html +=' <span class="item-right">';
            html +='  <button class="btn btn-xs btn-danger pull-right">x</button>';
            html +='</span>';
            html +='</span>';
            html += '  </li>';
            $(idfive).append(html);
            
    }
}

///Cart///
var listCart = [];
function addcart(item){
    for( i = 0; i<prdlist.length; i++){
        if(prdlist[i].id == item){
            listCart.push(prdlist[i].type);
        }
    }
   
}
 for (let index = 0; index < prdlist.length; index++) {
     for (let j = 0; index < tempid.length; j++) {
        if(prdlist[index].id==tempid[j]){
            prdlist[index].price;

        }
         
     }
 }