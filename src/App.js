import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import MyList from './MyList';
import Blog from './Blog';
import { Profiler, useState } from 'react';
import Item from './Item';



let initialStories = [
  {
    id: 0,
    label: "Ankit's Story"
  },
  {
    id: 1,
    label: "Taylor's Story"
  }
];

function App() {

  let [stories, setStories] = useState(initialStories);

  function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    console.log("id : " + id + " startTime : " + startTime + " actualDuration : " + actualDuration + " baseDuration : " + baseDuration + " startTime : " + startTime + " phase : " + phase + " commitTime : " + commitTime);
  }

  return (
    // <Profiler onRender={onRender}>
    //   <div className="App">
    //     {/* <Counter></Counter> */}
    //     {/* <MyList></MyList> */}
    //     <Blog></Blog>
    //   </div>
    // </Profiler>

    <div className="App" style={{width:"100%",height:"100vh",textAlign:"center"}}>
      <Item stories={stories}></Item>
    </div>

  );
}

export default App;
