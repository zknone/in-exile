import { useState } from 'react';
import Card from '../card/card';
import cn from 'classnames';
import FrenchText from './french-text';
import { Language, ScreenSize } from '../../types/data';
import EnglishText from './english-text';
export default function Context(props: {
  onClick: () => void;
  isMobile?: boolean;
  screenSize: ScreenSize;
  language?: Language;
}) {
  const { onClick, isMobile, screenSize, language } = props;
  const [isCardActive, setCardsActive] = useState(false);
  const handlePopupHover = () => {
    setCardsActive(true);
  };

  const handlePopupLeave = () => {
    setCardsActive(false);
  };

  return (
    <div className="relative">
      <div
        className={cn(
          'absolute right-[50%] flex gap-2 justify-center',
          { '-top-[130px]': screenSize === 'tabletop' },
          { '-top-[130px]': screenSize === 'tablet-l' }
        )}
      >
        <div
          onMouseEnter={handlePopupHover}
          onMouseLeave={handlePopupLeave}
          className={cn(
            'block absolute z-50 rounded-[40px] border-2 border-[#FF6CFF] bg-[#FF6CB6] p-[16px] shadow-card text-xl hover:bg-[#F93598] hover:border-[#B1256C] popup',
            { 'h-[669px] w-[429px]': screenSize === 'tabletop' },
            { 'h-[607px] w-[389px]': screenSize === 'tablet-l' }
          )}
          onClick={onClick}
        >
          <div className="absolute popup-content w-full flex flex-col justify-between h-full border-2 rounded-[30px] border-[#FF6CFF] bg-white hover:border-[#F93598]">
            <div
              className={cn(
                'absolute px-[50px] mx-3 overflow-auto flex flex-col gap-y-5',
                { 'my-12 max-h-[512px]': screenSize === 'tabletop' },
                { 'my-10 max-h-[461px]': screenSize === 'tablet-l' }
              )}
            >
              {language === 'français' && <FrenchText />}
              {language === 'english' && <EnglishText />}
              <img src="/images/euro-logo.jpg" />
            </div>
            <div className="mask top-[calc(100%-100px)]"></div>
            <div
              className={cn(
                'absolute bottom-0 w-full font-bold text-center pb-[22px] pt-[14px] border-t-[2px]',
                {
                  'border-[#ff6cb6]': !isCardActive,
                  'border-[#F93598]': isCardActive,
                  'text-xl': screenSize === 'tablet-l',
                  'text-2xl': screenSize === 'tabletop'
                }
              )}
            >
              context
            </div>
          </div>
        </div>
      </div>
      {!isMobile && (
        <section className="absolute flex right-[50%] justify-center z-10">
          <div
            className={cn('absolute  flex gap-[320px] justify-center', {
              '-top-[25px]': isCardActive,
              '-top-[65px]': !isCardActive
            })}
          >
            <Card
              screenSize={props.screenSize}
              img="home-school"
              key="artist"
              cardTitle="artist"
              rotation={isCardActive ? 0 : 3}
            />
            <Card
              screenSize={props.screenSize}
              img="home-school"
              key="school"
              cardTitle="school"
              rotation={isCardActive ? 0 : -3}
            />
          </div>
          {!isCardActive && (
            <div className="absolute -top-[40px] flex gap-[340px] justify-center">
              <Card
                screenSize={props.screenSize}
                img="home-school"
                key="artist"
                cardTitle="artist"
                rotation={isCardActive ? 0 : -3}
              />
              <Card
                screenSize={props.screenSize}
                img="home-school"
                key="school"
                cardTitle="school"
                rotation={isCardActive ? 0 : 3}
              />
            </div>
          )}
          {/* на второй будет карточка с текущим языком */}
          {!isCardActive && (
            <div className="absolute -top-[55px] flex gap-[380px] justify-center">
              <Card
                screenSize={props.screenSize}
                img="home-artist"
                altImg="home-artist-alt"
                key="artist"
                cardTitle="artiste"
                active={isCardActive}
                isNothingHovered={isCardActive}
                isHovered={isCardActive}
              />
              <Card
                screenSize={props.screenSize}
                img="home-school"
                altImg="home-school-alt"
                key="school"
                cardTitle="école"
                active={isCardActive}
                isNothingHovered={isCardActive}
                isHovered={isCardActive}
              />
            </div>
          )}
        </section>
      )}
    </div>
  );
}
