import { TAside } from '@customTypes/aside'
import { ISeries } from '@customTypes/series'
import { IProductDetail } from '@customTypes/product'
import { HttpClient } from './BaseHttpClient'
export const getStaticPropApi = {
    getSubProductDetail:async (subProductId: string) => {
        return (await HttpClient.get<IProductDetail>(`/getStaticProps/detail/${subProductId}`)).data
    },
    getAsideByCategoryRoute: async(category_route: string) => {
        return (await HttpClient.get<TAside>(`/getStaticProps/asideByCategoryRoute/${category_route}`)).data
    },
    getSeriesBySubStyleRoute:async (category_route:string, style_route:string, sub_style_route:string) => {
        return (await HttpClient.get<ISeries[]>(`/getStaticProps/seriesByStyleRoute/${category_route}/${style_route}/${sub_style_route}`)).data
    },
    getSeriesByCategoryRoute:async (category_route:string) => {
        return (await HttpClient.get<ISeries[]>(`/getStaticProps/seriesByCategory/${category_route}`)).data
    }
}