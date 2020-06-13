import React from 'react';

import './App.css';
// import Hook from './Comp/Hook';
// import HookCounterThree from './Comp/HookCounterThree';
// import HookCounterFour from './Comp/HookCounterFour';
// import HookCounterFive from './Comp/HookCounterFive';
// import HookMouse from './Comp/HookMouse';
// import HookIntervalCounter from './Comp/HookIntervalCounter';
// import DataFetching from './Comp/DataFetching';
// import ComponentC from './Comp/ComponentC';

// import Reducer from './Comp/Reducer';
// import DataFetchingOne from './Comp/DataFetchingOne';
// import Counter from './Comp/Counter';
// import HookCounter from './Comp/HookCounter';
import DataFetchingOne from './components/DataFetchingOne';
import Home from './containers/Home/index'

export const UserContext =React.createContext()
export const ChannelContext=React.createContext()



function App() {
  return (
    <div className="App">

<Home />

{/* 
<HookCounter /> */}
{/* <Counter /> */}
{/* <DataFetchingOne /> */}
{/* <Reducer /> */}


 {/* <UserContext.Provider value={'sultan'}>
   <ChannelContext.Provider value={'helloS'}>
   <ComponentC />
   </ChannelContext.Provider>
  
   
   </UserContext.Provider>   */}

   </div>
     );

    }
// <DataFetching />

// {/* <HookIntervalCounter /> */}
// {/* <HookMouse/ /> */}
//    {/* <HookCounterFive /> */}
// {/* <HookCounterThree /> */}
// {/* <HookCounterFour /> */}


//    {/* <Hook /> */}
 



export default App;
