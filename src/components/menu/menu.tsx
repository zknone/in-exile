import { ScreenSize } from '../../types/data';
import Card from '../card/card';
import cn from 'classnames';
import { AppState } from '../../types/data';

export default function Menu({ screenSize, state }: { screenSize: ScreenSize; state: AppState }) {
  return (
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
        <Card
          isSecondPlan
          isThirdPlan
          screenSize={screenSize}
          img="home-school"
          key="artist"
          cardTitle="context"
          rotation={-4}
        />
        <Card
          isSecondPlan
          isThirdPlan
          screenSize={screenSize}
          img="home-school"
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
          { 'mx-[20px] max-w-[280px] top-[-390px]': screenSize === 'default' }
        )}
      >
        <Card
          isSecondPlan
          isThirdPlan
          screenSize={screenSize}
          img="home-school"
          key="artist"
          cardTitle="download"
          rotation={1.2}
        />
      </div>
    </div>
  );
}
