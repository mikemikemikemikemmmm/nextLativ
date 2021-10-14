import Link from 'next/link'
import { IStyle, IActivity } from '../types'

export default function CategoryAside(props: { styles: IStyle[], categoryRoute: string, activities: IActivity[] }) {
    const { styles, categoryRoute, activities } = props
    return (
        <aside>
            <ul>
                {activities.map(activity =>
                    <li key={activity.activity_id}>
                        <Link href={`/OnSale/${activity.activity_route}`}>
                            <a>{activity.activity_name}</a>
                        </Link>
                    </li>)}
            </ul>
            {
                styles.map(style => (
                    <ul key={style.style_id}>
                        <div>{style.style_name}</div>
                        {style.subStyles.map(subStyle => <li key={subStyle.sub_style_id}>
                            <Link href={`/${categoryRoute}/${style.style_route}/${subStyle.sub_style_route}`}>
                                <a>{subStyle.sub_style_name}</a>
                            </Link>
                        </li>)}
                    </ul>))
            }

        </aside>
    )
}