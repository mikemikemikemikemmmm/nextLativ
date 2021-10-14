import Link from 'next/link'
import ProductCard from '@components/productCard'
import { IProduct, ISeries, ISeries_products } from '../types'

export default function SubStyleProducts(props: {
    series_products: ISeries_products[],sub_style_name:string
}) {
    const { sub_style_name, series_products } = props
    return (<>
        <div className='flex'>
            <div>{sub_style_name}</div>
            <div className='ml-auto'>
                <select name="" id="">
                    <option value="">全部顏色展開</option>
                    <option value="">依穿搭排列</option>
                </select>
            </div>
        </div>
        <div>
            {series_products.map(series => <div key={series.series_id} className="my-2">
                {series.series_name}
                {series.products.map(product => <ProductCard productData={product} />)}
            </div>)}
        </div>
    </>
    )
}