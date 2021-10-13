

var initialState = [
    {
        id: 1,
        name : 'Iphone 7 Plus',
        image : 'data:image/jpeg;base64,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',
        description :'Sản phẩm do apple ',
        price : '6000000' ,
        inventory : 10,
        rating : 4
    },
    {
        id: 2,
        name : 'Iphone 8 Plus',
        image : 'data:image/jpeg;base64,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',
        description :'Sản phẩm do apple ',
        price : '10000000' ,
        inventory : 20,
        rating : 5
    },
    {
        id: 3,
        name : 'Iphone 9 Plus',
        image : 'https://didongviet.vn/pub/media/catalog/product/i/p/iphone-13-128gb-hong-didongviet_1.jpg',
        description :'Sản phẩm do apple ',
        price : '16000000' ,
        inventory : 30,
        rating : 3
    }
];

const products = (state = initialState,action)=>{
    switch(action.type){
        default :return [...state];
    }
}
export default products;