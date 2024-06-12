/*import React from 'react'
import Other from './Other'

const App = () => {
  const data={
    id:1,
    name:'karna',
    title:'mahabharat',
    relationship:'single'
    
  }
  return (
    <div>
      <Other component={data}/>
    </div>
  )
}

export default App*/

/*import React from 'react';
import TreeView from './TreeView';

const App = () => {
  return (
    <div>
      <TreeView />
    </div>
  );
};

export default App;*/

/*import React from 'react'
import Qrcode from './Components/Qrcodegen'
const App = () => {
  return (
    <div>
      <Qrcode/>
    </div>
  )
}

export default App*/

/*import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Home=lazy(()=>import('./Pages/Home'))
const About=lazy(()=>import('./Pages/About'))
function Head(){
  return (
    <>
    <h2><Link to='/'>Home</Link></h2>
    <h2><Link to='/about'>About</Link></h2>
    </>
  )
}
const App = () => {
  return (
    <Router>
      <Head/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;*/

/*import React from 'react'
import Form from './Components/Form'

const App = () => {
  return (
    <div>
      <Form/>
    </div>
  )
}

export default App*/

/*import React from 'react'
import LightDarkMode from './Components/ligh-dark-mode/Darkset'

const App = () => {
  return (
    <div>
      <LightDarkMode/>
    </div>
  )
}

export default App*/
/*import React from 'react'
import Example from './Components/Example'
import LoginForm from './Components/Example'

const App = () => {
  return (
    <div>
      <LoginForm/>
    </div>
  )
}

export default App*/
import React from 'react'
import LoginForm from './Components/Example'

const App = () => {
  return (
    <div>
      <LoginForm/>
    </div>
  )
}

export default App











