import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import cn from 'classnames';

export default function Card(props: {
  cardTitle: string;
  img: string;
  points?: string[];
  onCardClick?: MouseEventHandler<HTMLDivElement>;
  isSecondPlan?: boolean;
  isThirdPlan?: boolean;
  openable?: boolean;
  active?: boolean;
  altImg?: string;
  size?: 'normal' | 'big';
}) {
  const { cardTitle, points, onCardClick, isSecondPlan, isThirdPlan, openable, active, size = 'normal' } = props;
  const [isOpen, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imgUrl = `/images/${props.img}.jpg`;
  const altImgUrl = `/images/${props.altImg}.jpg`;

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
    <div
      className={cn(
        'relative h-min-content rounded-[20px] border-2 p-[6px] shadow-card',
        {'w-[223px]': size === 'normal'},
        {'w-[303px]': size === 'big'},
        'hover:bg-[#008AFF] hover:border-[#396E9A] hover:border-1',
        {'border-[#008AFF] bg-white': !active},
        {'border-[#396E9A] bg-[#008AFF] border-1': active},
        { 'border-[#008AFF]/[0.8]': isSecondPlan },
        { 'border-[#008AFF]/[0.6]': isThirdPlan  },
      )}
    >
      {isOpen && (
        <>
          <div className="popup-background"></div>
          <div
            ref={cardRef}
            className="block absolute z-50 -left-[35%] -top-[42%] w-[408px] h-[647px] rounded-[35px] border-2 border-[#FF6CFF] bg-[#FF6CB6] p-2 shadow-card text-xl hover:bg-[#F93598] hover:border-[#B1256C] popup"
            onClick={() => setOpen(false)}
          >
            <div className="popup-content w-full flex flex-col justify-between h-full border-2 rounded-[25px] border-[#FF6CFF] bg-white hover:border-[#F93598] card">
              <ul className="p-12 my-auto">
                {points &&
                  points.map((item, index) => (
                    <li className="pb-5" key={index}>
                      {item}
                    </li>
                  ))}
              </ul>
              <div className="font-bold text-center py-2 text-2xl">
                {cardTitle}
              </div>
            </div>
          </div>
        </>
      )}
      <div
        className={cn(
          'z-0 border-2 border-[#008AFF] rounded-[15px] bg-white truncate',
          { 'border-[#008AFF]/[0.8]': isSecondPlan },
          { 'border-[#008AFF]/[0.6]': isThirdPlan }
        )}
        onClick={ openable ? () => setOpen(!isOpen): onCardClick }
      >
        <img className={cn(
          {'w-[223px]': size === 'normal'},
          {'w-[303px]': size === 'big'}, 
          'h-min-content')} src={active ? altImgUrl : imgUrl} alt="cardTitle" />
          <div
            className={cn(
              'font-bold text-center cursor-pointer py-2 border-t-2 border-[#008AFF]',
              { 'opacity-[80%]': isSecondPlan },
              { 'opacity-[60%]': isThirdPlan }
            )}
          >
            {cardTitle}
          </div>
      </div>
    </div>
  );
}
