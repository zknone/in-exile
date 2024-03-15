import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

export default function Card(props: {
  cardTitle: string;
  img: string;
  points?: string[];
  onCardClick?: (event: any) => void;
  isSecondPlan?: boolean;
  isThirdPlan?: boolean;
  openable?: boolean;
}) {
  const { cardTitle, points, onCardClick, isSecondPlan, isThirdPlan, openable } = props;
  const [isOpen, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imgUrl = `/static/${props.img}.jpg`;

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
      ref={cardRef}
      className={cn(
        'relative w-min-content h-min-content bg-white rounded-[20px] border-2 border-[#008AFF] p-[6px]',
        'shadow-card',
        'hover:bg-[#008AFF] hover:border-[#396E9A] hover:border-1',
        { 'border-[#008AFF]/[0.8]': isSecondPlan },
        { 'border-[#008AFF]/[0.6]': isThirdPlan }
      )}
    >
      {isOpen && (
        <div
          className="block absolute z-50 -left-[35%] -top-[30%] w-[380px] h-[548px] rounded-[20px] border-2 border-[#FF6CFF] bg-[#FF6CFF] p-2"
          onClick={() => setOpen(false)}
        >
          <div className="w-full flex flex-col justify-between h-full border-2 rounded-[15px] border-[#FF6CFF] bg-white">
            <ul className="p-5">
              {points &&
                points.map((item, index) => (
                  <li className="pb-5" key={index}>
                    {item}
                  </li>
                ))}
            </ul>
            <div className="font-bold text-center py-2 border-t-2 border-[#FF6CFF]">{cardTitle}</div>
          </div>
        </div>
      )}
      <div
        className={cn(
          'z-0 border-2 border-[#008AFF] rounded-[15px] bg-white truncate',
          { 'border-[#008AFF]/[0.8]': isSecondPlan },
          { 'border-[#008AFF]/[0.6]': isThirdPlan }
        )}
      >
        <img className="w-[200px] h-[300px]" src={imgUrl} alt="cardTitle" />
        {openable && (
          <p className="text-center cursor-pointer py-2 border-t-2 border-[#008AFF]" onClick={() => setOpen(!isOpen)}>
            {cardTitle}
          </p>
        )}
        {!openable && (
          <div
            className={cn(
              "text-center cursor-pointer py-2 border-t-2 border-[#008AFF]",
              { 'opacity-[80%]': isSecondPlan },
              { 'opacity-[60%]': isThirdPlan }
            )}
            onClick={onCardClick}
          >
            {cardTitle}
          </div>
        )}
      </div>
    </div>
  );
}
