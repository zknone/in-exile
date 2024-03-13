import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

export default function Card(props: {
  cardTitle: string;
  text?: string;
  onCardClick?: (event: any) => void;
  isSecondPlan?: boolean;
  isThirdPlan?: boolean;
  openable?: boolean;
}) {
  const { cardTitle, text, onCardClick, isSecondPlan, isThirdPlan, openable } = props;
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
          className="block absolute z-50 -left-6 -top-6 bg-slate-50 w-[263px] h-[381px] rounded-l border-4 border-black p-2s"
          onClick={() => setOpen(false)}
        >
          {text}
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
