import { useState } from 'react';
import './App.css';

import data from './consts/data';
import EntranceScreen from './components/entrance-screen/entrance-screen';
import { CategoryCard, Language } from './types/data';
import CardLine from './components/card-line/card-line';
import PreloadImages from './components/preload-images/preload-images';

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

  const imagesToPreload: string[] = [
    'images/administrative-support.jpg',
    'image/artist-position.jpg',
    'image/bank-phone.jpg',
    'image/city-familiarization.jpg',
    'image/city.jpg',
    'image/education.jpg',
    'image/english.jpg',
    'image/equipment.jpg',
    'image/euro-logo.jpg',
    'image/family.jpg',
    'image/french.jpg',
    'image/general.jpg',
    'image/home-artist.jpg',
    'image/home-artist-alt.jpg',
    'image/home-school-alt.jpg',
    'image/home-school.jpg',
    'image/lodging.jpg',
    'image/medical-care.jpg',
    'image/professional-activity.jpg',
    'image/referents.jpg',
    'image/school-familiarization.jpg',
    'image/school.jpg',
    'image/social-life.jpg',
    'image/transport.jpg',
    'image/workspace.jpg'
  ];

  return (
    <div className="App flex bg-white h-screen justify-center items-center font-body mx-auto">
      <PreloadImages images={imagesToPreload} />
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
