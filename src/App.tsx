import { useState } from 'react';
import './App.css';
import Card from './components/card/card';

import data from './consts/data.json';

function App() {
  const [state, setState] = useState({
    lang: 'noLang',
    category: 'noCategory'
  });

  console.log(state);

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
    };
  }

  return (
    <div className="App flex bg-[#50d71e] h-screen justify-center items-center">
      <div className="gap-x-2">
        {state.category !== 'noCategory' && 
          <div className="z-20 relative">
            <div className="absolute -top-20 flex gap-2 justify-center w-full">
              {
                data
                .filter(item => item.lang !== state.lang)
                .flatMap(lang => lang.categories)
                .filter(cat => cat.category === state.category)
                .flatMap(subc => subc.subcategories.map(subcategory => 
                  <Card 
                    key={subcategory.card} 
                    text={subcategory.text}
                  />)
                )
              }
            </div>
          </div>
        }
        {state.lang !== 'noLang' && 
          <div className="z-10 relative">
            <div className="absolute -top-10 flex gap-2 justify-center w-full">
              {
                data
                .filter(item => item.lang !== state.lang)
                .map(item => item.categories.map(category => 
                  <Card 
                    text={category.category} 
                    key={category.category}
                    onCardClick={
                      ()=> onCategoryChange(category.category)
                    }/>
                ))
              }
            </div>
          </div>}
        <div className="flex gap-2 justify-center w-full z-0">
          {data.map(item => 
            <Card 
              text={item.lang} 
              key={item.lang} 
              onCardClick={() => onLanguageChange(item.lang)}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
