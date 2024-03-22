import { useRef, useState } from 'react';
import './App.css';
import Card from './components/card/card';
import cn from 'classnames';

import data from './consts/data.json';

function App() {
  const [state, setState] = useState({
    lang: 'noLang',
    category: 'noCategory'
  });

  const onCategoryChange = (category: string) => {
    if (state.category !== category) {
      setState({ ...state, category: category });
      console.log(category);
    } else {
      setState({ ...state, category: 'noCategory' });
    }
  };

  const onLanguageChange = (lang: string) => {
    if (state.lang === 'noLang') {
      setState({ ...state, lang: lang });
    } else {
      if (state.category !== 'noCategory') {
        setState({ ...state, category: 'noCategory' });
      } else {
        setState({ lang: 'noLang', category: 'noCategory' });
      }
    }
  };

  const [isOpen, setOpen] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div className="App flex bg-white h-screen justify-center items-center font-body">
      <div className="relative block w-full h-[380px] my-auto">
        {isOpen &&
          <div className="relative">
            <div className="absolute right-[50%] -top-[130px] flex gap-2 justify-center">
              <div className="popup-background"></div>
              <div
                ref={cardRef}
                className="block absolute z-50 w-[382px] h-[624px] rounded-[35px] border-2 border-[#FF6CFF] bg-[#FF6CB6] p-2 shadow-card text-xl hover:bg-[#F93598] hover:border-[#B1256C] popup"
                onClick={() => setOpen(false)}
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
                <Card img={data[0].categories[0].img} key={data[0].categories[0].title} cardTitle={data[0].categories[0].title} />
                <Card img={data[0].categories[0].img} key={data[0].categories[0].title} cardTitle={data[0].categories[0].title} />
                <Card img={data[0].categories[0].img} key={data[0].categories[0].title} cardTitle={data[0].categories[0].title} />
              </div>
              <div className="absolute -top-[20px] flex gap-3 justify-center">
                <Card img={data[0].categories[0].img} key={data[0].categories[0].title} cardTitle={data[0].categories[0].title} />
                <Card img={data[0].categories[0].img} key={data[0].categories[0].title} cardTitle={data[0].categories[0].title} />
                <Card img={data[0].categories[0].img} key={data[0].categories[0].title} cardTitle={data[0].categories[0].title} />
              </div>
              <div className="absolute -top-[40px] flex gap-6 justify-center">
                <Card img={data[0].categories[0].img} key={data[0].categories[0].title} cardTitle={data[0].categories[0].title} />
                <Card img={data[0].categories[0].img} key={data[0].categories[0].title} cardTitle={data[0].categories[0].title} />
                <Card img={data[0].categories[0].img} key={data[0].categories[0].title} cardTitle={data[0].categories[0].title} />
              </div>
            </section>

            
          </div> 

        }

      {!isOpen && 
        <>
          {state.category !== 'noCategory' && (
            <div className="absolute z-20 w-full flex gap-2 justify-center">
              {data
                .filter((item) => item.lang === state.lang)
                .flatMap((lang) => lang.categories)
                .filter((cat) => cat.category === state.category)
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
          )}
          {state.lang !== 'noLang' && (
            <div
              className={cn('absolute z-10 flex gap-2 justify-center w-full', {
                'top-10': state.lang !== 'noLang' && state.category !== 'noCategory'
              })}
            >
              {data
                .filter((item) => item.lang === state.lang)
                .map((item) =>
                  item.categories.map((category) => (
                    <Card
                      img={category.img}
                      isSecondPlan={state.lang !== 'noLang' && state.category !== 'noCategory'}
                      cardTitle={category.title}
                      key={category.category}
                      onCardClick={() => onCategoryChange(category.category)}
                    />
                  ))
                )}
            </div>
          )}
          <div
            className={cn(
              'absolute flex gap-2 justify-center w-full z-0',
              {
                'top-10': state.lang !== 'noLang' && state.category === 'noCategory'
              },
              {
                'top-20': state.lang !== 'noLang' && state.category !== 'noCategory'
              }
            )}
          >
            {data.map((item) => (
              <Card
                img={item.img}
                isSecondPlan={state.lang !== 'noLang' && state.category === 'noCategory'}
                isThirdPlan={state.lang !== 'noLang' && state.category !== 'noCategory'}
                cardTitle={item.lang}
                key={item.lang}
                onCardClick={() => onLanguageChange(item.lang)}
              />
            ))}
          </div>
        </>
      }
      </div>
    </div>
  );
}

export default App;
