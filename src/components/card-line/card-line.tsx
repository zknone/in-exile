import { Dispatch, SetStateAction, useState } from 'react';
import {
  CategoryCard,
  Dataset,
  DatasetItem,
  Language,
  ScreenSize,
  Subcategory
} from '../../types/data';
import Card from '../card/card';
import cn from 'classnames';

type AppState = {
  lang: Language;
  category: CategoryCard;
};

const CardLine = (props: {
  screenSize: ScreenSize;
  state: AppState;
  data: Dataset;
  mode: 'category' | 'default' | 'language' | 'subCategory';
  setState: Dispatch<SetStateAction<AppState>>;
}) => {
  const { data, mode, state, setState, screenSize } = props;

  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const onCategoryChange = (category: CategoryCard) => {
    if (state.category !== category) {
      setState({ ...state, category: category });
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
      const selectedLanguage = data.find((item) => item.lang === state.lang);
      if (selectedLanguage) {
        const selectedCategory = selectedLanguage.categories.find(
          (category) => category.category === state.category
        );
        if (selectedCategory) {
          return selectedCategory.subcategories;
        }
      }
    }
    if (mode === 'category') return data.filter((item) => item.lang === state.lang);
  };

  const chosenData = checkData();

  return (
    <>
      {mode === 'subCategory' && (
        <div
          className={cn('absolute z-20 flex justify-center gap-x-2 top-0', {
            'max-w-[100%] mx-auto': screenSize === 'default'
          })}
        >
          {chosenData?.map((subcategory, index) => (
            <Card
              screenSize={screenSize}
              img={(subcategory as Subcategory).img}
              key={(subcategory as Subcategory).card}
              openable
              cardTitle={(subcategory as Subcategory).title}
              points={(subcategory as Subcategory).text}
              isNothingHovered={activeCardIndex === null}
              isHovered={index === activeCardIndex}
              onMouseEnter={() => setActiveCardIndex(index)}
              onMouseLeave={() => setActiveCardIndex(null)}
            />
          ))}
        </div>
      )}
      {mode === 'category' && (
        <div
          className={cn(
            'absolute flex justify-center mx-auto z-10 gap-x-2',
            { 'max-w-[60%] mx-auto': screenSize === 'default' },
            {
              'top-[12%]': state.lang !== 'noLang' && state.category !== 'noCategory'
            }
          )}
        >
          {chosenData?.map((item) =>
            (item as DatasetItem).categories.map((categoryItem, categoryIndex) => (
              <Card
                screenSize={screenSize}
                img={categoryItem.img}
                isSecondPlan={state.lang !== 'noLang' && state.category !== 'noCategory'}
                cardTitle={categoryItem.title}
                key={categoryItem.category}
                onCardClick={() => onCategoryChange(categoryItem.category)}
                isNothingHovered={activeCardIndex === null}
                isHovered={categoryIndex === activeCardIndex}
                onMouseEnter={() => setActiveCardIndex(categoryIndex)}
                onMouseLeave={() => setActiveCardIndex(null)}
              />
            ))
          )}
        </div>
      )}

      {mode === 'language' && (
        <div
          className={cn(
            'absolute flex justify-center gap-x-2',
            { 'max-w-[40%] mx-auto': screenSize === 'default' },
            {
              'top-[12%]': state.lang !== 'noLang' && state.category === 'noCategory'
            },
            {
              'top-[24%]': state.lang !== 'noLang' && state.category !== 'noCategory'
            }
          )}
        >
          {chosenData?.map((languageItem, index) => (
            <Card
              screenSize={screenSize}
              img={(languageItem as DatasetItem).img}
              isSecondPlan={state.lang !== 'noLang' && state.category === 'noCategory'}
              isThirdPlan={state.lang !== 'noLang' && state.category !== 'noCategory'}
              cardTitle={(languageItem as DatasetItem).lang}
              key={(languageItem as DatasetItem).lang}
              onCardClick={() => onLanguageChange((languageItem as DatasetItem).lang as Language)}
              isNothingHovered={activeCardIndex === null}
              isHovered={index === activeCardIndex}
              onMouseEnter={() => setActiveCardIndex(index)}
              onMouseLeave={() => setActiveCardIndex(null)}
            />
          ))}
        </div>
      )}
    </>
  );
};

CardLine.displayName = 'CardLine';

export default CardLine;
