/**this is the root component. 
 * React apps typically have one root component
 * that's always rendered to the DOM.
 * It then accesses other components
 * to render them to the DOM (nested)
 */

import Ninjas from './Ninjas';
function App() {
  return (
    <div className="App">
      <h1>My first React app!</h1>
      <p>Welcome!</p>
      <Ninjas />
    </div>
  );
}

export default App;
