/**this is the root component. 
 * React apps typically have one root component
 * that's always rendered to the DOM.
 * It then accesses other components
 * to render them to the DOM (nested)
 */

//for staging files in git
//https://devconnected.com/how-to-git-add-all-files/#:~:text=The%20easiest%20way%20to%20add,%E2%80%9D%20option%20for%20%E2%80%9Call%E2%80%9D.&text=In%20this%20case%2C%20the%20new,that%20they%20will%20be%20staged.

import Ninjas from './Ninjas';
const App =() => {
  return (
    <div className="App">
      <h1>My first React app!</h1>
      <p>Welcome!</p>
      <Ninjas name="Ryu" age="25" belt="black"/>
    </div>
  );
}

export default App;
