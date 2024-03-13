import { useState } from 'react';
import './App.css';
import Card from './components/card/card';
import cn from 'classnames';

import data from './consts/data.json';

function App() {
  const [state, setState] = useState({
    lang: 'noLang',
    category: 'noCategory',
  });

  const onCategoryChange = (category: string) => {
    if (state.category !== category) {
      setState({...state, category: category});
      console.log(category);
    } else {
      setState({...state, category: 'noCategory'});
    }
  }

  const onLanguageChange = (lang: string) => {
    if (state.lang === 'noLang') {
      setState({...state, lang: lang})
    } else {
      if (state.category !== 'noCategory') {
        setState({...state, category: 'noCategory'});
      } else {
        setState({lang: 'noLang', category: 'noCategory'})
      }
    }
  }

  return (
    <div className="App flex bg-white h-screen justify-center items-center">
      <div className="relative block w-full h-[380px] my-auto">
        {state.category !== 'noCategory' && 
          <div className="absolute z-20 w-full flex gap-2 justify-center ">
            {
              data
              .filter(item => item.lang === state.lang)
              .flatMap(lang => lang.categories)
              .filter(cat => cat.category === state.category)
              .flatMap(subc => subc.subcategories.map(subcategory => 
                <Card 
                  key={subcategory.card}
                  openable 
                  cardTitle={subcategory.title}
                  text={subcategory.text}
                />)
              )
            }
          </div>
        }
        {state.lang !== 'noLang' && 
          <div className={cn("absolute z-10 flex gap-2 justify-center w-full", 
            {"top-10": state.lang !== 'noLang' && state.category !== 'noCategory'})}
          >
            {
              data
              .filter(item => item.lang === state.lang)
              .map(item => item.categories.map(category => 
                <Card
                  isSecondPlan={state.lang !== 'noLang' && state.category !== 'noCategory'} 
                  cardTitle={category.title} 
                  key={category.category}
                  onCardClick={
                    ()=> onCategoryChange(category.category)
                  }/>
              ))
            }
          </div>
        }
        <div className={cn("absolute flex gap-2 justify-center w-full z-0", 
          { "top-10": state.lang !== 'noLang' && state.category === 'noCategory'},
          { "top-20": state.lang !== 'noLang' && state.category !== 'noCategory'}
          )}
        >
          {data.map(item => 
            <Card
              isSecondPlan={ state.lang !== 'noLang' && state.category === 'noCategory'} 
              isThirdPlan={ state.lang !== 'noLang' && state.category !== 'noCategory'} 
              cardTitle={item.lang} 
              key={item.lang} 
              onCardClick={() => onLanguageChange(item.lang)}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
