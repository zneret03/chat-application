import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
 
const Join = lazy(() => import('./components/Join/Join'));
const Chat = lazy(() => import('./components/Chat/Chat'));

const App = () => {
  return (
    <Suspense fallback={<div>Loadin...</div>}>
    <Router>
        <Route path="/" exact component={Join}/>
        <Route path="/chat" exact component={Chat}/>
    </Router>
    </Suspense>
  );
}

export default App;
