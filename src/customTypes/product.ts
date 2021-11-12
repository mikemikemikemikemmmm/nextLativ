// export interface IProduct {
//     product_id: string,
//     product_name: string,
//     gender_id: string,
//     gender_name: string,
//     category_id: string,
//     category_route: string,
//     sub_style_id: string,
//     activity_price?: number
//     price: number,
//     content: any[],
//     subProducts: ISubProduct[]
// }
// export interface ISubProduct {
//     sub_product_id: string,
//     color_id: string,
//     color_name: string,
//     sizes: ISize[]
//     single_color: boolean
// }
// export interface ISize {
//     size_name: string,
//     size_id: string,
//     size_is_available: boolean
// // }
// export interface IProduct {
//         product_id:     number;
//         product_name:   string;
//         price:          number;
//         gender_id:      number;
//         series_id:      number;
//         color_id:       number;
//         activity_id:    null;
//         activity_price: null;
//         sub_product_id: number;
//         category_id:    number;
//         stock_s:        number;
//         stock_m:        number;
//         stock_l:        number;
//         color_name:     string;
//         single_color:   boolean;
// }
export interface IOringinalDetailData {
        product_id: number;
        product_name: string;
        price: number;
        color_id: number;
        activity_id: null;
        activity_price: null;
        sub_product_id: number;
        stock_s: number;
        stock_m: number;
        stock_l: number;
        color_name: string;
        single_color: boolean;
        category_route: string;
        gender_name: string
} 
export interface IProductDetail {
        content_num:number;
        common_content_num:number;
        product_name: string,
        product_id: number,
        category_route: string,
        gender_name: string
        subProducts: IProductDetail_subProuct[]
}
export interface IProductDetail_subProuct {
        sub_product_id: number,
        price: number,
        color_id: number
        color_name: string;
        single_color: boolean;
        sizes: ISize[]
}
export interface ISize {
        sizeName: string,
        isAvailable: boolean
}