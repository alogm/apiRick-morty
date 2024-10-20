import './App.css'
import Card from './components/Card'
import useApiRick from './services/useApiRick'
import Nav from './components/Nav';

function App() {
const {data,filtered, handleSubmit} = useApiRick();
  return (
    <>
      <Nav
      fnSubmit={handleSubmit}
      />
      {data && <Card data = {data}/>}
    </>
  )
}

export default App
