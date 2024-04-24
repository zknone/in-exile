import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { CategoryCard, Dataset, DatasetItem, Language, Subcategory } from '../../types/data';
import Card from '../card/card';
import cn from 'classnames';

type AppState = {
  lang: Language;
  category: CategoryCard;
};

const CardLine = (props: {
  state: AppState;
  data: Dataset;
  mode: 'category' | 'default' | 'language' | 'subCategory';
  setState: Dispatch<SetStateAction<AppState>>;
}) => {
  const { data, mode, state, setState } = props;

  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const [isMacAir, setIsMacAir] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMacAir(window.innerWidth < 1300);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        <div className="absolute z-20 w-full flex gap-2 justify-center">
          {chosenData?.map((subcategory, index) => (
            <Card
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
            'top-[49px]': state.lang !== 'noLang' && state.category !== 'noCategory',
            'top-[36px]': state.lang !== 'noLang' && state.category !== 'noCategory' && isMacAir
          })}
        >
          {chosenData?.map((item) =>
            (item as DatasetItem).categories.map((categoryItem, categoryIndex) => (
              <Card
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
            'absolute flex gap-2 justify-center w-full z-0',
            {
              'top-[49px]': state.lang !== 'noLang' && state.category === 'noCategory',
              'top-[36px]': state.lang !== 'noLang' && state.category === 'noCategory' && isMacAir
            },
            {
              'top-[98px]': state.lang !== 'noLang' && state.category !== 'noCategory',
              'top-[74px]': state.lang !== 'noLang' && state.category !== 'noCategory' && isMacAir,
            }
          )}
        >
          {chosenData?.map((languageItem, index) => (
            <Card
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
