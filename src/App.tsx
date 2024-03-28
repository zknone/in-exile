import { useState } from 'react';
import './App.css';

import data from './consts/data';
import EntranceScreen from './components/entrance-screen/entrance-screen';
import { CategoryCard, Language } from './types/data';
import CardLine from './components/card-line/card-line';

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
    <div className="App flex bg-white h-screen justify-center items-center font-body mx-auto">
      <div className="relative block w-[1196px] h-[380px] my-auto">
        {isOpen && <EntranceScreen onClick={() => setOpen(false)} />}
        {!isOpen && (
          <>
            {state.category !== 'noCategory' && (
              <CardLine state={state} data={data} mode="subCategory" setState={setState} />
            )}
            {state.lang !== 'noLang' && (
              <CardLine data={data} mode="category" state={state} setState={setState} />
            )}
            <CardLine data={data} mode="language" state={state} setState={setState} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
