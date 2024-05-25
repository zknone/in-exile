import { MenuCard, ScreenSize } from '../../types/data';
import Card from '../card/card';
import cn from 'classnames';
import { AppState } from '../../types/data';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && state.menu !== 'credits') {
        setOpen(false);
        setState({ ...state, menu: 'noMenu' });
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, state.menu, setOpen, setState]);

  const onMenuChange = (menu: MenuCard) => {
    setState({ ...state, category: 'noCategory' });
    if (menu !== 'credits') {
      setState({ ...state, menu: menu, category: 'noCategory' });
    } else {
      setState({ ...state, menu: menu });
    }

    setOpen(!isOpen);
  };

  return (
    <>
      {(state.lang !== 'noLang' && state.menu === 'noMenu') ||
        ('closed' && isOpen && (
          <MenuPopup
            containerClass="relative z-50 translate-x-[-50%]"
            state={state}
            onClick={() => {
              setOpen(false);
              setState({ ...state, menu: 'noMenu' });
            }}
            screenSize={screenSize}
            language={state.lang}
          />
        ))}
      <div
        className={cn(
          'relative z-0 flex flex-col justify-between items-center mx-auto max-h-[1px]',
          {
            'top-[-20vw]':
              state.lang === 'noLang' &&
              screenSize !== 'default' &&
              isOpen &&
              screenSize !== 'mobile'
          },
          {
            'top-[-22.9vw]':
              state.lang === 'noLang' &&
              screenSize !== 'default' &&
              !isOpen &&
              screenSize === 'mobile'
          },
          {
            'top-[-40vw]':
              state.lang !== 'noLang' &&
              state.category === 'noCategory' &&
              screenSize !== 'default' &&
              screenSize !== 'mobile'
          },
          {
            'top-[-45.6vw]':
              state.lang !== 'noLang' &&
              state.category === 'noCategory' &&
              screenSize !== 'default' &&
              screenSize === 'mobile'
          },
          {
            'top-[-60vw]':
              state.lang !== 'noLang' &&
              state.category !== 'noCategory' &&
              screenSize !== 'default' &&
              screenSize !== 'mobile'
          },
          {
            'top-[-68.3vw]':
              state.lang !== 'noLang' &&
              state.category !== 'noCategory' &&
              screenSize !== 'default' &&
              screenSize === 'mobile'
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
          <Card
            visible={state.menu === 'context' && isOpen ? false : true}
            className={leftCardDisplacement}
            isThirdPlan
            screenSize={screenSize}
            img="home-school"
            onCardClick={() => onMenuChange('context')}
            key="context"
            cardTitle={state.lang === 'english' ? 'context' : 'contexte'}
            rotation={-4}
          />
          <Card
            visible={state.menu === 'credits' && isOpen ? false : true}
            className={rightCardDisplacement}
            isThirdPlan
            screenSize={screenSize}
            img="home-school"
            onCardClick={() => onMenuChange('credits')}
            key="credits"
            cardTitle={state.lang === 'english' ? 'credits' : 'сrédits'}
            rotation={-2}
          />
        </div>

        <div
          className={cn(
            'relative z-0 flex justify-between  mx-auto',
            { 'mx-[4px] max-w-[19.3%] top-[-22.4vw]': screenSize === 'mobile' },
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
            key="download"
            href="/welcome-cards_aa-e_fr_eng.pdf"
            cardTitle={state.lang === 'english' ? 'download' : 'télécharger'}
            rotation={1.2}
          />
        </div>
      </div>
    </>
  );
}
