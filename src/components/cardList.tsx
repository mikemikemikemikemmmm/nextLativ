import Link from 'next/link'
import ProductCard from '@components/productCard'
import { ISeries } from '@customTypes/series'

export default function CardList(props: {
    seriesData: ISeries[], isShowSeriesName: boolean
}) {
    const { seriesData, isShowSeriesName = false } = props
    if (isShowSeriesName) {
        return (
            <section className='w-full'>
                {seriesData.map(series =>
                    <div key={series.series_id} className="my-2 w-full">
                        <div className="my-1">{series.series_name}</div>
                        <div className="w-full">
                            {series.productCards.map(productCardData =>
                                <div className="inline-block w-1/4" key={productCardData.product_id}>
                                    <ProductCard key={productCardData.product_id} productCardData={productCardData} isShowColors={true} /></div>)}
                        </div>
                    </div>)}
            </section>
        )
    }
    const allCards = seriesData.map(series => series.productCards.map(card => card)).flat(1)
    return (
        <section className='w-full'>
            {
                allCards.map(cardData =>
                    <div className="w-1/4 inline-block" key={cardData.product_id}>
                        <ProductCard productCardData={cardData} isShowColors={false} />
                    </div>)
            }
        </section >
    )

}