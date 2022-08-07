import CardNew from './CardNew'
import Classes from '../styles/newsList.module.scss'
import { useLocation } from "react-router-dom"

function NewsList({ orderedDataForViews, orderedDataForDate }) {

    const currentRoute = useLocation();

    return (
        <div className={Classes.newsListContainer}>
            {
                currentRoute.pathname === '/top-rated' ?
                    <div className={Classes.wrapperNewsList} id="ratedContainer">
                        {orderedDataForViews.map((item, index) => <CardNew noticia={item} key={item.id} index={index} />)}
                    </div>
                    :
                    <div className={Classes.wrapperNewsList} id="timeContainer">
                        {orderedDataForDate.map((item, index) => <CardNew noticia={item} key={item.id} index={index} />)}
                    </div>
            }
        </div>
    )
}

export default NewsList