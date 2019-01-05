var prdlist =[
    {
        id:1,
        img: '../img/NEWSP/h1.jpg' ,//link anh
        type: 'Hoodie', //text
        price: 550,
    },
    {
        id:2,
        img: '../img/NEWSP/h1.jpg' ,//link anh
        type: 'Hoodie', //text
        price: 550,
    },
    {
        id:8,
        img: '../img/NEWSP/h1.jpg' ,//link anh
        type: 'Hoodie', //text
        price: 550,
    },
    {
        id:3,
        img: '../img/NEWSP/h1.jpg' ,//link anh
        type: 'Hoodie', //text
        price: 550,
    },
    {
        id:4,
        img: '../img/NEWSP/h1.jpg' ,//link anh
        type: 'Hoodie', //text
        price: 550,
    },
    {
        id:5,
        img: '../img/NEWSP/h1.jpg' ,//link anh
        type: 'Hoodie', //text
        price: 550,
    },
    {
        id:6,
        img: '../img/NEWSP/h1.jpg' ,//link anh
        type: 'Hoodie', //text
        price: 550,
    },
    {
        id:7,
        img: '../img/NEWSP/h1.jpg' ,//link anh
        type: 'Hoodie', //text
        price: 45000,
    },
];

var datalist2 = [
    {
        id:8,
        img: '../img/SPBC/h1.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:9,
        img: '../img/SPBC/h2.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:10,
        img: '../img/SPBC/h3.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:11,
        img: '../img/SPBC/h4.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:12,
        img: '../img/SPBC/h5.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:13,
        img: '../img/SPBC/h6.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:14,
        img: '../img/SPBC/h7.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:15,
        img: '../img/SPBC/h8.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:16,
        img: '../img/SPBC/h10.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:17,
        img: '../img/SPBC/h11.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:18,
        img: '../img/SPBC/h12.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:19,
        img: '../img/SPBC/h12.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
];

var datalist3 = [
    {
        id:20,
        img: '../img/SPBC/h1.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:21,
        img: '../img/SPBC/h2.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:22,
        img: '../img/SPBC/h3.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:23,
        img: '../img/SPBC/h4.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:24,
        img: '../img/SPBC/h5.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:25,
        img: '../img/SPBC/h6.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:26,
        img: '../img/SPBC/h7.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:27,
        img: '../img/SPBC/h8.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:28,
        img: '../img/SPBC/h10.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:29,
        img: '../img/SPBC/h11.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:30,
        img: '../img/SPBC/h12.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
    {
        id:31,
        img: '../img/SPBC/h12.jpg',//link anh
        type:'Bondage Tee',//text
        price: 450,
    },
];

var listCart = [];
function addcart(item){
    for( i = 0; i<prdlist.length; i++){
        if(prdlist[i].id == item){
            listCart.push(prdlist[i]);
            console.log(listCart);
        }
    }  
}