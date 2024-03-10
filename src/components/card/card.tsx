import { useEffect, useRef, useState } from "react";

export default function Card (props: {cardTitle: string, text?: string, onCardClick?: (event: any) => void,  isSecondPlan?: boolean, openable?: boolean}) {
    const {cardTitle, text, onCardClick, isSecondPlan, openable} = props;
    const [isOpen, setOpen] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
          setOpen(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

    return(
        <div ref={cardRef} className="relative w-[223px] h-[351px] bg-white rounded-xl border-2 border-black p-2">
            {isOpen && <div className="block absolute z-50 -left-6 -top-6 bg-slate-50 w-[263px] h-[381px] rounded-xl border-4 border-black p-2s" onClick={()=> setOpen(false)}>{text}</div>}
            <div className="z-0">
                <div className="w-[200px] h-[300px]">img</div>
                {
                    openable && <p className="text-center cursor-pointer" onClick={()=> setOpen(!isOpen)}>{ cardTitle }</p> 
                }
                {
                    !openable && <p className="text-center cursor-pointer" onClick={onCardClick}>{cardTitle}</p> 
                }
            </div>

        </div>
    )};