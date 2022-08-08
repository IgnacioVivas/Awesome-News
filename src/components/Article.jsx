import { useState, useEffect, React } from 'react';
import { useParams } from 'react-router-dom';
import { useNewsContext } from '../context/NewsContext';
import { useFormatedDate } from '../hooks/useFormatedDate';
import Classes from '../styles/article.module.scss';

function Article() {

    const { id }= useParams();
    const { infoNews } = useNewsContext();
    const [article, setArticle] = useState();
    const [date, setDate] = useState();

    useEffect(() => {
        setArticle(infoNews[id]);
    }, []);

    useEffect(() => {
        setDate(useFormatedDate(article?.createdAt));
    }, [article]);
    
    return (
        <div className={Classes.articleContainer}>
            <div className={Classes.wrapperArticle}>
                <h1 className='font-bold'>{article?.title}</h1>
                <div className={Classes.articleInfoContainer}>
                    <div className={Classes.articleInfoWrapper}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M2 11h20v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9zm15-8h4a1 1 0 0 1 1 1v5H2V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2z" /></svg>
                        <p>{date}</p>
                    </div>
                    <div className={Classes.articleInfoWrapper}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg>
                        <p>{article?.views}</p>
                    </div>
                    <div className={Classes.articleInfoWrapper}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 3c9.941 0 18 8.059 18 18h-3c0-8.284-6.716-15-15-15V3zm0 7c6.075 0 11 4.925 11 11h-3a8 8 0 0 0-8-8v-3zm0 7a4 4 0 0 1 4 4H3v-4z" /></svg>
                        <p>{article?.category}</p>
                    </div>
                </div>
                <div className={Classes.imgContainer}>
                    <div className={Classes.wrapperImg}>
                        <img src={article?.imageUrl} alt="" />
                    </div>
                </div>
                <div className={Classes.textContainer}>
                    <h3 className='font-bold'>{article?.subtitle}</h3>
                    <p>{article?.body}</p>
                </div>
            </div>
        </div>
    );
}

export default Article;