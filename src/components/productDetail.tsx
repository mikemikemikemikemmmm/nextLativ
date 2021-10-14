import { IProduct } from "../types"
import Link from "next/link"
import { useState } from "react"

export default function ProductDetail(props: { productData: IProduct }) {
    const { gender_name, price, product_name, subProducts, content } = props.productData
    const [targetSubProduct, setTargetSubProduct] = useState(subProducts.filter(subProduct => subProduct.sizes.some(size => size.size_is_available))[0])
    const [targetSize, setTargetSize] = useState(targetSubProduct.sizes.filter(size => size.size_is_available)[0])
    const handleClickActivity = () => {

    }
    const handleClickAddToCart = () => {

    }
    const handleClickColor = () => {

    }
    const handleClickImage = () => {

    }
    const handleClickQty = () => {

    }
    const handleClickSize = () => {

    }
    return (
        <>
            <section>
                <button className='mr-5' onClick={() => handleClickImage()}>

                </button>
                <div>
                    <div className='flex'>
                        <div>{product_name}-{gender_name} ({targetSubProduct.color_name} - {targetSize.size_name})</div>
                        <div className='ml-auto'>
                            {/* <div>{activity && price}</div>
                            <div>{activity ? activity.price : price}</div>
                            <div>{activity ||
                                <Link>
                                    <a href="">
                                        {activity.name}
                                    </a>
                                </Link>}
                            </div> */}
                        </div>
                    </div>
                    <div>
                        ---------------------------------------
                    </div>
                    <div>
                        {subProducts.map(subProduct => (
                            <button
                                onClick={() => handleClickColor(subProduct.color_id)}
                                key={subProduct.color_id}>
                                {subProduct.color_name}
                            </button>))}
                    </div>
                    <div>
                        {targetSubProduct.sizes
                            .filter(size => size.size_is_available)
                            .map((size) => (<button
                                onClick={() => handleClickSize(size.size_id)}
                                key={size.size_id}>
                                {size.size_name}
                            </button>))}</div>
                    <div className='text-right'>
                        <div>評價</div>
                        <div>產品說明與尺寸表</div>
                        <div>收藏商品</div>
                    </div>
                    <div>---------------------------------------</div>
                    <div>
                        <div>數量
                            <button onClick={() => handleClickQty(-1)}>-</button>
                            <input type="number" name="" id="" />
                            <button onClick={() => handleClickQty(1)}>+</button>
                        </div>
                        <div onClick={() => handleClickAddToCart()}>加入購物車</div>
                    </div>
                    <div>
                        APP獨享！超取滿680免運費
                    </div>
                    <div>
                        ※不提供海外配送。
                    </div>
                </div>
            </section>
            <section>

            </section>
        </>
    )
}