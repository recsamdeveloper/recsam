
import { useEffect } from 'react';
import './App.css';
import  './AppStore.css';
import { Appstore } from './componentes/Appstore';
import { Cubes } from './componentes/Cubes';
import { Playstore } from './componentes/Playstore';
function App() {

  const urlSuccess = "recsam://recsam.com/createSubscriptionSuccess";
  const urlSubCancel = "recsam://recsam.com/createSubscriptionCancel";

  const urlEdit = "recsam://recsam.com/editProfile";
  const urlEditCancel = "recsam://recsam.com/editSubscriptionCancel"
  const other = "recsam://recsam.com/login";

  let destination = other;

  if(window.location.href === "https://recsamdeveloper.github.io/recsam/#SuccessNewUser"){
    destination = urlSuccess
  }
  if(window.location.href === "https://recsamdeveloper.github.io/recsam/#CancelNewUser"){
    destination = urlSubCancel
  }
  if(window.location.href === "https://recsamdeveloper.github.io/recsam/#SuccessEdit"){
    destination = urlEdit
  }
  if(window.location.href === "https://recsamdeveloper.github.io/recsam/#CancelEdit"){
    destination = urlEditCancel
  }

  if(window.location.href === "https://recsamdeveloper.github.io/recsam/#Edit"){
    destination = urlEdit
  }



  return (
    <div className='App'>
      <div className='TitleContainer'><p className='Title'> RECSAM</p></div>
      <div style={{minHeight: "40vh", minWidth: "100vw"}}>
      </div>
      <Cubes></Cubes>
      <div className='ButtonStyle' onClick={() => window.open(destination)} ><p className='TextButton'>  Haz click aquí para regresar a la app →</p></div>
      <div className='TextContainer'><p className='Text'> Descarga la aplicación de RECSAM</p></div>
      <div className='AppContainer'>

        <Playstore></Playstore>
        <Appstore></Appstore>
      </div>
    </div>
  );
}

export default App;
