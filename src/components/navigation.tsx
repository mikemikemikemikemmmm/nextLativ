import { asideWidth } from 'const'
import { useCustomDispatch, useCustomSelector } from 'hooks'
import Link from 'next/link'
import { TNavData } from '../api/nav'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
export const navColor = {
    lihovered: "#F0EDE5"
}
export default function Navigation(props: { navData: TNavData }) {
    const nowRouteParams = useCustomSelector('nowCategoryRoute')
    const router = useRouter()
    const dispatch = useCustomDispatch()
    const isNavActived = router.query.subProductId || router.query.category
    if (!isNavActived && nowRouteParams !== '') {
        dispatch({ type: 'CHANGE_CATEGORYROUTE', value: '' })
    }
    if (!props.navData || props.navData.length === 0) {
        return null
    }
    return (
        <nav className="p-3">
            {/* <div className='text-right'><input type="text" name="" id="" placeholder='SEARCH' /></div> */}
            <div className='flex'>

                <h1 className=' text-4xl ml-4 text-primary' style={{ width: asideWidth }}>
                    <Link href={`./`}>
                        <a>Lativ</a>
                    </Link>
                </h1>
                <ul className='flex items-end text-xl'>
                    {props.navData.map(category =>
                        <li
                            key={category.category_route}
                            className={`mx-4 px-5 py-1 text-center text-gray-500 hover:text-primary 
                            ${nowRouteParams === category.category_route ? 'bg-nav-lihovered text-primary' : 'bg-transparent'} `}>
                            <Link href={`/${category.category_route}`}>
                                <a>{category.category_name}</a>
                            </Link>
                        </li>)}

                </ul>
                {/* <ul className='ml-auto flex items-end'>
                    <li className="mx-3">訂閱電子報</li>
                    <li className="mx-3">登入/註冊</li>
                    <li className="mx-3">個商品</li>
                </ul> */}
            </div>
        </nav>
    )
}