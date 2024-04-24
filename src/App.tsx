import { useEffect, useState } from 'react';
import cn from 'classnames';
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

  const [isMacAir, setIsMacAir] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMacAir(window.innerWidth < 1024);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imagesToPreload: string[] = [
    'images/administrative-support.jpg',
    'images/artist-position.jpg',
    'images/bank-phone.jpg',
    'images/city-familiarization.jpg',
    'images/city.jpg',
    'images/education.jpg',
    'images/english.jpg',
    'images/equipment.jpg',
    'images/euro-logo.jpg',
    'images/family.jpg',
    'images/french.jpg',
    'images/general.jpg',
    'images/home-artist.jpg',
    'images/home-artist-alt.jpg',
    'images/home-school-alt.jpg',
    'images/home-school.jpg',
    'images/lodging.jpg',
    'images/medical-care.jpg',
    'images/professional-activity.jpg',
    'images/referents.jpg',
    'images/school-familiarization.jpg',
    'images/school.jpg',
    'images/social-life.jpg',
    'images/transport.jpg',
    'images/workspace.jpg'
  ];

  console.log(isMacAir);

  return (
    <div className="App flex bg-white h-screen justify-center items-center font-body mx-auto">
      <PreloadImages images={imagesToPreload} />
      <div
        className={cn('relative block h-[380px] my-auto', {
          'max-w-[810px]': isMacAir
        })}
      >
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
