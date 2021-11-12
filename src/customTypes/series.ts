export type TProductDataListOriginalData ={
    product_name:   string;
    product_id:     number;
    sub_product_id: number;
    price:          number;
    activity_price: null;
    gender_name:    string;
    series_name:    string;
    series_id:      number;
    color_name:     string;
    color_id:       number;
}[]
export interface ISeries{
    series_name:String,
    series_id:number,
    productCards:IProductCard[]
}
export interface IProductCard {
    product_id:number,
    // sub_product_id:number,
    gender_name:string,
    price:number,
    activity_price?:number,
    product_name:string
    subProducts:IProductCard_subProduct[]
}
export interface IProductCard_subProduct{
    sub_product_id:number,
    color_id:number,
    color_name:string
}