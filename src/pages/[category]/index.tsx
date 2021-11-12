
import { useRouter } from 'next/router'
import CategoryAside from "@components/categoryAside"
import { getStaticPathApi } from '@api/getStaticPaths'
import { getStaticPropApi } from '@api/getStaticProps'
import { ISeries } from '@customTypes/series'
import { TAside } from '@customTypes/aside'
import { useCustomDispatch } from 'hooks'
import CardList from '@components/cardList'
interface IProps { 
    seriesData: ISeries[], asideData: TAside
}
export default function Category(props: IProps) {
    const { seriesData, asideData } = props
    const router = useRouter()
    const categoryRoute = router.query.category as string
    const dispatch = useCustomDispatch()
    dispatch({ type: 'CHANGE_CATEGORYROUTE', value: categoryRoute })
    return (
        <div className='flex'>
            <CategoryAside asideData={asideData} categoryRoute={categoryRoute} />
            <CardList seriesData={seriesData} isShowSeriesName={false} />
        </div>
    )
}
export async function getStaticPaths() {
    const allCategorys = await getStaticPathApi.getOnlyCategoryRoute()
    const paths = allCategorys.map(categoryRoute => {
        return {
            params: { category: categoryRoute.category_route }
        }
    })
    return {
        paths,
        fallback: false
    };
}
export const getStaticProps = async ({ params }) => {
    const asideData = await getStaticPropApi.getAsideByCategoryRoute(params.category)
    const seriesData = await getStaticPropApi.getSeriesByCategoryRoute(params.category)
    if (!seriesData || !asideData) {
        return { notFound: true }
    }
    return {
        props: {
            asideData, seriesData
        },
    }
}