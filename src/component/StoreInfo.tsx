export type StoreProps={
    id:number,
    image:string,
    salarRating:string
    salarDescription:string,
    setColor:string;
}
export const StoreInfoArray:StoreProps[]=[
    {
        id:1,
        image:"/image/icon_shop.png",
        salarRating:"10.5k",
        salarDescription:"Sallers active our site",
        setColor:'bg-[#FAFAFA]'
    },
     {
        id:2,
        image:"/image/Services.png",
        salarRating:"10.5k",
        salarDescription:"Mopnthly Produduct Sale",
        setColor:'bg-[#DB4444]'
    },
     {
        id:3,
        image:"/image/Services2.png",
        salarRating:"45.5k",
        salarDescription:"Customer active in our site",
        setColor:'bg-[#FAFAFA]'
    },
     {
        id:4,
        image:"/image/Services3.png",
        salarRating:"25k",
        salarDescription:"Anual gross sale in our site",
        setColor:'bg-[#FAFAFA]'
    }
]