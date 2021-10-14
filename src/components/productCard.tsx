import { products } from 'fakeData'
import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from '../types'
export default function ProductCard(props: { productData: IProduct, isShowColors?: boolean }) {
    const { product_name, price, activity_price, gender_name, product_id, subProducts } = props.productData
    const { isShowColors } = props
    return (
        <div className='text-center m-3'>
            <div>
                <Link href={`/Detail/${product_id}`}>
                    <a >
                        <div className="p-10 bg-primary" />

                    </a>
                    {/* <Image src={`/${product_id}.jpg`} alt={name} /> */}
                </Link>
            </div>

            <div className='my-1'>{product_name}-{gender_name}</div>
            {isShowColors &&
                <div className="my-1">
                    {subProducts.map(subProduct => <button key={subProduct.sub_product_id}>{subProduct.color_name}</button>)}
                </div>}
            <div className='my-1'>
                {activity_price ?
                    <>
                        <del>NT${price}</del> 活動價 NT${activity_price}
                    </>
                    :
                    <>
                        NT${price}
                    </>
                }
            </div>
        </div>
    )
}