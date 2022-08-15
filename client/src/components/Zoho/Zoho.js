import React, { useEffect } from 'react';
import { ZOHO } from '../../vendor/ZSDK';
import Menuheader from '../Menuheader/Menuheader';
import LoadToMsgs from '../LoadToMsgs/LoadToMsgs';
import LoadFromMsgs from '../LoadFromMsgs/LoadFromMsgs'
import { filter } from 'lodash';
import './Zoho.css';

function App() {

  const [userAll, setUsr] = React.useState('');
  const [messagesToPrev, getMessagesTo] = React.useState('');
  const [messagesFromPrev, getMessagesFrom] = React.useState('');

  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    async function init() {
      try{

        await ZOHO.embeddedApp.on("PageLoad",function(data) {
          //Custom Bussiness logic goes here
          let entity = data.Entity;
          let recordID = data.EntityId;
    
          // Set data we want from CRM into props
          ZOHO.CRM.API.getRecord({Entity:entity,RecordID:recordID})
            .then((data) => { 

              window.myvar = data.data[0]['Mobile']
              setUsr(data.data[0]);
              
            })
            .then(() => {
              //select pre messages
              ZOHO.CRM.API.searchRecord({Entity: 'zeus4waba__Whatsapps', sort_order:"asc", Type:"criteria",Query:`(Name:equals:${recordID})`})
                .then((dataMessage => {
                  //Separar los mensajes To y From, para agregarlos al store correctamente
                  let messagesTo = filter(dataMessage.data, {'zeus4waba__Whatsapp_To': `${recordID}`})
                  let messagesFrom = filter(dataMessage.data, {'zeus4waba__Whatsapp_From': `${recordID}`})
                  
                  getMessagesTo(messagesTo)
                  getMessagesFrom(messagesFrom)
                  setIsLoaded(true);
                }))
            })
            
            .catch((e) => console.log(e))
    
          })
          
          return await ZOHO.embeddedApp.init();

      }catch(e){
        console.log(e)
      }

    }
    init();

}, [])

const ContentLoader = () =>{
  // handle rendering conditionally based on AJAX response
  if (error) {
      // API Data Error State: render the error state
    return (
        <div>Error</div>
    )

  } else if (!isLoaded) {
    // API Data Not Loaded: render the loading progress spinner
    return (
        <div className='contenedor'>
        <div className='contenido'> Loading CRM data....</div>
    </div>
    )
  } else {
    // API Data Loaded Succesfully: 
    // render the completed interface with data loaded, triggered by the state update of isLoaded and !error (no error)
    return (
        <div>
          <Menuheader usrAll={userAll} />
          <LoadToMsgs msgTo={messagesToPrev}/>
          <LoadFromMsgs msgFrom={messagesFromPrev} />
        </div>
      )
  }
}

return (
  <div>
    {ContentLoader()} 
  </div>
  );
}

export default App;

