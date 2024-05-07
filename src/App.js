import './App.css'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import {Routes, Route} from 'react-router-dom'

const App = () => (
    <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/RegisterForm' Component={RegisterForm} />
    </Routes> 
    
)
export default App

 