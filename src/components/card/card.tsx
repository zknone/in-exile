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
    <>
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
          'flex flex-col w-max h-full relative shadow-card',
          { 'border-[0.8px] rounded-[7px] p-[1px] max-w-[63px]': screenSize === 'mobile' },
          { 'border-[1px] p-[2px] rounded-[9px] max-w-[195px]': screenSize === 'tablet-m' },
          { 'border-[2px] p-[2px] rounded-[12px] max-w-[265px]': screenSize === 'tablet-l' },
          { 'border-[2px] p-[2px] rounded-[18px] max-w-[195px]': screenSize === 'tabletop' },
          { 'border-[2px] p-[3.5px] rounded-[25px] max-w-[265px]': screenSize === 'default' },
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
            'flex flex-col justify-between z-0 bg-white truncate',
            { 'border-[#008AFF]': !isSecondPlan && !isThirdPlan },
            { 'border-[#2FA2FB]': !isHovered && !isNothingHovered },
            { 'border-[#2FA2FB]/[0.7]': isSecondPlan },
            { 'border-[#2FA2FB]/[0.5]': isThirdPlan },
            { 'border-[0.5px] rounded-[5px]': screenSize === 'mobile' },
            { 'border-[1px] rounded-[7px]': screenSize === 'tablet-m' },
            { 'border-[2px] rounded-[9px]': screenSize === 'tablet-l' },
            { 'border-[2px] rounded-[13px]': screenSize === 'tabletop' },
            { 'border-[2px] rounded-[20px]': screenSize === 'default' }
          )}
          onClick={openable ? () => setOpen(!isOpen) : onCardClick}
        >
          <div className="flex flex-1">
            <img
              className={cn(
                'object-cover w-auto h-auto transition-transform duration-300 transform hover:scale-110'
              )}
              src={active ? altImgUrl : imgUrl}
              alt="cardTitle"
            />
          </div>
          <div
            className={cn(
              'font-bold text-center cursor-pointer py-2 border-[#008AFF] z-20 bg-white max-w-full',
              'text-[calc(4px_+_16_*_((100vw_-_360px)_/_(1600_-_360)))]',
              { 'text-[#505050] border-[#2FA2FB]': !isHovered && !isNothingHovered },
              { 'opacity-[80%] text-[#727272] !important': isSecondPlan },
              { 'opacity-[60%] text-[#727272] !important': isThirdPlan },
              { 'pt-[2px] pb-[3px] border-t-2': screenSize === 'mobile' },
              { 'pt-[3px] pb-[5px] border-t-2': screenSize === 'tablet-m' },
              { 'pt-[3px] pb-[5px] border-t-2': screenSize === 'tablet-l' },
              { 'pt-[5px] pb-[9px] border-t-2': screenSize === 'tabletop' },
              { 'pt-[7px] pb-[12px] border-t-2': screenSize === 'default' }
            )}
          >
            {cardTitle}
          </div>
        </div>
      </div>
    </>
  );
}
