import React, { useEffect } from 'react';
import { ZOHO } from '../../vendor/ZSDK';
import Menuheader from '../Menuheader/Menuheader';
import WriteToZohoFromMsg from '../Zohos/WriteToZohoFromMsg/WriteToZohoFromMsg';
import DeleteToZohoMsg from '../Zohos/DeleteToZohoMsg/DeleteToZohoMsg';
import LoadAllMsgs from '../Loaders/LoadAllMsgs/LoadAllMsgs';
import Board from '../Board/Board';
import './Zoho.css';

function App() {

  const [userAll, setUsr] = React.useState('');
  const [allMessages, getAllMessages] = React.useState('');
  const [userId, getUserId] = React.useState('');
  const [entity, getEntity] = React.useState('');
  const [mobile, getMobile] = React.useState('');
  const [mobileFromId, getWabaID] = React.useState(0);

  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState(null);
  
  useEffect(() => {
    
    async function init() {
      try{

        await ZOHO.embeddedApp.on("PageLoad",function(data) {
          //Custom Bussiness logic goes here
          let entity = data.Entity;
          let recordID = data.EntityId;
          getEntity(entity);
          getUserId(recordID.toString())
          // Set data we want from CRM into props
          ZOHO.CRM.API.getRecord({Entity:entity,RecordID:recordID})
            .then((data) => { 
              //window.myvar = data.data[0]['Mobile']
              getMobile(data.data[0]['Mobile'])
              setUsr(data.data[0]);
              
            })
            .then(() => {
              //select pre messages
              ZOHO.CRM.API.searchRecord({Entity: 'zeus4waba__Whatsapps', sort_order:"asc", Type:"criteria",Query:`(Name:equals:${recordID})`})
                .then((dataMessage => {
                  getAllMessages(dataMessage.data)
                  setIsLoaded(true);
                }))
            })
            
            .catch((e) => console.log(e))
    

            ZOHO.CRM.API.getOrgVariable("zeus4waba__WhatsAppBFrom").then(function(data){
              getWabaID(data.Success.Content);
            });
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
        <div className='contenido'> </div>
    </div>
    )
  } else {
    // API Data Loaded Succesfully: 
    // render the completed interface with data loaded, triggered by the state update of isLoaded and !error (no error)
    return (
        <div>
          <Board mobile={mobile} entity={entity} wabaId={mobileFromId} />
          <Menuheader usrAll={userAll} />
          <LoadAllMsgs messages={allMessages}/>
          <WriteToZohoFromMsg user={userId}/>
          <DeleteToZohoMsg />
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

