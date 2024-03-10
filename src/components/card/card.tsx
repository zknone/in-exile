export default function Card (props: {text: string, onCardClick?: (event: any) => void,  isSecondPlan?: boolean, isThirdPlan?: boolean}) {
    const {text, onCardClick, isSecondPlan, isThirdPlan} = props;
    return(
        <div className="w-[223px] h-[351px] bg-white rounded-xl border-2 border-black p-2" key={text}>
            <div className="w-[200px] h-[300px]">img</div>
            <p className="text-center cursor-pointer" onClick={onCardClick}>{ text }</p>
        </div>
    )};