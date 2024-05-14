import { MenuCard, ScreenSize } from '../../types/data';
import Card from '../card/card';
import cn from 'classnames';
import { AppState } from '../../types/data';
import { Dispatch, SetStateAction, useState } from 'react';
import MenuPopup from '../menu-popup/menu-popup';

export default function Menu({
  screenSize,
  state,
  setState
}: {
  screenSize: ScreenSize;
  state: AppState;
  setState: Dispatch<SetStateAction<AppState>>;
}) {
  const leftCardDisplacement = screenSize !== 'default' ? 'left-[2vw] z-10' : 'left-[50px] z-10';
  const rightCardDisplacement = screenSize !== 'default' ? 'right-[2vw]' : 'right-[50px]';

  const [isOpen, setOpen] = useState(true);
  const onMenuChange = (menu: MenuCard) => {
    if (state.menu !== menu) {
      setState({ ...state, menu: menu });
    }
    setOpen(!isOpen);
  };

  console.log(state);

  return (
    <>
      {state.lang !== 'noLang' && state.menu === 'context' && isOpen && (
        <MenuPopup
          containerClass="relative z-50 left-[50%] translate-x-[-50%]"
          mode={state.menu}
          onClick={() => setOpen(false)}
          screenSize={screenSize}
          language={state.lang}
        />
      )}

      <div
        className={cn(
          'relative z-0  flex flex-col justify-between items-center top-0 mx-auto max-h-[1px]',
          { 'top-[-20vw]': state.lang === 'noLang' && screenSize !== 'default' },
          {
            'top-[-40vw]':
              state.lang !== 'noLang' && state.category === 'noCategory' && screenSize !== 'default'
          },
          {
            'top-[-60vw]':
              state.lang !== 'noLang' && state.category !== 'noCategory' && screenSize !== 'default'
          },
          { 'top-[-390px]': state.lang === 'noLang' && screenSize === 'default' },
          {
            'top-[-780px]':
              state.lang !== 'noLang' && state.category === 'noCategory' && screenSize === 'default'
          },
          {
            'top-[-1170px]':
              state.lang !== 'noLang' && state.category !== 'noCategory' && screenSize === 'default'
          }
        )}
      >
        <div
          className={cn(
            'relative z-10 flex justify-between mx-auto',
            { 'gap-x-[4px] max-w-[40%]': screenSize === 'mobile' },
            { 'gap-x-[8px] max-w-[40%]': screenSize === 'tablet-m' },
            { 'gap-x-[10px] max-w-[40%]': screenSize === 'tablet-l' },
            { 'gap-x-[15px] max-w-[40%]': screenSize === 'tabletop' },
            { 'gap-x-[32px] max-w-[592px]': screenSize === 'default' }
          )}
        >
          {/* {state.menu === 'context' && ( */}
          <Card
            className={leftCardDisplacement}
            isThirdPlan
            screenSize={screenSize}
            img="home-school"
            onCardClick={() => onMenuChange('context')}
            key="artist"
            cardTitle="context"
            rotation={-4}
          />
          {/* {state.menu === 'credits' && ( */}
          <Card
            className={rightCardDisplacement}
            isThirdPlan
            screenSize={screenSize}
            img="home-school"
            onCardClick={() => onMenuChange('credits')}
            key="artist"
            cardTitle="credits"
            rotation={-2}
          />
        </div>

        <div
          className={cn(
            'relative z-0 flex justify-between  mx-auto',
            { 'mx-[4px] max-w-[19.3%] top-[-20vw]': screenSize === 'mobile' },
            { 'mx-[8px] max-w-[19.3%] top-[-20vw]': screenSize === 'tablet-m' },
            { 'mx-[10px] max-w-[19.3%] top-[-20vw]': screenSize === 'tablet-l' },
            { 'mx-[15px] max-w-[19.3%] top-[-20vw]': screenSize === 'tabletop' },
            { 'mx-[20px] max-w-[280px] top-[-400px]': screenSize === 'default' }
          )}
        >
          <Card
            isThirdPlan
            screenSize={screenSize}
            img="home-school"
            key="artist"
            cardTitle="download"
            rotation={1.2}
          />
        </div>
      </div>
    </>
  );
}
