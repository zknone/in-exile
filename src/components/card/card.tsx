import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import cn from 'classnames';

export default function Card(props: {
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
  const cardRef = useRef<HTMLDivElement>(null);

  const imgUrl = `images/${img}.jpg`;
  const altImgUrl = `images/${altImg}.jpg`;

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

  console.log(rotation);

  return (
    <div className="relative">
      {isOpen && (
        <>
          <div className="popup-background"></div>
          <div
            ref={cardRef}
            className={cn(
              'block rounded-[40px] absolute z-50 -left-[35%] p-[11px] -top-[42%]  w-[408px] h-[647px] border-[2px] border-[#FF6CFF] bg-[#FF6CB6] p-2 shadow-card text-xl hover:bg-[#F93598] hover:border-[#B1256C] popup'
            )}
            onClick={() => setOpen(false)}
          >
            <div
              className={cn(
                'popup-content w-full rounded-[30px] flex flex-col justify-between h-full border-[2px] border-[#FF6CFF] bg-white hover:border-[#F93598] card'
              )}
            >
              <ul className="p-12 my-auto">
                {points &&
                  points.map((item, index) => (
                    <li className="pb-5" key={index}>
                      {item}
                    </li>
                  ))}
              </ul>
              <div className="font-bold text-center py-2 text-2xl">{cardTitle}</div>
            </div>
          </div>
        </>
      )}

      <div
        className={cn(
          'relative h-min-content rounded-[20px] border-[2px] shadow-card',
          { 'w-[223px] p-[6px]': size === 'normal' },
          { 'w-[321px] p-[8px]': size === 'big' },
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
            'grid z-0 border-[2px] rounded-[15px] bg-white truncate',
            { 'border-[#008AFF]': !isSecondPlan && !isThirdPlan },
            { 'border-[#2FA2FB]': !isHovered && !isNothingHovered },
            { 'border-[#2FA2FB]/[0.7]': isSecondPlan },
            { 'border-[#2FA2FB]/[0.5]': isThirdPlan }
          )}
          onClick={openable ? () => setOpen(!isOpen) : onCardClick}
        >
          <div
            className={cn(
              { 'w-[208px] h-full': size === 'normal', 'w-[300px] h-full': size === 'big' },
              { 'opacity-[0.7]': !isHovered && !isNothingHovered }
            )}
          >
            <img
              className={cn('transition-transform duration-300 transform hover:scale-110 inset-0', {
                'w-[208px] h-full': size === 'normal',
                'w-[300px] h-full': size === 'big'
              })}
              src={active ? altImgUrl : imgUrl}
              alt="cardTitle"
            />
          </div>
          <div
            className={cn(
              'font-bold text-center cursor-pointer py-2 border-t-2 border-[#008AFF] z-20 bg-white',
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
