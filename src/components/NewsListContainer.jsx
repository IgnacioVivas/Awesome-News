import { useNewsContext } from '../context/NewsContext';
import NewsList from './NewsList';

function NewsListContainer() {

    const { infoNews } = useNewsContext();

    const infoNewsCopyForViews = [...infoNews]

    const infoNewscopyForDate = [...infoNews]

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

            if (firstDate < SecondDate) return -1;
            if (firstDate > SecondDate) return 1;
            return 0;
        });

    return (
        <>
            <NewsList orderedDataForViews={orderedDataForViews} orderedDataForDate={orderedDataForDate}/>
        </>
    )
}

export default NewsListContainer