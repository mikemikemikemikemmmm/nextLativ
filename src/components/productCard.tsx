import { productCardImageHeight, productCardImageWidth, baseURL } from 'const'
import Image from 'next/image'
import Link from 'next/link'
import { imageLoader } from 'utils'
import { IProductCard, ISeries } from '../customTypes/series'
export default function ProductCard(props: { productCardData: IProductCard, isShowColors: boolean }) {
    const { isShowColors, productCardData } = props
    const { product_name, price, activity_price, gender_name, subProducts } = productCardData
    const firstSubProductId = subProducts[0].sub_product_id
    return (
        <div className='text-center m-3'>
            <div className="flex justify-center">
                <Link href={`/Detail/${firstSubProductId}`}>
                    <a>
                        <Image
                            alt={productCardData.product_name}
                            loader={imageLoader({
                                use: 'productCard',
                                productId: productCardData.product_id
                            })}
                            src={`/${firstSubProductId}.jpg`}
                            height={productCardImageHeight}
                            width={productCardImageWidth}
                        />
                    </a>
                </Link></div>
            <div className='my-1 text-center text-xs'>{product_name}-{gender_name}</div>
            <div className="my-1 ">
                {isShowColors && <div className='flex justify-center'>
                    {subProducts.map(subProduct =>
                        <div className='m-1 ' key={subProduct.sub_product_id}>
                            <Link
                                key={subProduct.color_id}
                                href={`/Detail/${subProduct.sub_product_id}`}
                            >
                                <a>
                                    <Image
                                        alt={subProduct.color_name}
                                        loader={imageLoader(
                                            {
                                                use: 'color',
                                                colorId: subProduct.color_id
                                            })} height={16} width={16} src={String(subProduct.color_id)} />
                                </a>
                            </Link>
                        </div>)}
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
        </div>
    )
}