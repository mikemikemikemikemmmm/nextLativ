
import { baseURL } from "const";
import { ImageLoaderProps } from "next/image";
type TImageLoaderParams =
    { use: 'color', colorId: number } |
    { use: 'subProduct', subProductId: number } |
    { use: 'content', productId: number, imageNum: number } |
    { use: 'commonContent', imageNum: number } |
    { use: 'productCard', productId: number }
export const imageLoader = (paramsObj: TImageLoaderParams) => {
    return (props:ImageLoaderProps) => {
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