import { IProductDetail, IProductDetail_subProuct, ISize } from "../customTypes/product"
import { useState } from "react"
import Image from 'next/image'
import { ChangeEvent } from "react"
import { baseURL, colorImageHeight, colorImageWideth, productDetailheight, productDetailWideth } from "const"
import { imageLoader } from "utils"
export default function ProductDetail(props: { subProductDetailData: IProductDetail, paramSubProductId: string }) {
    console.log('detail render')
    const { subProductDetailData, paramSubProductId } = props
    const { gender_name, product_name, subProducts } = subProductDetailData
    const [targetSubProduct, setTargetSubProduct] = useState<IProductDetail_subProuct>(
        (subProducts.find(subProduct =>
            String(subProduct.sub_product_id) === paramSubProductId)) as IProductDetail_subProuct
    )
    const [targetSize, setTargetSize] = useState<ISize | undefined>(
        targetSubProduct.sizes.find(size => size.isAvailable)
    )
    const [nowHoverSubProduct, setNowHoverSubProduct] = useState<IProductDetail_subProuct | undefined>(undefined)
    const [qty, setQty] = useState<number>(1)
    const handleClickAddToCart = () => {

    }
    const handleClickColor = (_subProductId: number) => {
        const clickedSubProduct = subProducts.find(subProduct => subProduct.sub_product_id === _subProductId) as IProductDetail_subProuct
        const findAvailableSize = clickedSubProduct.sizes.find(size => size.isAvailable)
        if (targetSubProduct === clickedSubProduct || !findAvailableSize) {
            return
        }
        if (!targetSize) {
            setTargetSubProduct(clickedSubProduct)
            return
        }
        const nowSizeName = targetSize.sizeName
        const sameSize = clickedSubProduct.sizes.find(size => size.sizeName === nowSizeName)
        if (!sameSize || !sameSize.isAvailable) {
            setTargetSize(undefined)
        }
        else {
            setTargetSize(sameSize)
        }
        setTargetSubProduct(clickedSubProduct)
    }
    const handleClickImage = () => {

    }
    const handleClickQty = (num: number) => {
        const result = qty + num
        if (result < 0 || result > 99) {
            return
        }
        setQty(result)
    }
    const handleClickSize = (sizeName: string) => {
        const clickedSize = targetSubProduct.sizes.find(_size => _size.sizeName === sizeName)
        if (clickedSize === targetSize) {
            return
        }
        setTargetSize(clickedSize)
    }
    const handleChangeQty = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        const num = Number(value)
        if (!Number.isInteger(num) || num < 0 || num > 99) {
            setQty(0)
            return
        }
        setQty(num)
    }
    const handleMoveInColor = (subProductId: number) => {
        if (subProductId === targetSubProduct.sub_product_id) {
            return
        }
        setNowHoverSubProduct(subProductDetailData.subProducts.find(p => p.sub_product_id === subProductId))
    }
    const handleMoveOutColor = (subProductId: number) => {
        if (subProductId === targetSubProduct.sub_product_id) {
            return
        }
        setNowHoverSubProduct(undefined)
    }
    return (
        <section>
            <section>
                <div className="flex">
                    <button className='mr-5' onClick={() => handleClickImage()}>
                        <Image
                            alt={(nowHoverSubProduct || targetSubProduct).color_name}
                            loader={imageLoader({
                                use: 'subProduct',
                                subProductId: (nowHoverSubProduct || targetSubProduct).sub_product_id
                            })}
                            src={String(targetSubProduct.sub_product_id)}
                            height={productDetailheight}
                            width={productDetailWideth}
                        />
                        O
                    </button>
                    <div className=''>
                        <div className='flex mb-8'>
                            <div>{product_name}-{gender_name} ({targetSubProduct.color_name} - {targetSize ? targetSize.sizeName : ''})</div>
                            <div className='ml-auto text-red-500'>
                                <div className=''>NT$</div>
                                <div className="text-5xl">
                                    {targetSubProduct.price}</div>
                            </div>
                        </div>
                        <div className='w-full h-px bg-gray-200 mb-4'>
                        </div>
                        <div className='mb-4'>
                            {subProducts.map(subProduct => (
                                <button
                                    className={`border inline-flex items-center justify-center mr-2
                                    ${targetSubProduct.color_id === subProduct.color_id ? 'border-black' : 'border-white'}`}
                                    onClick={() => handleClickColor(subProduct.sub_product_id)}
                                    onMouseMove={() => handleMoveInColor(subProduct.sub_product_id)}
                                    onMouseOut={() => handleMoveOutColor(subProduct.sub_product_id)}
                                    key={subProduct.color_id}
                                    title={subProduct.color_name}>
                                    <div className='w-6 h-6 items-center justify-center flex'>
                                        <Image
                                            alt={targetSubProduct.color_name}
                                            loader={imageLoader({ use: 'color', colorId: subProduct.color_id })}
                                            src={String(subProduct.color_id)}
                                            height={colorImageHeight}
                                            width={colorImageWideth}
                                        />
                                    </div>

                                </button>))}
                        </div>
                        <div className='mb-2 text-xs'>
                            {(nowHoverSubProduct || targetSubProduct).sizes
                                .filter(size => size.isAvailable)
                                .map((size) => (
                                    <button
                                        className={`py-1 px-4 mr-2 bg-gray-100 border border-black ${targetSize === size ? 'border-opacity-100' : 'border-opacity-0'}`}
                                        onClick={() => handleClickSize(size.sizeName)}
                                        key={size.sizeName + targetSubProduct.sub_product_id}>
                                        {size.sizeName}
                                    </button>
                                ))}</div>
                        <div className='w-full h-px bg-gray-200 mb-4'>
                        </div>
                        <div className='flex items-center'>
                            <div className='mr-4'>
                                <span className='mr-2'>數量</span>
                                <button className='px-1 h-7 border-2 border-solid bg-gray-100 border-gray-200 text-gray-400' onClick={() => handleClickQty(-1)}>-</button>
                                <input className='h-7 w-7 border-t-2 border-solid border-b-2 border-gray-200 text-center' type="text" value={qty} onChange={e => handleChangeQty(e)} />
                                <button className='px-1 h-7 border-2 border-solid bg-gray-100 border-gray-200 text-gray-400' onClick={() => handleClickQty(1)}>+</button>
                            </div>
                            <button className='py-2 px-8 text-white bg-primary rounded' onClick={() => handleClickAddToCart()}>加入購物車</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                {
                    Array(subProductDetailData.content_num).fill(0).map((num, index) => (
                        <div key={index} className="my-2 text-center">
                            <Image
                                alt={'內容'}
                                loader={imageLoader({
                                    use: 'content',
                                    productId: subProductDetailData.product_id,
                                    imageNum: index + 1
                                })}
                                src={String(index + 1)}
                                height={910}
                                width={760}
                            />
                        </div>
                    )
                    )}
                {
                    Array(subProductDetailData.common_content_num).fill(0).map((num, index) => (
                        <div key={index} className="my-2 text-center">
                            <Image
                                alt={'內容'}
                                loader={imageLoader({ use: 'commonContent', imageNum: index + 1 })}
                                src={String(index + 1)}
                                height={910}
                                width={760}
                            />
                        </div>
                    )
                    )}
            </section>
        </section>
    )
}