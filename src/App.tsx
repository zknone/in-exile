import { useState } from 'react';
import './App.css';
import cn from 'classnames';

import data from './consts/data';
import EntranceScreen from './components/entrance-screen/entrance-screen';
import CategoryLine from './components/category-line/category-line';
import { CategoryCard, Language } from './types/data';

type AppState = {
  lang: Language;
  category: CategoryCard;
};

function App() {
  const [state, setState] = useState<AppState>({
    lang: 'noLang',
    category: 'noCategory'
  });

  const [isOpen, setOpen] = useState(true);

  return (
    <div className="App flex bg-white h-screen justify-center items-center font-body">
      <div className="relative block w-full h-[380px] my-auto">
        {isOpen && <EntranceScreen onClick={() => setOpen(false)} />}
        {!isOpen && (
          <>
            <div className="absolute z-20 w-full flex gap-2 justify-center">
              {state.category !== 'noCategory' && (
                <CategoryLine
                  state={state}
                  data={data}
                  mode="subCategory"
                  setState={setState}
                />
              )}
            </div>
            <div className={cn("absolute z-10 w-full flex gap-2 justify-center", {
              'top-12': state.lang !== 'noLang' && state.category !== 'noCategory'
            })}>
              {state.lang !== 'noLang' && <CategoryLine data={data} mode="category" state={state} setState={setState} />}
            </div>
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
              <CategoryLine data={data} mode="language" state={state} setState={setState}/>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
