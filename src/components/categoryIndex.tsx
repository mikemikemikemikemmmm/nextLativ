import ProductCard from '@components/productCard'
import { IProduct } from '../types'

export default function CategoryIndex(props: {
    category_route?: string,
    productsData: IProduct[],
}) {
    const { productsData, category_route } = props
    return (<>
        <div>
            
        </div>
        <div>
            {productsData.map(productData => (<ProductCard productData={productData} />))}
        </div>
    </>)

}