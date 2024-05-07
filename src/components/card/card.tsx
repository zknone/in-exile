import { MouseEventHandler } from 'react';
import cn from 'classnames';
import { ScreenSize } from '../../types/data';
import Popup from '../popup/popup';
import usePopup from '../../hooks/usePopUp';

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
    openable = false,
    active,
    size = 'normal',
    onMouseEnter,
    onMouseLeave,
    isHovered,
    isNothingHovered,
    rotation = 0,
    img,
    altImg,
    screenSize
  } = props;

  const { isOpen, setOpen, cardRef } = usePopup();

  const imgUrl = `/images/${img}.jpg`;
  const altImgUrl = `/images/${altImg}.jpg`;

  return (
    <div className="relative">
      <Popup
        isOpen={isOpen}
        setOpen={setOpen}
        cardRef={cardRef}
        screenSize={screenSize}
        points={points}
        cardTitle={cardTitle}
      />
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
