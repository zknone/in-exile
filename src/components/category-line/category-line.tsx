import { Dispatch, SetStateAction } from 'react';
import { CategoryCard, Dataset, DatasetItem, Language, Subcategory } from '../../types/data';
import Card from '../card/card';

type AppState = {
    lang: Language;
    category: CategoryCard;
  };

const CategoryLine = (props: {
    state: AppState;
    data: Dataset;
    mode: 'category' | 'default' | 'language' | 'subCategory';
    setState: Dispatch<SetStateAction<AppState>>;
}) => {
  const { data, mode, state, setState } = props;

  const onCategoryChange = (category: CategoryCard) => {
    if (state.category !== category) {
      setState({ ...state, category: category });
      console.log(category);
    } else {
      setState({ ...state, category: 'noCategory' });
    }
  };

  const onLanguageChange = (lang: Language) => {
    if (state.lang === 'noLang') {
      setState({ ...state, lang: lang });
    } else {
      if (state.category !== 'noCategory') {
        setState({ ...state, category: 'noCategory' });
      } else {
        setState({ lang: 'noLang', category: 'noCategory' });
      }
    }
  };

  const checkData = () => {
    if (mode === 'language') return data;
    if (mode === 'subCategory') {
      const selectedLanguage = data.find(item => item.lang === state.lang);
      if (selectedLanguage) {
        const selectedCategory = selectedLanguage.categories.find(category => category.category === state.category);
        if (selectedCategory) {
          return selectedCategory.subcategories;
        }
      }
    }
    if (mode === 'category') return data.filter(item => item.lang === state.lang);
  };

  console.log(state.lang !== 'noLang' && state.category !== 'noCategory');

  const chosenData = checkData();

  return (
    <>
        {mode === "subCategory" && chosenData?.map((subcategory) => (
            <Card
                img={(subcategory as Subcategory).img}
                key={(subcategory as Subcategory).card}
                openable
                cardTitle={(subcategory as Subcategory).title}
                points={(subcategory as Subcategory).text}
            />
        ))}
        {mode === 'category' && chosenData?.map((item) =>
            (item as DatasetItem).categories.map((categoryItem) => (
                <Card
                    img={categoryItem.img}
                    isSecondPlan={state.lang !== 'noLang' && state.category !== 'noCategory'}
                    cardTitle={categoryItem.title}
                    key={categoryItem.category}
                    onCardClick={() => onCategoryChange(categoryItem.category)}
                />
            ))
        )}
        {mode === 'language' && chosenData?.map((languageItem) => (
            <Card
                img={(languageItem as DatasetItem).img}
                isSecondPlan={state.lang !== 'noLang' && state.category === 'noCategory'}
                isThirdPlan={state.lang !== 'noLang' && state.category !== 'noCategory'}
                cardTitle={(languageItem as DatasetItem).lang}
                key={(languageItem as DatasetItem).lang}
                onCardClick={() => onLanguageChange((languageItem as DatasetItem).lang as Language)}
            />
        ))}
    </>
  );
};

CategoryLine.displayName = 'CategoryLine';

export default CategoryLine;
