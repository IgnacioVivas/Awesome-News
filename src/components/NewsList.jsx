import { React, useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import CardNew from './CardNew';
import Paginator from './Paginator';
import Classes from '../styles/newsList.module.scss';

function NewsList({ orderedDataForViews, orderedDataForDate }) {

    const currentRoute = useLocation();
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPage(1);
    }, [currentRoute.pathname]);

    return (
        <div className={Classes.container}>
            <div className={Classes.newsListContainer}>
                {
                    currentRoute.pathname === '/top-rated' ?
                        <>
                            <Paginator page={page} setPage={setPage} totalPages={orderedDataForViews.length} />
                            <div className={Classes.wrapperNewsList} id="ratedContainer">
                                {page && orderedDataForViews[page - 1]?.map((item, index) => <CardNew noticia={item} key={item.id} index={index} />)}
                            </div>
                            <Paginator page={page} setPage={setPage} totalPages={orderedDataForViews.length} />
                        </>
                        :
                        <>
                            <Paginator page={page} setPage={setPage} totalPages={orderedDataForDate.length} />
                            <div className={Classes.wrapperNewsList} id="timeContainer">
                                {page && orderedDataForDate[page - 1]?.map((item, index) => <CardNew noticia={item} key={item.id} index={index} />)}
                            </div>
                            <Paginator page={page} setPage={setPage} totalPages={orderedDataForDate.length} />
                        </>
                }
            </div>
        </div>
    );
}

export default NewsList;