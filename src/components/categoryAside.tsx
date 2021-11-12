import Link from 'next/link'
import { TAside } from 'customTypes/aside'
import { asideWidth } from 'const'
export default function CategoryAside(props: { asideData: TAside, categoryRoute: string }) {
    const { asideData, categoryRoute } = props
    return (
        <aside style={{ width: asideWidth }} className='px-4'>
            {
                asideData.map(style => (
                    <ul className='text-xm select-none' key={style.style_route}>
                        <div className='text-gray-800 py-1 '>{style.style_name}</div>
                        {style.subStyles.map(subStyle =>
                            <li className='hover:text-primary text-gray-600 py-1'
                                key={subStyle.sub_style_route}>
                                <Link href={`/${categoryRoute}/${style.style_route}/${subStyle.sub_style_route}`}>
                                    <a>&gt;{subStyle.sub_style_name}</a>
                                </Link>
                            </li>)}
                    </ul>))
            }
        </aside>
    )
}