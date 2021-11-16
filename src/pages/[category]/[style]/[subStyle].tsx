import GenderAside from "@components/categoryAside"
import { getStaticPathApi } from "@api/getStaticPaths"
import { getStaticPropApi } from "@api/getStaticProps"
import { TAside } from "@customTypes/aside"
import { ISeries } from "@customTypes/series"
import { useCustomDispatch } from 'hooks'
import { useRouter } from "next/router"
import CardList from "@components/cardList"
import { useEffect } from "react"
interface IProps {
    asideData: TAside,
    seriesData: ISeries[]
}
export default function GenderSubCategory(props: IProps) {
    const { asideData, seriesData } = props
    const router = useRouter()
    const categoryRoute = router.query.category as string
    const dispatch = useCustomDispatch()
    useEffect(() => { dispatch({ type: 'CHANGE_CATEGORYROUTE', value: categoryRoute }) }, [categoryRoute,dispatch])
    return (
        <div className='flex'>
            <GenderAside asideData={asideData} categoryRoute={categoryRoute} />
            <CardList seriesData={seriesData} isShowSeriesName={true} />
        </div>
    )
}
export async function getStaticPaths() {
    const allCategorys = await getStaticPathApi.getAllRoute()
    const filteredAllcategorys = allCategorys
        .filter(categoryData => categoryData.style_route !== null) // filter category index
        .map(categoryData => {
            return {
                params: {
                    category: categoryData.category_route,
                    style: categoryData.style_route,
                    subStyle: categoryData.sub_style_route
                }
            }
        })
    /**
     * example
     * [{
         "category_route": "women",
         "style_route": "tops",
         "sub_style_route": "short_graphic_tee"
     },
     {
         "category_route": "women",
         "style_route": "tops",
         "sub_style_route": "long"
     }]
     */
    return {
        paths: filteredAllcategorys,
        fallback: false
    };
}
export const getStaticProps = async ({ params }) => {
    const { category, style, subStyle } = params
    const asideData = await getStaticPropApi.getAsideByCategoryRoute(category)
    const seriesData = await getStaticPropApi.getSeriesBySubStyleRoute(category, style, subStyle)
    if (!seriesData || !asideData) {
        return { notFound: true }
    }
    return {
        props: {
            asideData,
            seriesData
        },
    }
}