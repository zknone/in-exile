import { useRef, useState } from "react";
import Card from "../card/card";

  const cardRef = useRef<HTMLDivElement>(null);
  const [isCardActive, setCardsActive] = useState(false);

  const handlePopupHover = () => {
    setCardsActive(true);
  };

  const handlePopupLeave = () => {
    setCardsActive(false);
  };

export default function EntranceScreen ( props: {onClick: ()=> void}) {

    const {onClick} = props;
    return(
        <div className="relative">
            <div className="absolute right-[50%] -top-[130px] flex gap-2 justify-center">
            <div className="popup-background"></div>
            <div
                ref={cardRef}
                onMouseEnter={handlePopupHover}
                onMouseLeave={handlePopupLeave}
                className="block absolute z-50 w-[382px] h-[624px] rounded-[35px] border-2 border-[#FF6CFF] bg-[#FF6CB6] p-2 shadow-card text-xl hover:bg-[#F93598] hover:border-[#B1256C] popup"
                onClick={onClick}
            >
                <div className="popup-content w-full flex flex-col justify-between h-full border-2 rounded-[25px] border-[#FF6CFF] bg-white hover:border-[#F93598] card">
                <div className="p-12 my-auto">
                    123
                </div>
                <div className="font-bold text-center py-2 text-2xl">
                    1234
                </div>
                </div>
            </div>
            </div>
            <section className="absolute flex top-[30px] right-[50%] justify-center">
            <div className="absolute flex justify-center">
                <Card img='school' key='artist' cardTitle='artist' />
                <Card img='school' key='inner' cardTitle='inner' />
                <Card img='school' key='school' cardTitle='school' />
            </div>
            <div className="absolute -top-[20px] flex gap-3 justify-center">
                <Card img='school' key='artist' cardTitle='artist' />
                <Card img='school' key='inner' cardTitle='inner' />
                <Card img='school' key='school' cardTitle='school' />
            </div>
            <div className="absolute -top-[40px] flex gap-6 justify-center">
                <Card img='school' altImg='social-life' key='artist' cardTitle='artist' active={isCardActive}/>
                <Card img='school' key='inner' cardTitle='inner' active={isCardActive}/>
                <Card img='school' altImg='social-life' key='school' cardTitle='school' active={isCardActive}/>
            </div>
            </section>
        </div> 
    );
}