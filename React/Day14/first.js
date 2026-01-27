import React from "react";
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"; //importing Provider from react-redux
import stores from "./stores"; //importing store created in Stores.js
import Counting from "./Counting";

function App(){
    
    console.log(stores);

    return (
        <Provider store={stores}> {/* to provide access of store to all components inside Provider */}
        <Counting></Counting>
        </Provider>
  
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);



