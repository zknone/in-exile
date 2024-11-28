import { useEffect, useState } from 'react';
import cn from 'classnames';
import { ScreenSize } from '../../types/data';

export default function Popup(props: {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  cardRef: React.RefObject<HTMLDivElement>;
  screenSize: ScreenSize;
  points?: string[];
  cardTitle: string;
}) {
  const { isOpen, setOpen, cardRef, screenSize, points, cardTitle } = props;

  const [isCardActive, setCardsActive] = useState(false);
  const handlePopupHover = () => {
    setCardsActive(true);
  };

  const handlePopupLeave = () => {
    setCardsActive(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setOpen, cardRef]);

  return (
    <>
      {isOpen && (
        <>
          <div className="popup-background"></div>
          <div
            ref={cardRef}
            onMouseEnter={handlePopupHover}
            onMouseLeave={handlePopupLeave}
            className={cn(
              'absolute z-20 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] border-[2px] border-[#FF6CFF] bg-[#FF6CB6] shadow-card hover:bg-[#F93598] hover:border-[#B1256C]',
              {
                'w-[21vw] h-[33.2vw] rounded-[2vw] ':
                  screenSize !== 'default' && screenSize !== 'mobile',
                'w-[24.5vw] h-[38.7vw] rounded-[2vw] ':
                  screenSize !== 'default' && screenSize === 'mobile',
                'p-[0.6vw]': screenSize !== 'default',
                'w-[409px] h-[650px] p-[13px] rounded-[40px]': screenSize === 'default'
              }
            )}
            onClick={() => setOpen(false)}
          >
            <div
              className={cn(
                'grid grid-rows-[88%_12%] w-full h-full border-[#FF6CFF] bg-white hover:border-[#F93598]',
                {
                  'text-[calc(4px_+_11_*_((100vw_-_375px)_/_(1600_-_375)))] rounded-[calc(2vw_*_0.75)]':
                    screenSize !== 'default',
                  'text-[18px] rounded-[30px]': screenSize === 'default'
                }
              )}
            >
              <ul
                className={cn(
                  'overflow-auto flex flex-col justify-center leading-tight px-[5%] w-full',
                  {
                    'text-[#555555]': !isCardActive,
                    'text-[#000000]': isCardActive
                  }
                )}
              >
                {points &&
                  points.map((item, index) => (
                    <li className="pb-[7%] last:pb-0 w-full" key={index}>
                      <div dangerouslySetInnerHTML={{ __html: item }} className="w-full" />
                    </li>
                  ))}
              </ul>
              <div
                className={cn('flex font-bold text-center border-t-[2px] leading-none w-full', {
                  'border-t-[0.5px]': screenSize === 'mobile',
                  'border-t-[1px]': screenSize === 'tablet-m',
                  'border-t-[1.5px]': screenSize === 'tablet-l' || screenSize === 'tabletop',
                  'text-[calc(7px_+_17_*_((100vw_-_375px)_/_(1600_-_375)))]':
                    screenSize !== 'default',
                  'text-[30px] border-t-[2px]': screenSize === 'default',
                  'border-[#ff6cb6]': !isCardActive,
                  'border-[#F93598]': isCardActive
                })}
              >
                <div
                  className={cn('block m-auto w-full', {
                    'text-[#555555]': !isCardActive,
                    'text-[#000000]': isCardActive
                  })}
                >
                  {cardTitle}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
