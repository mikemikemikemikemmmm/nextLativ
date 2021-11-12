import { IActivity_AfterGetProductData, IActivity } from "@types/";
import { category, fakePromise } from "fakeData";
import { baseURL } from "const";
export const flatCategory = () => {
    return category.map(category => category.styles.map(style => style.subStyles.map(subStyle => {
        return {
            categoryRoute: category.category_route, styleRoute: style.style_route, subStyleRoute: subStyle.sub_style_route
        }
    }))).flat(3)
}
export const getProductDataArrayByIdArray = async (ids: string[]) => {
    const promiseArray = ids.map(id => fakePromise('getProductById', id))
    return Promise.all(promiseArray)
}
export const modifyIActivityToIActivity_AfterGetProductData = (activity: IActivity): IActivity_AfterGetProductData => {
    let activity_AfterGetProductData = activity
    activity_AfterGetProductData.cat
}
type TImageLoaderParams =
    { use: 'color', colorId: number } |
    { use: 'subProduct', subProductId: number } |
    { use: 'content', productId: number, imageNum: number } |
    { use: 'commonContent', imageNum: number } |
    { use: 'productCard', productId: number }
export const imageLoader = (paramsObj: TImageLoaderParams) => {
    return ({ src, width, quality }) => {
        switch (paramsObj.use) {
            case 'content':
                return `${baseURL}image/content/${paramsObj.productId}/${paramsObj.imageNum}.jpg`
            case 'commonContent':
                return `${baseURL}image/content/common/${paramsObj.imageNum}.jpg`
            case 'color':
                return `${baseURL}image/color/${paramsObj.colorId}.jpg`
            case 'productCard':
                return `${baseURL}image/content/${paramsObj.productId}/1.jpg`
            case 'subProduct':
                return `${baseURL}image/subProduct/${paramsObj.subProductId}.jpg`
        }
    }
}
export const isNotFound=(data:any[])=>{
    if(!data){

    }
}