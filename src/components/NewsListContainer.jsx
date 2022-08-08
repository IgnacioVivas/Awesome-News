import React from 'react';
import { useNewsContext } from '../context/NewsContext';
import NewsList from './NewsList';

function NewsListContainer() {

    const { infoNews } = useNewsContext();

    const infoNewsCopyForViews = [...infoNews];

    const infoNewscopyForDate = [...infoNews];

    const orderedDataForViews =
        infoNewsCopyForViews?.sort((a, b) => {
            if (a.views < b.views) return 1;
            if (a.views > b.views) return -1;
            return 0;
        });


    const orderedDataForDate =
        infoNewscopyForDate.sort(function (x, y) {
            let firstDate = new Date(x.createdAt),
                SecondDate = new Date(y.createdAt);

            if (firstDate > SecondDate) return -1;
            if (firstDate < SecondDate) return 1;
            return 0;
        });

    const pagination = (data) => {
        const unitsPerPage = 18;
        const pages = data.length / unitsPerPage;
        const arr = new Array(Math.ceil(pages));
        let initialPosition = 0;
        let endPosition = 18;
        for (let i = 0; i < arr.length; i++) {
            arr[i] = data.slice(initialPosition, endPosition);
            initialPosition = initialPosition + 18;
            endPosition = endPosition + 18;
        }
        return arr;
    };

    return (
        <>
            <NewsList orderedDataForViews={pagination(orderedDataForViews)} orderedDataForDate={pagination(orderedDataForDate)} />
        </>
    );
}

export default NewsListContainer;