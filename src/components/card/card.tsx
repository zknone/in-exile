import { MouseEventHandler } from 'react';
import cn from 'classnames';
import { ScreenSize } from '../../types/data';
import Popup from '../popup/popup';
import usePopup from '../../hooks/usePopUp';

export default function Card(props: {
  visible?: boolean;
  className?: string;
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
    visible = true,
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
    screenSize,
    className
  } = props;

  const { isOpen, setOpen, cardRef } = usePopup();

  const imgUrl = `images/${img}.jpg`;
  const altImgUrl = `images/${altImg}.jpg`;

  return (
    <div
      className={cn('relative max-w-[100%]', {
        invisible: !visible
      })}
    >
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
          'flex flex-col w-full relative shadow-card',
          className,
          {
            'border-[calc(21vw*0.007)] p-[calc(21vw*0.013)] rounded-[1.3vw]':
              screenSize !== 'default'
          },
          { 'border-[2px] p-[3.2px] rounded-[25px]': screenSize === 'default' },
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
            'flex w-full h-full flex-col justify-between z-0 bg-white truncate',
            { 'border-[#008AFF]': !isSecondPlan && !isThirdPlan },
            { 'border-[#2FA2FB]': !isHovered && !isNothingHovered },
            { 'border-[#2FA2FB]/[0.7]': isSecondPlan },
            { 'border-[#2FA2FB]/[0.5]': isThirdPlan },
            { 'border-[calc(21vw*0.007)] rounded-[calc(1.3vw*0.7)]': screenSize !== 'default' },
            { 'border-[2px] rounded-[20px]': screenSize === 'default' }
          )}
          onClick={openable ? () => setOpen(!isOpen) : onCardClick}
        >
          <div className="flex flex-1">
            <img
              className={cn(
                'object-cover w-auto h-auto transition-transform duration-300 transform hover:scale-110'
              )}
              src={`/${active ? altImgUrl : imgUrl}`}
              alt="cardTitle"
            />
          </div>
          <div
            className={cn(
              'font-bold text-center cursor-pointer py-2 border-[#008AFF] z-20 bg-white w-full',
              { 'text-[#505050] border-[#2FA2FB]': !isHovered && !isNothingHovered },
              { 'opacity-[80%] text-[#727272] !important': isSecondPlan },
              { 'opacity-[60%] text-[#727272] !important': isThirdPlan },
              {
                'border-t-[calc(21vw*0.007)] pt-[0.35vw] pb-[0.6vw] text-[calc(4px_+_15_*_((100vw_-_375px)_/_(1600_-_375)))]':
                  screenSize !== 'default'
              },
              { 'pt-[7px] pb-[12px] border-t-[2px] text-[22px]': screenSize === 'default' }
            )}
          >
            {cardTitle}
          </div>
        </div>
      </div>
    </div>
  );
}
