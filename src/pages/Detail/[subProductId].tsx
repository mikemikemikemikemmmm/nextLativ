import GenderAside from "@components/categoryAside";
import SubProductDetail from "@components/productDetail";
import { getStaticPathApi } from "@api/getStaticPaths"
import { getStaticPropApi } from "@api/getStaticProps";
import { TAside } from "@customTypes/aside";
import { IProductDetail } from "@customTypes/product";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useCustomDispatch } from "hooks";
import { useState } from "react";
interface IProps {
    asideData: TAside, subProductDetailData: IProductDetail
}
export default function ProductDetailPage(props: IProps) {
    const { asideData, subProductDetailData } = props
    const { category_route } = subProductDetailData
    const dispatch = useCustomDispatch()
    dispatch({ type: 'CHANGE_CATEGORYROUTE', value: category_route })
    const router = useRouter()
    const paramSubProductId = router.query.subProductId as string
    // const [isShowLargeImage, setIsShowLargeImage] = useState<boolean>(false)
    return (
        <main className='flex'>
            {/* <EnlargeProductImage isShow={isShowLargeImage} /> */}
            <GenderAside asideData={asideData} categoryRoute={category_route} />
            <SubProductDetail subProductDetailData={subProductDetailData} paramSubProductId={paramSubProductId} />
        </main>
    )
}
export async function getStaticPaths() {
    const product_ids = await getStaticPathApi.getSubAllProductIds()
    const paths = product_ids.map(subProductId => {
        return {
            params: { subProductId: String(subProductId) }
        }
    })
    return {
        paths,
        fallback: false
    };

}
export async function getStaticProps({ params }) {
    const subProductDetailData = await getStaticPropApi.getSubProductDetail((params.subProductId as string))
    const asideData = await getStaticPropApi.getAsideByCategoryRoute(subProductDetailData.category_route)
    if (!subProductDetailData || !asideData) {
        console.log(12312321312,subProductDetailData)
        return { notFound: true }
    }
    return {
        props: {
            subProductDetailData, asideData
        },
    }

}