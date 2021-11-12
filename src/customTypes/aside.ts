// export interface IAside{
//     category_name:string,
//     category_route:string
//     styles:IStyle[]
// }
export type TAside = IStyle[]
export interface IStyle {
    style_name: string,
    style_route: string,
    subStyles: ISubStyle[]
}
export interface ISubStyle {
    sub_style_route: string,
    sub_style_name: string,
    category_id:number
}
export type TOringinalAsideData = {
    style_name:      string;
    style_route:     string;
    sub_style_name:  string;
    sub_style_route: string;
    category_id:number}[]