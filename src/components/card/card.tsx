import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { ScreenSize } from '../../types/data';

export default function Card(props: {
  screenSize: ScreenSize;
  rotation?: number;
  cardTitle: string;
  img: string;
  points?: string[];
  onCardClick?: MouseEventHandler<HTMLDivElement>;
  isSecondPlan?: boolean;
  isThirdPlan?: boolean;
  openable?: boolean;
  active?: boolean;
  isHovered?: boolean;
  isNothingHovered?: boolean;
  altImg?: string;
  size?: 'normal' | 'big';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  const {
    cardTitle,
    points,
    onCardClick,
    isSecondPlan,
    isThirdPlan,
    openable,
    active,
    size = 'normal',
    onMouseEnter,
    onMouseLeave,
    isHovered,
    isNothingHovered,
    rotation = 0,
    img,
    altImg
  } = props;
  const [isOpen, setOpen] = useState(false);
  const { screenSize } = props;
  const cardRef = useRef<HTMLDivElement>(null);

  const imgUrl = `/images/${img}.jpg`;
  const altImgUrl = `/images/${altImg}.jpg`;

  useEffect(() => {
    if (openable) {
      const handleClickOutside = (event: MouseEvent) => {
        if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
          setOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [openable]);

  return (
    <div className="relative">
      {isOpen && (
        <>
          <div className="popup-background"></div>
          <div
            ref={cardRef}
            className={cn(
              'block absolute z-50 -left-[35%] p-[11px] -top-[42%] border-[2px] border-[#FF6CFF] bg-[#FF6CB6] p-2 shadow-card hover:bg-[#F93598] hover:border-[#B1256C] popup',
              { 'w-[408px] h-[647px] rounded-[40px] text-xl ': screenSize === 'tabletop'},
              { 'w-[320px] h-[508px] rounded-[35px] text-l': screenSize === 'tablet-l'}
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
                  'p-6': screenSize === 'tabletop',
                  'p-12': screenSize === 'tablet-l'
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
                  'text-xl': screenSize === 'tabletop',
                  'text-2xl': screenSize === 'tablet-l'
                })}
              >
                {cardTitle}
              </div>
            </div>
          </div>
        </>
      )}

      <div
        className={cn(
          'flex relative border-[2px] shadow-card',
          { 'w-[154px] p-[2px] rounded-[15px] ': size === 'normal' && screenSize === 'tablet-l' },
          { 'w-[223px] p-[6px] rounded-[20px]': size === 'normal' && screenSize === 'tabletop' },
          { 'w-[321px] p-[8px] h-[504px] rounded-[20px]': size === 'big' && screenSize === 'tabletop' },
          { 'w-[280px] p-[4px] h-[441px] rounded-[20px]': size === 'big' && screenSize === 'tablet-l' },
          { 'border-[#2FA2FB]': !isHovered && !isNothingHovered },
          'hover:bg-[#008AFF] hover:border-[#396E9A] hover:border-1',
          { 'border-[#008AFF] bg-white': !active },
          { 'border-[#396E9A] bg-[#008AFF] border-1': active },
          { 'border-[#2FA2FB]/[0.7]': isSecondPlan },
          { 'border-[#2FA2FB]/[0.5]': isThirdPlan }
        )}
        style={{ transform: `rotate(${rotation}deg)` }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          className={cn(
            'flex flex-col z-0 border-[2px] rounded-[15px] bg-white truncate',
            { 'border-[#008AFF]': !isSecondPlan && !isThirdPlan },
            { 'border-[#2FA2FB]': !isHovered && !isNothingHovered },
            { 'border-[#2FA2FB]/[0.7]': isSecondPlan },
            { 'border-[#2FA2FB]/[0.5]': isThirdPlan },
            { 'rounded-[12px]': size === 'normal' && screenSize === 'tablet-l' },
            { 'rounded-[15px]': size === 'normal' && screenSize === 'tabletop' },
            { 'rounded-[15px]': size === 'big' && screenSize === 'tabletop' },
            { 'rounded-[15px]': size === 'big' && screenSize === 'tablet-l' }
          )}
          onClick={openable ? () => setOpen(!isOpen) : onCardClick}
        >
          <div
            className={cn('basis-full', { 'opacity-[0.7]': !isHovered && !isNothingHovered })}
          >
            <img
              className={cn(
                'w-full h-full transition-transform duration-300 transform hover:scale-110 inset-0'
              )}
              src={active ? altImgUrl : imgUrl}
              alt="cardTitle"
            />
          </div>
          <div
            className={cn(
              'basis-[] font-bold font-title text-center cursor-pointer py-2 border-t-2 border-[#008AFF] z-20 bg-white',
              { 'text-[11px]': screenSize === 'tablet-l' && size === 'normal' },
              { 'text-2xl': screenSize === 'tabletop' && size === 'big' },
              { 'text-l': screenSize === 'tablet-l' && size === 'big' },
              { 'text-[#505050] border-[#2FA2FB]': !isHovered && !isNothingHovered },
              { 'opacity-[80%] text-[#727272] !important': isSecondPlan },
              { 'opacity-[60%] text-[#727272] !important': isThirdPlan }
            )}
          >
            {cardTitle}
          </div>
        </div>
      </div>
    </div>
  );
}
