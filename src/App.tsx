import { useEffect, useState } from 'react';
import cn from 'classnames';
import './App.css';
import { Helmet } from 'react-helmet';

import data from './consts/data';
import { CategoryCard, Language, ScreenSize } from './types/data';
import CardLine from './components/card-line/card-line';
import PreloadImages from './components/preload-images/preload-images';
import Context from './components/entrance-screen/context';
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

  const [screenSize, setScreenSize] = useState<ScreenSize>('default');

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 364) {
        setScreenSize('out');
      } else if (window.innerWidth < 666 && window.innerWidth > 365) {
        setScreenSize('mobile');
      } else if (window.innerWidth <= 834 && window.innerWidth > 667) {
        setScreenSize('tablet-m');
      } else if (window.innerWidth <= 1280 && window.innerWidth > 834) {
        setScreenSize('tablet-l');
      } else if (window.innerWidth > 1280 && window.innerWidth <= 1600) {
        setScreenSize('tabletop');
      } else {
        setScreenSize('default');
      }
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(screenSize);

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

  console.log(state.lang);

  return (
    <>
      <Helmet>
        <title>Welcome Cards</title>
      </Helmet>

      <div className="App h-screen font-body flex justify-center items-center">
        <PreloadImages images={imagesToPreload} />

        {screenSize !== 'out' && (
          <>
            {state.lang !== 'noLang' && isOpen && (
              <Context
                containerClass="fixed z-50 top-[50%] translate-y-1/2 left-[50%] translate-x-1/2"
                onClick={() => setOpen(false)}
                screenSize={screenSize}
                language={state.lang}
              />
            )}
            <div
              className={cn(
                'relative flex flex-col bg-white justify-center items-center h-full w-full max-w-[75%]',
                { 'max-h-[440px]': screenSize === 'default' },
                { 'max-h-[324px]': screenSize === 'tabletop' },
                { 'max-h-[214px]': screenSize === 'tablet-l' },
                { 'max-h-[167px]': screenSize === 'tablet-m' },
                { 'max-h-[99px]': screenSize === 'mobile' }
              )}
            >
              {state.category !== 'noCategory' && (
                <CardLine
                  state={state}
                  data={data}
                  mode="subCategory"
                  setState={setState}
                  screenSize={screenSize}
                />
              )}
              {state.lang !== 'noLang' && (
                <CardLine
                  data={data}
                  mode="category"
                  state={state}
                  setState={setState}
                  screenSize={screenSize}
                />
              )}
              <CardLine
                data={data}
                mode="language"
                state={state}
                setState={setState}
                screenSize={screenSize}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
