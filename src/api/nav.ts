import { HttpClient } from './BaseHttpClient'
export type TNavData ={ category_route: string, category_name: string }[]
export const getNavData = async () => {
    return (await HttpClient.get('/getNavData')).data as TNavData

}