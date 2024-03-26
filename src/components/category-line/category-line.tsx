import { Dataset } from "../../types/data";
import Card from "../card/card";

const CategoryLine = (props: {data: Dataset, category: string, lang: string}) => {
    const {data, category, lang} = props;
    return (
    <>
        <div className="absolute z-20 w-full flex gap-2 justify-center">
                {data
                .filter((item) => item.lang === lang)
                .flatMap((lang) => lang.categories)
                .filter((cat) => cat.category === category)
                .flatMap((subc) =>
                    subc.subcategories.map((subcategory) => (
                    <Card
                        img={subcategory.img}
                        key={subcategory.card}
                        openable
                        cardTitle={subcategory.title}
                        points={subcategory.text}
                    />
                    ))
                )}
        </div>
    </>)}

CategoryLine.displayName = 'CategoryLine';

export default CategoryLine;
