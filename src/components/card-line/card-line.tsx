import { Dispatch, SetStateAction, useState } from 'react';
import {
  CategoryCard,
  Dataset,
  DatasetItem,
  Language,
  ScreenSize,
  Subcategory,
  AppState
} from '../../types/data';
import Card from '../card/card';
import cn from 'classnames';

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
      } 
      else {
        setState({ lang: lang, category: 'noCategory' });
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
          className={cn(
            'relative z-30 flex justify-between top-0  mx-auto max-w-[100%]',
            { 'gap-x-[4px]': screenSize === 'mobile' },
            { 'gap-x-[8px]': screenSize === 'tablet-m' },
            { 'gap-x-[10px]': screenSize === 'tablet-l' },
            { 'gap-x-[15px]': screenSize === 'tabletop' },
            { 'gap-x-[20px]': screenSize === 'default' }
          )}
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
            'relative top-0 flex justify-between mx-auto z-20 mx-auto max-w-[59.5%]',
            { 'gap-x-[4px]': screenSize === 'mobile' },
            { 'gap-x-[8px]': screenSize === 'tablet-m' },
            { 'gap-x-[10px]': screenSize === 'tablet-l' },
            { 'gap-x-[15px]': screenSize === 'tabletop' },
            { 'gap-x-[20px]': screenSize === 'default' },
            {
              'top-[-20vw]':
                state.lang !== 'noLang' &&
                state.category !== 'noCategory' &&
                screenSize !== 'default'
            },
            {
              'top-[-390px]':
                state.lang !== 'noLang' &&
                state.category !== 'noCategory' &&
                screenSize === 'default'
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
            'relative z-10 flex justify-between mx-auto max-w-[40%]',
            { 'gap-x-[4px]': screenSize === 'mobile' },
            { 'gap-x-[8px]': screenSize === 'tablet-m' },
            { 'gap-x-[10px]': screenSize === 'tablet-l' },
            { 'gap-x-[15px]': screenSize === 'tabletop' },
            { 'gap-x-[20px]': screenSize === 'default' },
            {
              'top-[-20vw]':
                state.lang !== 'noLang' &&
                state.category === 'noCategory' &&
                screenSize !== 'default'
            },
            {
              'top-[-40vw]':
                state.lang !== 'noLang' &&
                state.category !== 'noCategory' &&
                screenSize !== 'default'
            },
            {
              'top-[-390px]':
                state.lang !== 'noLang' &&
                state.category === 'noCategory' &&
                screenSize === 'default'
            },
            {
              'top-[-780px]':
                state.lang !== 'noLang' &&
                state.category !== 'noCategory' &&
                screenSize === 'default'
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
