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
  const onCategoryChang = () => {

  }

  const onLanguageChange = () => {
    //если язык не выбран, то он выбирается
    //если язык выбран, то он меняется на но лангвидж
    //если язык и категория выбраны, то язык не меняем, а возвращаемся к категории
  }


  return (
    <div className="App flex bg-[#50d71e] h-screen justify-center items-center">
      <div className="flex gap-x-2">
        {state.category !== 'noCategory' && 
          <div>
            субкатегории
          </div>
        }

        {state.lang !== 'noLang' && 
          <div className='flex'>
            {
              data.filter(item => item.lang !== state.lang).map(item => item.categories.map(category => 
                <Card text={category.category} onCardClick={() => setState({...state, category: category.category})}/>
              ))
            }
          </div>}

        {data.map(item => 
          <Card text={item.lang} key={item.lang} onCardClick={() => setState({...state, lang: item.lang})}/>
        )}
      </div>
    </div>
  );
}

export default App;
