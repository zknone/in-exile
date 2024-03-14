import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

export default function Card(props: {
  cardTitle: string;
  points?: string[];
  onCardClick?: (event: any) => void;
  isSecondPlan?: boolean;
  isThirdPlan?: boolean;
  openable?: boolean;
}) {
  const { cardTitle, points, onCardClick, isSecondPlan, isThirdPlan, openable } = props;
  const [isOpen, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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
        'relative w-[223px] h-auto bg-white rounded-[20px] border-2 border-[#008AFF] p-[6px]',
        'shadow-card',
        'hover:bg-[#008AFF] hover:border-[#396E9A] hover:border-1',
        { 'border-[#008AFF]/[0.8]': isSecondPlan },
        { 'border-[#008AFF]/[0.6]': isThirdPlan }
      )}
    >
      {isOpen && (
        <div
          className="block absolute z-50 -left-6 -top-6 w-[263px] h-[381px] rounded-[20px] border-2 border-[#FF6CFF] bg-[#FF6CFF] p-2"
          onClick={() => setOpen(false)}
        >
          <div className="w-full flex flex-col justify-between p-5 h-full border-2 rounded-[15px] border-[#FF6CFF] bg-white">
            <ul>
              {points && points.map((item, index) => <li className="pb-2" key={index}>{item}</li>)}
            </ul>
            <div className="font-bold">{cardTitle}</div>
          </div>

        </div>
      )}
      <div
        className={cn(
          'z-0 border-2 border-[#008AFF] rounded-[15px] bg-white',
          { 'border-[#008AFF]/[0.8]': isSecondPlan },
          { 'border-[#008AFF]/[0.6]': isThirdPlan }
        )}
      >
        <div className="w-[200px] h-[300px]">img</div>
        {openable && (
          <p className="text-center cursor-pointer" onClick={() => setOpen(!isOpen)}>
            {cardTitle}
          </p>
        )}
        {!openable && (
          <p
            className={cn(
              'text-center cursor-pointer',
              { 'opacity-[80%]': isSecondPlan },
              { 'opacity-[60%]': isThirdPlan }
            )}
            onClick={onCardClick}
          >
            {cardTitle}
          </p>
        )}
      </div>
    </div>
  );
}
