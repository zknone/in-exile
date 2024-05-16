import { useState } from 'react';
import cn from 'classnames';
import { AppState, Language, ScreenSize } from '../../types/data';
import FrenchContext from './french-context';
import EnglishContext from './english-context';
import Card from '../card/card';
import FrenchCredits from './french-credits';
import EnglishCredits from './english-credits';
export default function MenuPopup(props: {
  onClick: () => void;
  screenSize: ScreenSize;
  language?: Language;
  containerClass: string;
  state: AppState;
}) {
  const { onClick, screenSize, language, containerClass, state } = props;
  const [isCardActive, setCardsActive] = useState(false);
  const handlePopupHover = () => {
    setCardsActive(true);
  };

  const handlePopupLeave = () => {
    setCardsActive(false);
  };

  return (
    <div
      className={cn(containerClass, 'absolute', {
        'w-[21vw]': screenSize !== 'default',
        'top-[-50vw] ': screenSize !== 'default' && state.category === 'noCategory',
        'top-[-71vw] ': screenSize !== 'default' && state.category !== 'noCategory',
        'max-w-[409px] max-h-[650px]': screenSize === 'default',
        'top-[-970px]': screenSize === 'default' && state.category === 'noCategory',
        'top-[-1370px]': screenSize === 'default' && state.category !== 'noCategory'
      })}
    >
      <div className={cn('flex gap-2 justify-center w-full')}>
        <div
          onMouseEnter={handlePopupHover}
          onMouseLeave={handlePopupLeave}
          className={cn(
            'z-50 rounded-[2vw] border-2 border-[#FF6CFF] bg-[#FF6CB6] shadow-card hover:bg-[#F93598] hover:border-[#B1256C] popup',
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
              'popup-content grid grid-rows-[88%_12%] rounded-[calc(2vw_*_0.75)] border-[#FF6CFF] bg-white hover:border-[#F93598]',
              {
                'h-[32vw]': screenSize !== 'default',
                'h-[610px] border-2': screenSize === 'default'
              }
            )}
          >
            <div
              className={cn('overflow-auto flex flex-col gap-y-5 leading-normal mt-[10%]', {
                'text-[calc(4px_+_12_*_((100vw_-_360px)_/_(1600_-_360)))]':
                  screenSize !== 'default',
                'mx-[3px] px-[5px]': screenSize === 'mobile',
                'mx-[5px] px-[10px]': screenSize === 'tablet-m',
                'mx-[7px] px-[15px]': screenSize === 'tablet-l',
                'mx-[8px] px-[32px]': screenSize === 'tabletop',
                'text-[20px] mx-[10px] px-[40px]': screenSize === 'default',
                'justify-center': state.menu === 'credits'
              })}
            >
              {language === 'français' && state.menu === 'context' && <FrenchContext />}
              {language === 'english' && state.menu === 'context' && <EnglishContext />}
              {language === 'français' && state.menu === 'credits' && (
                <FrenchCredits screenSize={screenSize} />
              )}
              {language === 'english' && state.menu === 'credits' && <EnglishCredits />}
            </div>

            <div
              className={cn('flex font-bold text-center border-t-[2px] leading-none', {
                'text-[calc(7px_+_23_*_((100vw_-_360px)_/_(1600_-_360)))]':
                  screenSize !== 'default',
                'text-[30px]': screenSize === 'default',
                'border-[#ff6cb6]': !isCardActive,
                'border-[#F93598]': isCardActive
              })}
            >
              <div
                className={cn({
                  'mask top-[23.15vw] h-[5vw]': screenSize !== 'default',
                  'mask top-[484px] h-[50px]': screenSize === 'default'
                })}
              />
              <div className="block m-auto ">{state.menu}</div>
            </div>
          </div>
        </div>
      </div>
      {state.menu === 'context' && (
        <section
          className={cn('relative flex justify-center z-10', {
            'top-[15vw]': screenSize !== 'default',
            'top-[200px]': screenSize === 'default'
          })}
        >
          <div className="absolute z-100 block bg-white w-[60vw] top-[-15vw] h-[10vw]"></div>
          <div
            className={cn('absolute z-50 ', {
              'w-[14.3vw] top-[-10.55vw] right-[19vw]': screenSize !== 'default',
              'w-[280px] top-[-122px] right-[380px]': screenSize === 'default'
            })}
          >
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
          </div>
          <div
            className={cn('absolute z-50', {
              'w-[14.3vw] top-[-10.55vw] left-[19vw] ': screenSize !== 'default',
              'w-[280px] top-[-122px] left-[380px]': screenSize === 'default'
            })}
          >
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

          {!isCardActive && (
            <>
              <div
                className={cn('absolute', {
                  'w-[14.3vw] top-[-12.6vw] right-[22.8vw]': screenSize !== 'default',
                  'w-[280px] top-[-160px] right-[440px]': screenSize === 'default'
                })}
              >
                <Card
                  screenSize={props.screenSize}
                  img="home-school"
                  key="artist"
                  cardTitle="artist"
                  rotation={isCardActive ? 0 : 8}
                />
              </div>
              <div
                className={cn('absolute', {
                  'w-[14.3vw] top-[-8.2vw] right-[21.8vw]': screenSize !== 'default',
                  'w-[280px] top-[-77px] right-[440px]': screenSize === 'default'
                })}
              >
                <Card
                  screenSize={props.screenSize}
                  img="home-school"
                  key="school"
                  cardTitle={state.lang}
                  rotation={isCardActive ? 0 : -8}
                />
              </div>
              <div
                className={cn('absolute', {
                  'w-[14.3vw] top-[-12.3vw] left-[22vw]': screenSize !== 'default',
                  'w-[280px] top-[-160px] left-[440px]': screenSize === 'default'
                })}
              >
                <Card
                  screenSize={props.screenSize}
                  img="home-school"
                  key="school"
                  cardTitle="school"
                  rotation={isCardActive ? 0 : 8}
                />
              </div>
              <div
                className={cn('absolute', {
                  'w-[14.3vw] top-[-9.7vw] left-[21vw]': screenSize !== 'default',
                  'w-[280px] top-[-107px] left-[440px]': screenSize === 'default'
                })}
              >
                <Card
                  screenSize={props.screenSize}
                  img="home-school"
                  key="artist"
                  cardTitle="artist"
                  rotation={isCardActive ? 0 : -7}
                />
              </div>
            </>
          )}
        </section>
      )}
    </div>
  );
}
