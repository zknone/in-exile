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
              'absolute z-20 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[2vw] border-[2px] border-[#FF6CFF] bg-[#FF6CB6] shadow-card hover:bg-[#F93598] hover:border-[#B1256C]',
              {
                'w-[20vw] h-[30vw]': screenSize !== 'default',
                'p-[3px]': screenSize === 'mobile',
                'p-[5px]': screenSize === 'tablet-m',
                'p-[6.2px]': screenSize === 'tablet-l',
                'p-[9.5px]': screenSize === 'tabletop',
                'w-[409px] h-[600px] p-[13px]': screenSize === 'default'
              }
            )}
            onClick={() => setOpen(false)}
          >
            <div
              className={cn(
                'grid grid-rows-[88%_12%] rounded-[calc(2vw_*_0.75)] w-full flex flex-col justify-between h-full border-[#FF6CFF] bg-white hover:border-[#F93598]',
                {
                  'text-[calc(4px_+_12_*_((100vw_-_360px)_/_(1600_-_360)))]':
                    screenSize !== 'default',

                  'text-[20px] ': screenSize === 'default'
                }
              )}
            >
              <ul
                className={cn(
                  'overflow-auto flex flex-col justify-center leading-tight px-[9%]',
                  {}
                )}
              >
                {points &&
                  points.map((item, index) => (
                    <li className="pb-[7%] last:pb-0" key={index}>
                      {item}
                    </li>
                  ))}
              </ul>
              <div
                className={cn('flex font-bold text-center border-t-[2px] leading-none', {
                  'text-[calc(7px_+_17_*_((100vw_-_360px)_/_(1600_-_360)))]':
                    screenSize !== 'default',
                  'text-[30px]': screenSize === 'default',
                  'border-[#ff6cb6]': !isCardActive,
                  'border-[#F93598]': isCardActive
                })}
              >
                <div className="block m-auto">{cardTitle}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
