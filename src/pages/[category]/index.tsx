
import { useRouter } from 'next/router'
import CategoryAside from "@components/categoryAside"
import { IActivity, ICategory, IProduct, IStyle } from "@types/index"
import { categoryPath, fakePromise } from "fakeData"
import CategoryIndex from "@components/categoryIndex"
interface IProps {
    stylesData: IStyle[],
    productsData: IProduct[],
    activities: IActivity[]
}
export default function Category(props: IProps) {
    const { stylesData, productsData, activities } = props
    const router = useRouter()
    const categoryRoute = router.query.category as string
    return (
        <div className='flex'>
            <CategoryAside styles={stylesData} categoryRoute={categoryRoute} activities={activities} />
            <CategoryIndex category_route={categoryRoute} productsData={productsData} />
        </div>
    )
}
export async function getStaticPaths() {
    return {
        paths: categoryPath.map(categoryRoute => {
            return {
                params: { category: categoryRoute }
            }
        }),
        fallback: true
    };
}
export const getStaticProps = async ({ params }) => {
    const categoryData = await fakePromise('getCategorysByRoute', params.category) as ICategory
    const stylesData = categoryData.styles
    const productsData = await fakePromise('getProducts', categoryData.product_ids)
    const activities = await fakePromise('getActivities')

    return {
        props: {
            stylesData, productsData, activities
        },
    }
}