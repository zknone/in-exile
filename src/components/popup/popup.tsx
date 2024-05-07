import { useEffect } from 'react';
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
            className={cn(
              'block absolute z-50 -left-[35%] p-[11px] -top-[42%] border-[2px] border-[#FF6CFF] bg-[#FF6CB6] p-2 shadow-card hover:bg-[#F93598] hover:border-[#B1256C] popup',
              { 'w-[408px] h-[647px] rounded-[40px] text-xl ': screenSize === 'tabletop' },
              { 'w-[320px] h-[508px] rounded-[35px] text-l': screenSize === 'tablet-l' }
            )}
            onClick={() => setOpen(false)}
          >
            <div
              className={cn(
                'popup-content w-full flex flex-col justify-between h-full border-[2px] border-[#FF6CFF] bg-white hover:border-[#F93598] card',
                { 'rounded-[30px]': screenSize === 'tabletop' },
                { 'rounded-[27px]': screenSize === 'tablet-l' }
              )}
            >
              <ul
                className={cn('my-auto', {
                  'p-6': screenSize === 'tablet-l',
                  'p-12': screenSize === 'tabletop'
                })}
              >
                {points &&
                  points.map((item, index) => (
                    <li className="pb-5 last:pb-0" key={index}>
                      {item}
                    </li>
                  ))}
              </ul>
              <div
                className={cn('font-title font-bold text-center py-2', {
                  'text-xl': screenSize === 'tablet-l',
                  'text-2xl': screenSize === 'tabletop'
                })}
              >
                {cardTitle}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
