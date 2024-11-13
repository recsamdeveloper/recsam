
import { useEffect } from 'react';
import './App.css';
import  './AppStore.css';
import { Appstore } from './componentes/Appstore';
import { Cubes } from './componentes/Cubes';
import { Playstore } from './componentes/Playstore';
function App() {

  const url = "recsam://recsam.com/createSubscriptionSuccess";

  function openLink() {
    window.open(url);
  }

  useEffect(() => {
    console.log(window.location.href);
  },[])

  return (
    <div className='App'>
      <div className='TitleContainer'><p className='Title'> RECSAM</p></div>
      <div style={{minHeight: "40vh", minWidth: "100vw"}}>
      </div>
      <Cubes></Cubes>
      <div className='TextContainer'><p className='Text'> Descarga la aplicación de RECSAM</p></div>
      <div className='AppContainer'>

        <Playstore></Playstore>
        <Appstore></Appstore>
      </div>
      <div className='linkContainer'><p className='linkText'>Si ya tienes la app y no se te ha redirigido haz click <a onClick={openLink} className='link'>aqui</a></p></div>
    </div>
  );
}

export default App;
