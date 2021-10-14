import { IActivity, IActivity_AfterGetProductData } from "../../types";
import { fakePromise } from "fakeData";
import { useRouter } from "next/router";
import { useState } from "react";
interface IProps {
    activitiesData: IActivity_AfterGetProductData[]
}
export default function ProductDetailPage(props: IProps) {
    const { activitiesData } = props
    const router = useRouter()
    const [nowActivityId, setNowActivityId] = useState<IActivity_AfterGetProductData>(activitiesData.)
    const [state, setstate] = useState()
    const handleClickActivity = (activityId: string) => {

    }
    const handleClickCheck = () => {

    }
    return (
        <div className="">
            <div>
                <div className="flex">
                    {activitiesData.map(activity => (
                        <button
                            key={activity.activity_id}
                            className={ }
                            onClick={() => handleClickActivity(activity.activity_id)}>
                            {activity.activity_name}
                        </button>))}
                </div>
                <div className="">
                    距離結束
                </div>
            </div>
            <div>
                <div className='flex'>
                    <span></span>
                    <button className='ml-auto' onClick={() => handleClickCheck()}>前往結帳</button>
                </div>
                <div>
                    <button></button>
                    <div></div>
                    <button></button>
                </div>
            </div>
            <div></div>
        </div>
    )
}
export async function getStaticPaths() {
    const activityRoutes = await fakePromise('getActivityRoutes') as string[]
    return {
        paths: activityRoutes.map(activityRoute => {
            return {
                params: { activityRoute }
            }
        }),
        fallback: true
    };

}
export async function getStaticProps({ params }) {
    const { activityRoute } = params
    const activitiesData = await fakePromise('getActivities') as IActivity[]
    const targetActivity = activitiesData.find(a => a.activity_route === activityRoute)
    targetActivity.categorysData = {}

    targetActivity.categorysData.forEach(category => {
        categoryMap[category.category_id] = category.productsData
    })
    // const productIds = targetActivity.productsData.map(p => p.product_id)
    // const productsData = await getProductDataArrayByIdArray(productIds)
    return {
        props: {
            activitiesData
        },
    }

}
