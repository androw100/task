
import './App.css';
import Class from './component/Class';
import FunCard from "./component/Fun"


function App() {
  return (
    <div className="App">
      <FunCard  
      text1="next js"
      text2="iam card component"
      />
      <FunCard  
      text1="next js"
      text2="iam card component"
      />
      
      <Class
      text1="react js"
      text2="iam card component" 
      />
      <Class
      text1="next js"
      text2="iam card component" 
      />
    </div>
  );
}

export default App;
