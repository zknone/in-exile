import { ScreenSize } from '../../types/data';
import Card from '../card/card';
import cn from 'classnames';
import { AppState } from '../../types/data';

export default function Menu({ screenSize, state }: { screenSize: ScreenSize; state: AppState }) {
  return (
    <div
      className={cn(
        'relative z-0  flex flex-col justify-between items-center top-0 mx-auto',
        { 'top-[-20vw]': state.lang === 'noLang' },
        { 'top-[-40vw]': state.lang !== 'noLang' && state.category === 'noCategory' },
        { 'top-[-60vw]': state.lang !== 'noLang' && state.category !== 'noCategory' }
      )}
    >
      <div
        className={cn(
          'relative z-10 flex justify-between max-w-[40%] mx-auto',
          { 'gap-x-[4px]': screenSize === 'mobile' },
          { 'gap-x-[8px]': screenSize === 'tablet-m' },
          { 'gap-x-[10px]': screenSize === 'tablet-l' },
          { 'gap-x-[15px]': screenSize === 'tabletop' },
          { 'gap-x-[20px]': screenSize === 'default' }
        )}
      >
        <Card
          isSecondPlan
          isThirdPlan
          screenSize={screenSize}
          img="home-school"
          key="artist"
          cardTitle="artist"
          rotation={0}
        />
        <Card
          isSecondPlan
          isThirdPlan
          screenSize={screenSize}
          img="home-school"
          key="artist"
          cardTitle="artist"
          rotation={0}
        />
      </div>
      <div
        className={cn(
          'relative z-0 top-[-20.75vw] flex justify-between max-w-[20%] mx-auto',
          { 'mx-[4px]': screenSize === 'mobile' },
          { 'mx-[8px]': screenSize === 'tablet-m' },
          { 'mx-[10px]': screenSize === 'tablet-l' },
          { 'mx-[15px]': screenSize === 'tabletop' },
          { 'mx-[20px]': screenSize === 'default' }
        )}
      >
        <Card
          isSecondPlan
          isThirdPlan
          screenSize={screenSize}
          img="home-school"
          key="artist"
          cardTitle="artist"
          rotation={0}
        />
      </div>
    </div>
  );
}
