import axios from 'axios'
import { HttpClient } from './BaseHttpClient'
export const getStaticPathApi = {
    async getSubAllProductIds() {
        return (await HttpClient.get<string[]>('getStaticPath/allSubProductIds')).data as string[]
    },
    async getAllRoute() {
        return (await HttpClient.get<{
            "category_route": string,
            "style_route": string,
            "sub_style_route": string
        }[]>('getStaticPath/allCategoryRoute')).data
    },
    async getOnlyCategoryRoute() {
        return (await HttpClient.get<{
            "category_route": string
        }[]>('getStaticPath/onlyCategoryRoute')).data
    }
}