import { useNewsContext } from '../context/NewsContext'
import Category from './Category';
import Classes from '../styles/categoryContainer.module.scss'

function CategoryContainer() {

  const { infoNews } = useNewsContext();

  let result = infoNews.map(e => e.category);
  let allCategories = [... new Set(result)];

  return (
    <>
      <h1 className={Classes.titleCategories}>Categories to show</h1>
      <div className={Classes.categoriesContainer}>
        <div className={Classes.wrapperCategory}>
          {
            allCategories.map((category, index) => <Category category={category} key={index} />)
          }
        </div>
      </div>
    </>
  )
}

export default CategoryContainer