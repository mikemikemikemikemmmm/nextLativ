import { IActivity_AfterGetProductData,IActivity } from "@types/";
import { category, fakePromise } from "fakeData";
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