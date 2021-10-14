import GenderAside from "@components/categoryAside";
import ProductDetail from "@components/productDetail";
import { ICategory, IProduct, IStyle, IActivity } from "../../types";
import { fakePromise } from "fakeData";
interface IProps {
    stylesData: IStyle[], productData: IProduct,activities:IActivity[]
}
export default function ProductDetailPage(props: IProps) {
    const { stylesData, productData,activities } = props
    const { category_route } = productData
    console.log(546546546, category_route)
    return (
        <main className='flex'>
            <GenderAside styles={stylesData} activities={activities} categoryRoute={category_route} />
            <ProductDetail productData={productData} />
        </main>
    )
}
export async function getStaticPaths() {
    const product_ids = await fakePromise('getProductIds') as string[]
    return {
        paths: product_ids.map(productId => {
            return {
                params: { productId }
            }
        }),
        fallback: true
    };

}
export async function getStaticProps({ params }) {
    const productData = await fakePromise('getProductById', params.productId) as IProduct
    const categoryData = await fakePromise('getCategorysById', productData.category_id) as ICategory
    const stylesData = categoryData.styles
    const activities = await fakePromise('getActivities')
    return {
        props: {
            productData, stylesData,activities
        },
    }

}