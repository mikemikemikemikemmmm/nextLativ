import { ICategory, IProduct, IActivity } from "../types"

export const products: IProduct[] = [
    {
        product_id: '1',
        product_name: "可口可樂印花T恤",
        gender_id: "1",
        category_route: 'women',
        gender_name: "女",
        category_id: '1',
        sub_style_id: "1",
        price: 350,
        content: [
            {

            }
        ],
        subProducts: [
            {
                sub_product_id: '1',
                color_id: '1',
                color_name: '白色',
                sizes: [{
                    size_name: 'S', size_id: "1", size_is_available: true
                }, {
                    size_name: 'M', size_id: "2", size_is_available: true
                }, {
                    size_name: 'L', size_id: "3", size_is_available: true
                }, {
                    size_name: 'XL', size_id: "4", size_is_available: true
                }, {
                    size_name: '2L', size_id: "5", size_is_available: true
                },],
                single_color: true
            }
        ]
    },
    {
        product_id: '2',
        content: [
            {

            }
        ],
        category_route: 'women',
        product_name: "絲光棉船型領七分袖上衣",
        gender_id: "1",
        gender_name: "女",
        category_id: '1',
        sub_style_id: "2",
        price: 350,
        subProducts: [
            {
                sub_product_id: '2',
                color_id: '2',
                color_name: '黃色',
                sizes: [{
                    size_name: 'S', size_id: "1", size_is_available: true
                }, {
                    size_name: 'M', size_id: "2", size_is_available: true
                }, {
                    size_name: 'L', size_id: "3", size_is_available: true
                }, {
                    size_name: 'XL', size_id: "4", size_is_available: true
                }, {
                    size_name: '2L', size_id: "5", size_is_available: true
                },],
                single_color: true
            }
        ]
    }, {
        product_id: '3',
        content: [
            {

            }
        ],
        category_route: 'men',
        product_name: "男用上衣",
        gender_id: "2",
        gender_name: "男",
        category_id: '2',
        sub_style_id: "3",
        price: 350,
        subProducts: [
            {
                sub_product_id: '3',
                color_id: '2',
                color_name: '黃色',
                sizes: [{
                    size_name: 'S', size_id: "1", size_is_available: true
                }, {
                    size_name: 'M', size_id: "2", size_is_available: true
                }, {
                    size_name: 'L', size_id: "3", size_is_available: true
                }, {
                    size_name: 'XL', size_id: "4", size_is_available: true
                }, {
                    size_name: '2L', size_id: "5", size_is_available: true
                },],
                single_color: true
            }
        ]
    },
]
export const gender = [{
    gender_id: '1',
    gender_name: '女',
}, {
    gender_id: '2',
    gender_name: '男',
}]
export const category: ICategory[] = [
    {
        category_id: '1',
        category_name: 'women',
        category_route: 'women',
        product_ids: ['2'],
        styles: [{
            style_id: '1',
            style_name: '上衣類',
            style_route: 'tops',
            subStyles: [
                {
                    sub_style_id: '1',
                    sub_style_route: 'short_graphic_tee',
                    sub_style_name: '聯名印花短T',
                    series: [
                        {
                            series_name: '可口可樂',
                            series_id: '1',
                            product_ids: ['1']
                        }
                    ]
                }, {
                    sub_style_id: '2',
                    sub_style_route: 'long_graphic_tee',
                    sub_style_name: '聯名印花長T',
                    series: [
                        {
                            series_name: '可口可樂',
                            series_id: '1',
                            product_ids: ['1']
                        },
                        {
                            series_name: '迪士尼',
                            series_id: '2',
                            product_ids: ['2']
                        }
                    ]
                }
            ]
        }]
    }, {
        category_id: '2',
        category_name: 'men',
        category_route: 'men',
        product_ids: ['3'],
        // ----------------------------
        styles: [{
            style_id: '1',
            style_name: '上衣類',
            style_route: 'tops',
            subStyles: [
                {
                    sub_style_id: '3',
                    sub_style_route: 'short_graphic_tee',
                    sub_style_name: '聯名印花短T',
                    series: [
                        {
                            series_name: '可口可樂',
                            series_id: '1',
                            product_ids: ['1']
                        }
                    ]
                }, {
                    sub_style_id: '4',
                    sub_style_route: 'long_graphic_tee',
                    sub_style_name: '聯名印花長T',
                    series: [
                        {
                            series_name: '可口可樂',
                            series_id: '1',
                            product_ids: ['1']
                        },
                        {
                            series_name: '迪士尼',
                            series_id: '2',
                            product_ids: ['2']
                        }
                    ]
                }
            ]
        }]
    }
]

export const activities: IActivity[] = [
    {
        activity_id: '2', activity_route: '1994456', activity_name: "任選兩件68折起", categorysData: [{ category_id: '1', productsData: [{ product_id: '1', activity_price: 199 }] }]
    },
]
export const fakeRoute = {
    'getCategorysByRoute': (categoryRoute) => {
        return category.find(category => category.category_route === categoryRoute)
    },
    'getCategorysById': (categoryId) => {
        return category.find(category => category.category_id === categoryId)
    },
    'getProducts': (productIds: string[]) => productIds.map(productId => products.find(product => product.product_id === productId)),
    // 'getSeries': (categoryId, styleId, subStyleId) => { },,
    'getActivities': () => activities,
    'getActivityRoutes': () => activities.map(activity => activity.activity_route),
    'getProductIds': () => products.map(product => product.product_id),
    'getProductById': (_productId) => products.find(product => product.product_id === _productId)
}
export const fakePromise = (route: keyof typeof fakeRoute, param?) => {
    return new Promise((resolve, reject) => {
        return resolve(fakeRoute[route](param))
    })
}
export const categoryPath = ['women', 'men']