import Link from 'next/link'
export default function Navigation() {
    const fakeCategory = [{
        category_id: '1', category_name: 'women', category_route: 'women'
    }, {
        category_id: '2', category_name: 'men', category_route: 'men'
    },]
    return (
        <nav className="p-3">
            <div className='text-right'><input type="text" name="" id="" placeholder='SEARCH' /></div>
            <div className='flex'>
                <h1 className='mr-5 text-4xl text-primary'>Lativ</h1>
                <ul className='flex'>
                    {fakeCategory.map(category => <li key={category.category_id} className="mx-5 text-primary-light">
                        <Link href={`/${category.category_route}`}>
                            <a>{category.category_name}</a>
                        </Link>
                    </li>)}

                </ul>
                <ul className='ml-auto flex'>
                    <li className="mx-3">訂閱電子報</li>
                    <li className="mx-3">登入/註冊</li>
                    <li className="mx-3">個商品</li>
                </ul>
            </div>
        </nav>
    )
}