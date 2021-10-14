export interface IProduct {
    product_id: string,
    product_name: string,
    gender_id: string,
    gender_name: string,
    category_id: string,
    category_route: string,
    sub_style_id: string,
    activity_price?: number
    price: number,
    content: any[],
    subProducts: ISubProduct[]
}
export interface ISubProduct {
    sub_product_id: string,
    color_id: string,
    color_name: string,
    sizes: ISize[]
    single_color: boolean
}
export interface ICategory {
    category_id: string,
    category_name: string,
    category_route: string,
    product_ids: string[],
    styles: IStyle[]
}
export interface IStyle {
    style_id: string,
    style_name: string,
    style_route: string,
    subStyles: ISubStyle[]
}
export interface ISubStyle {
    sub_style_id: string,
    sub_style_route: string,
    sub_style_name: string,
    series: ISeries[]
}
export interface ISeries {
    series_name: string,
    series_id: string,
    product_ids: string[]
}
export interface ISeries_products {
    series_name: string,
    series_id: string,
    products: IProduct[]
}
export interface ISize {
    size_name: string,
    size_id: string,
    size_is_available: boolean
}
interface IActivity_diffPrice {
    activity_id: string;
    activity_route: string
    activity_name: string;
    productsData: {
        product_id: string;
        activity_price: number;
    }[];
}

export interface IActivity {
    activity_id: string;
    activity_route: string
    activity_name: string;
        productsData: { product_id: string, activity_price: number }[] 
}
export interface IActivity_AfterGetProductData {
    activity_id: string;
    activity_route: string
    activity_name: string;
    categorysData: {
        category_id: string
        productsData: IProduct[]
    }[];
}