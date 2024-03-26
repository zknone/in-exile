import { useState } from 'react';
import './App.css';
import Card from './components/card/card';
import cn from 'classnames';

import data from './consts/data';
import EntranceScreen from './components/entrance-screen/entrance-screen';
import CategoryLine from './components/category-line/category-line';
import { CategoryCard, Language } from './types/data';

type appState = {
  lang: Language,
  category: CategoryCard,
}

function App() {
  const [state, setState] = useState<appState>({
    lang: "noLang",
    category: "noCategory"
  });

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

  const [isOpen, setOpen] = useState(true);

  return (
    <div className="App flex bg-white h-screen justify-center items-center font-body">
      <div className="relative block w-full h-[380px] my-auto">
        {isOpen && <EntranceScreen onClick={()=> setOpen(false)}/>}
        {!isOpen && 
          <>
            {state.category !== 'noCategory' && <CategoryLine data={data} category={state.category} lang={state.lang}/>}
            {state.lang !== 'noLang' && (
              <div
                className={cn('absolute z-10 flex gap-2 justify-center w-full', {
                  'top-12': state.category !== 'noCategory'
                })}
              >
                {data
                  .filter((item) => item.lang === state.lang)
                  .map((item) =>
                    item.categories.map((category) => (
                      <Card
                        img={category.img}
                        isSecondPlan={state.lang !== 'noLang' && state.category !== 'noCategory'}
                        cardTitle={category.title}
                        key={category.category}
                        onCardClick={() => onCategoryChange(category.category)}
                      />
                    ))
                  )}
              </div>
            )}
            <div
              className={cn(
                'absolute flex gap-2 justify-center w-full z-0',
                {
                  'top-12': state.lang !== 'noLang' && state.category === 'noCategory'
                },
                {
                  'top-24': state.lang !== 'noLang' && state.category !== 'noCategory'
                }
              )}
            >
              {data.map((item) => (
                <Card
                  img={item.img}
                  isSecondPlan={state.lang !== 'noLang' && state.category === 'noCategory'}
                  isThirdPlan={state.lang !== 'noLang' && state.category !== 'noCategory'}
                  cardTitle={item.lang}
                  key={item.lang}
                  onCardClick={() => onLanguageChange(item.lang as Language)}
                />
              ))}
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default App;
