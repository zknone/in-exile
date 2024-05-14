import { useState } from 'react';
import cn from 'classnames';
import { Language, ScreenSize } from '../../types/data';
import FrenchContext from './french-context';
import EnglishContext from './english-context';
export default function MenuPopup(props: {
  onClick: () => void;
  isMobile?: boolean;
  screenSize: ScreenSize;
  language?: Language;
  containerClass: string;
  mode: 'credits' | 'context';
}) {
  const { onClick, screenSize, language, containerClass, mode } = props;
  const [isCardActive, setCardsActive] = useState(false);
  const handlePopupHover = () => {
    setCardsActive(true);
  };

  const handlePopupLeave = () => {
    setCardsActive(false);
  };

  return (
    <div
      className={cn(containerClass, {
        'top-[-50vw] max-w-[20vw]': screenSize !== 'default',
        'max-w-[409px] max-h-[650px] top-[-970px]': screenSize === 'default'
      })}
    >
      <div className={cn('flex gap-2 justify-center w-full')}>
        <div
          onMouseEnter={handlePopupHover}
          onMouseLeave={handlePopupLeave}
          className={cn(
            'z-50 rounded-[40px] border-2 border-[#FF6CFF] bg-[#FF6CB6] shadow-card text-xl hover:bg-[#F93598] hover:border-[#B1256C] popup',
            {
              'p-[3px]': screenSize === 'mobile',
              'p-[5px]': screenSize === 'tablet-m',
              'p-[6.2px]': screenSize === 'tablet-l',
              'p-[9.5px]': screenSize === 'tabletop',
              'p-[13px]': screenSize === 'default'
            }
          )}
          onClick={onClick}
        >
          <div
            className={cn(
              'popup-content grid grid-rows-[90%_10%] border-2 rounded-[30px] border-[#FF6CFF] bg-white hover:border-[#F93598]',
              {
                'max-h-[32vw]': screenSize !== 'default',
                'max-h-[610px]': screenSize === 'default'
              }
            )}
          >
            <div
              className={cn(
                'block overflow-auto flex flex-col gap-y-5 mb-[5%] leading-normal mt-[10%]',
                {
                  'text-[calc(4px_+_16_*_((100vw_-_360px)_/_(1600_-_360)))]':
                    screenSize !== 'default',
                  'mx-[2px] px-[3px]': screenSize === 'mobile',
                  'mx-[5px] px-[10px]': screenSize === 'tablet-m',
                  'mx-[7px] px-[15px]': screenSize === 'tablet-l',
                  'mx-[8px] px-[32px]': screenSize === 'tabletop',
                  'text-[20px] mx-[10px] px-[40px]': screenSize === 'default'
                }
              )}
            >
              {language === 'français' && mode === 'context' && <FrenchContext />}
              {language === 'english' && mode === 'context' && <EnglishContext />}
              <img src="/images/euro-logo.jpg" />
            </div>
            <div className="mask top-[calc(100%-100px)]"></div>
            <div
              className={cn(
                'bottom-0 w-full font-bold text-center pb-[22px] pt-[14px] border-t-[2px]',
                {
                  'text-[calc(7px_+_23_*_((100vw_-_360px)_/_(1600_-_360)))]':
                  screenSize !== 'default',
                  'text-[30px]':
                  screenSize === 'default',
                  'border-[#ff6cb6]': !isCardActive,
                  'border-[#F93598]': isCardActive
                }
              )}
            >
              context
            </div>
          </div>
        </div>
      </div>
      {/* {mode === 'context' && (
        <section className="flex right-[50%] justify-center z-10">
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
      )} */}
    </div>
  );
}
