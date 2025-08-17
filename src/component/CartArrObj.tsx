import { title } from "process";
export type CartProps = { 
    title: string;
    id:number;
     description: string
     image:string;
     rating:number;
     price:string;
     sellPrice:string;
     isFeature:boolean;
    //  vegitable:boolean;
    //   children:boolean,
      catagory:String;
 }
export const CartArrObj: CartProps[]=[
    {
        id:1,
        image:'/image/juice619.png',
        title:'Great Value Rising Crust Frozen Pizza, Supreme',
        description:'fresh vegitable in your own home cooking fresh thing and make fresh health',
        rating:3.2,
        price:'$6.99',
        sellPrice:'$10',
        isFeature:true,
         catagory:'Drinking'
    },
     {
        id:2,
        image:'/image/juice570.png',
        title:'Simply Orange Pulp Free Juice – 52 fl oz',
        description:'A mix of seasonal vegetables full of taste and texture.Rich in vitamins and perfect for any recipe.Great for quick and nutritious meals.',
        rating:3.3,
        price:'$7.99',
         sellPrice:'$12',
        isFeature:true,
        catagory:'Drinking'

    },
     {
        id:3,
        image:'/image/piza574.png',
        title:'California Pizza Kitchen Margherita, Crispy Thin Crus…',
        description:'fresh vegitable in your own home cooking fresh thing and make fresh health',
         rating:2.2,
        price:'$5.99',
         sellPrice:'$9',
        isFeature:true,
       catagory:''
    },
        {
        id:4,
        image:'/image/cantaloup582.png',
        title:'Cantaloupe Melon Fresh ',
        description:'fresh vegitable in your own home cooking fresh thing and make fresh health',
         rating:3.2,
        price:'$6.99',
         sellPrice:'$12',
        isFeature:true,
        catagory:'vegitable'
    },
        {
        id:6,
        image:'/image/list17.png',
        title:'fresh vegitable',
        description:'A white, crunchy vegetable rich in vitamins, perfect for cooking, roasting, or using in healthy recipes',
         rating:3.5,
        price:'$5.00',
         sellPrice:'$10',
        isFeature:false,
       catagory:'vegitable'
         
    },
       {
        id:7,
        image:'/image/vegitable625.png',
        title:'fresh vegitable',
        description:'A white, crunchy vegetable rich in vitamins, perfect for cooking, roasting, or using in healthy recipes',
         rating:3.00,
        price:'$6.99',
         sellPrice:'$13',
        isFeature:false,
       catagory:'vegitable'
           
    },
       {
        id:8,
        image:'/image/list23.png',
        title:'fresh vegitable',
        description:'A white, crunchy vegetable rich in vitamins, perfect for cooking, roasting, or using in healthy recipes',
         rating:3.1,
        price:'$6.00',
         sellPrice:'$12',
        isFeature:false,
          catagory:'lunch'
       
    },
       {
        id:9,
        image:'/image/list26.png',
        title:'fresh vegitable',
        description:'A white, crunchy vegetable rich in vitamins, perfect for cooking, roasting, or using in healthy recipes',
         rating:3.3,
        price:'$6.2',
         sellPrice:'$12',
        isFeature:false,
        catagory:'lunch'
    },
       {
        id:10,
        image:'/image/list342.png',
        title:'fresh vegitable',
        description:'A white, crunchy vegetable rich in vitamins, perfect for cooking, roasting, or using in healthy recipes',
        rating:3.4,
        price:'$6.3',
         sellPrice:'$12',
        isFeature:false,
       catagory:'vegitable'
    },
        {
        id:11,
        image:'/image/vegitable625.png',
        title:'fresh vegitable',
        description:'fresh vegitable in your own home cooking fresh thing and make fresh health',
        rating:3.5,
        price:'$6.4',
         sellPrice:'$12',
        isFeature:false,
        catagory:'vegitable'
         
    },
        {
        id:12,
        image:'/image/list353.png',
        title:'fresh vegitable',
        description:'fresh vegitable in your own home cooking fresh thing and make fresh health',
        rating:3.6,
        price:'$6.5',
         sellPrice:'$12',
        isFeature:false,
       catagory:'drink'
         
    },
        {
        id:13,
        image:'/image/list357.png',
        title:'fresh vegitable',
        description:'fresh vegitable in your own home cooking fresh thing and make fresh health',
        rating:3.7,
        price:'$6.6',
         sellPrice:'$12',
        isFeature:false,
       catagory:'lucnch'
    },
        {
        id:14,
        image:'/image/list365.png',
        title:'fresh vegitable',
        description:'fresh vegitable in your own home cooking fresh thing and make fresh health',
        rating:3.8,
        price:'$6.7',
         sellPrice:'$12',
        isFeature:false,
        catagory:'vegitable'
    },    {
        id:15,
        image:'/image/list372.png',
        title:'fresh vegitable',
        description:'fresh vegitable in your own home cooking fresh thing and make fresh health',
         rating:3.9,
        price:'$6.8',
         sellPrice:'$12',
        isFeature:false,
        catagory:'children'
    },
    {
        id:16,
        image:'/image/vegitableGobi.png',
        title:'A Nutritious and Versatile ',
        description:'A white, crunchy vegetable rich in vitamins, perfect for cooking, roasting, or using in healthy recipes',
         rating:3.9,
        price:'$6.8',
         sellPrice:'$12',
        isFeature:false,
        catagory:'children'
       
    },
    {
        id:18,
        image:'/image/mixVegitable.png',
        title:'Mixed Vegetables',
        description:'A colorful blend of fresh, nutritious veggies — perfect for curries, stir-fries, and healthy meals',
         rating:3.9,
        price:'$6.8',
         sellPrice:'$12',
        isFeature:false,
      catagory:'vegitable'
    }, 
     {
        id:19,
        image:'/image/vegitableTamator.png',
        title:'🍅 Tomato',
        description:'A juicy, red fruit used as a key ingredient in salads, sauces, and everyday cooking',
         rating:3.9,
        price:'$6.8',
         sellPrice:'$12',
        isFeature:false,
        catagory:'vegitable'
    },
       {
        id:20,
        image:'/image/CarrotVegitable.png',
        title:'🥕 Carrot',
        description:'A crunchy, sweet root vegetable rich in vitamin A — great for snacks, salads, and cooking.',
         rating:3.9,
        price:'$6.8',
         sellPrice:'$12',
        isFeature:false,
       catagory:'vegitable'
    },
      {
        id:21,
        image:'/image/Children608.png',
        title:'  children coute',
        description:'A crunchy, sweet root vegetable rich in vitamin A — great for snacks, salads, and cooking.',
         rating:3.9,
        price:'$6.8',
         sellPrice:'$12',
        isFeature:false,
       catagory:'children'
    },
     {
        id:22,
        image:'/image/childrengame.png',
        title:' video game',
        description:'children paly video game',
         rating:3.9,
        price:'$6.8',
         sellPrice:'$12',
        isFeature:false,
       catagory:'children'
    },
]
