import GenderAside from "@components/categoryAside"
import SubStyleProducts from "@components/SubStyleProducts"
import {  fakePromise } from "fakeData"
import { flatCategory, getProductDataArrayByIdArray } from "utils"
import { ICategory, IStyle, ISubStyle, ISeries_products, ISeries,IActivity ,IProduct} from "@types/"
interface IProps {
    stylesData: IStyle[],
    series_products: ISeries_products[],
    sub_style_name: string,
    category_route: string
    activities: IActivity[]
}
export default function GenderSubCategory(props: IProps) {
    const { stylesData, series_products, sub_style_name, category_route, activities } = props
    return (
        <div className='flex'>
            <GenderAside styles={stylesData} categoryRoute={category_route} activities={activities} />
            <SubStyleProducts series_products={series_products} sub_style_name={sub_style_name} />
        </div>
    )
}
export async function getStaticPaths() {
    const flatedCategoryRoutes = flatCategory()
    return {
        paths: flatedCategoryRoutes.map(flatedCategoryRoute => ({
            params: {
                category: flatedCategoryRoute.categoryRoute,
                style: flatedCategoryRoute.styleRoute,
                subStyle: flatedCategoryRoute.subStyleRoute,
            }
        })),
        fallback: true
    };
}
export const getStaticProps = async ({ params }) => {
    const categoryData = await fakePromise('getCategorysByRoute', params.category) as ICategory
    const stylesData = categoryData.styles
    const targetStyle: IStyle = stylesData.find(style => style.style_route === params.style)
    const targetSubStyle: ISubStyle = targetStyle.subStyles.find(subStyle => subStyle.sub_style_route === params.subStyle)
    const targetSeries: ISeries[] = targetSubStyle.series
    const productIdArray = []
    const productIdMap = {}
    targetSeries.forEach(series => series.product_ids.forEach(id => {
        productIdMap[id] = productIdArray.push(id) - 1
    }))
    const productsData: IProduct[] = await getProductDataArrayByIdArray(productIdArray)
    const series_products: ISeries_products = targetSeries.map(series => {
        const _productsData = series.product_ids.map(id => productsData[productIdMap[id]])
        return {
            ...series,
            products: _productsData
        }
    })
    const activities = await fakePromise('getActivities')
    return {
        props: {
            activities,
            category_route: categoryData.category_route,
            stylesData,
            series_products,
            sub_style_name: targetSubStyle.sub_style_name
        },
    }
}