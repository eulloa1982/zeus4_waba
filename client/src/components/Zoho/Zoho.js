import React, { useEffect } from 'react';
import { ZOHO } from '../../vendor/ZSDK';
import Menuheader from '../Menuheader/Menuheader'


 function App() {

  console.log("INITIALIZING")

    //const [zohoContactId, setContactId] = React.useState('');
    //const [usrEmail, setUsrEmail] = React.useState('');
    //const [usrMobile, setUsrMobile] = React.useState('');
    const [userAll, setUsr] = React.useState('');

    const [isLoaded, setIsLoaded] = React.useState(false);
    const [error, setError] = React.useState(null);

  useEffect(() => {
    async function init() {
      console.log("BEFORE PAGELOAD");
      try{

        await ZOHO.embeddedApp.on("PageLoad",function(data) {
          
            //console.log("PageLoad", data);
    
            //Custom Bussiness logic goes here
            let entity = data.Entity;
            let recordID = data.EntityId;
    
            // Set data we want from CRM into props
            ZOHO.CRM.API.getRecord({Entity:entity,RecordID:recordID})
              .then((data) => { 
                console.log(data)
        
                //setContactId(data.data[0].id)
                //setUsrEmail(data.data[0]['Email'])
                //setUsrMobile(data.data[0]['Mobile'])
                window.myvar = data.data[0]['Mobile']
                setUsr(data.data[0]);
                
                setIsLoaded(true);
      
              }).catch((e) => console.log(e))
    
          })
          
          console.log("AFTER PAGELOAD");
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
        <div align="center">
        <div variant="h2"> Loading data....</div>
    </div>
    )
    } else {
        // API Data Loaded Succesfully: 
        // render the completed interface with data loaded, triggered by the state update of isLoaded and !error (no error)
        return (
            <Menuheader usrAll={userAll} />
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

