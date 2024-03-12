import { useEffect, useRef, useState } from "react";

export default function Card (props: {cardTitle: string, text?: string, onCardClick?: (event: any) => void,  isSecondPlan?: boolean, openable?: boolean}) {
  const {cardTitle, text, onCardClick, isSecondPlan, openable} = props;
  const [isOpen, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (openable) {
      const handleClickOutside = (event: MouseEvent) => {
        if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [openable]);

  return(
    <div ref={cardRef} className="relative w-[223px] h-auto bg-white rounded-[20px] border-2 border-[#008AFF] p-[6px] hover:bg-[#008AFF] hover:border-[#396E9A] hover:border-1">
        {isOpen && <div className="block absolute z-50 -left-6 -top-6 bg-slate-50 w-[263px] h-[381px] rounded-l border-4 border-black p-2s" onClick={()=> setOpen(false)}>{text}</div>}
        <div className="z-0 border-2 border-[#008AFF] rounded-[15px] bg-white">
          <div className="w-[200px] h-[300px]">img</div>
          { openable && <p className="text-center cursor-pointer" onClick={()=> setOpen(!isOpen)}>{ cardTitle }</p> }
          { !openable && <p className="text-center cursor-pointer" onClick={onCardClick}>{cardTitle}</p> }
        </div>
    </div>
  )};