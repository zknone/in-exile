import { Dispatch, SetStateAction, useState } from 'react';
import { CategoryCard, Dataset, DatasetItem, Language, Subcategory, ScreenSize } from '../../types/data';
import Card from '../card/card';
import cn from 'classnames';

type AppState = {
  lang: Language;
  category: CategoryCard;
};

const CardLine = (props: {
  state: AppState;
  screenSize: ScreenSize;
  data: Dataset;
  mode: 'category' | 'default' | 'language' | 'subCategory';
  setState: Dispatch<SetStateAction<AppState>>;
}) => {
  const { data, mode, state, setState } = props;

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


  const isBackPlan = state.lang !== 'noLang' && state.category !== 'noCategory';

  return (
    <>
      {mode === 'subCategory' && (
        <div className="absolute z-20 w-full flex gap-2 justify-center">
          {chosenData?.map((subcategory, index) => (
            <Card
              screenSize={props.screenSize}
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
          className={cn('absolute z-10 w-full flex gap-2 justify-center', {
            'top-[49px]': isBackPlan && props.screenSize === 'tabletop',
            'top-[36px]': isBackPlan && props.screenSize === 'tablet-l'
          })}
        >
          {chosenData?.map((item) =>
            (item as DatasetItem).categories.map((categoryItem, categoryIndex) => (
              <Card
                screenSize={props.screenSize}
                img={categoryItem.img}
                isSecondPlan={isBackPlan}
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
            'absolute flex gap-2 justify-center w-full z-0',
            {
              'top-[49px]': !isBackPlan && props.screenSize === 'tabletop',
              'top-[36px]': !isBackPlan && props.screenSize === 'tablet-l'
            },
            {
              'top-[98px]': isBackPlan && props.screenSize === 'tabletop',
              'top-[74px]': isBackPlan && props.screenSize === 'tablet-l'
            } 
          )}
        >
          {chosenData?.map((languageItem, index) => (
            <Card
              screenSize={props.screenSize}
              img={(languageItem as DatasetItem).img}
              isSecondPlan={isBackPlan}
              isThirdPlan={isBackPlan}
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
