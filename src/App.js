
import { useEffect } from 'react';
import './App.css';
import  './AppStore.css';
import { Appstore } from './componentes/Appstore';
import { Cubes } from './componentes/Cubes';
import { Playstore } from './componentes/Playstore';
function App() {

  const urlSuccess = "recsam://recsam.com/createSubscriptionSuccess";
  const urlCancel = "recsam://recsam.com/createSubscriptionCancel";
  const urlEdit = "recsam://recsam.com/editProfile";
  const other = "recsam://recsam.com/login";

  
  function openLinkEffect() {
    if(window.location.href === "https://recsamdeveloper.github.io/recsam/#Success"){
      window.location.replace(urlSuccess);
    }

    if(window.location.href === "https://recsamdeveloper.github.io/recsam/#Cancel"){
      window.location.replace(urlCancel);
    }

    if(window.location.href === "https://recsamdeveloper.github.io/recsam/#Edit"){
      window.location.replace(urlEdit);
    }
  }

  function openLinkClick() {
    if(window.location.href === "https://recsamdeveloper.github.io/recsam/#Success"){
      window.location.replace(urlSuccess);
    }

    if(window.location.href === "https://recsamdeveloper.github.io/recsam/#Cancel"){
      window.location.replace(urlCancel);
    }

    if(window.location.href === "https://recsamdeveloper.github.io/recsam/#Edit"){
      window.location.replace(urlEdit);
    }

    window.location.replace(other);
  }

  setTimeout(() => {
    openLinkEffect();
  }, 2000);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      openLinkEffect();
    }, 2000);

    return () => clearTimeout(timeoutId);
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
      <div className='linkContainer'><p className='linkText'>Si ya tienes la app y no se te ha redirigido haz click <a onClick={openLinkClick} className='link'>aqui</a></p></div>
    </div>
  );
}

export default App;
