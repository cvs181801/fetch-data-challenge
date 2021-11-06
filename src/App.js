
import './App.css';
import React from "react"
import DataFetcher from "./components/DataFetcher"

function App() {    
    return (
        <div>
            <DataFetcher url="https://swapi.dev/api/people/1/">
                {(data, loading) => { //this.props.children in DataFetcher refers to this function.  This is the child prop!  We pass the data and the loading status to this function.
                    return (
                      loading ? <h1>loading...</h1> : <p>{JSON.stringify(data)}</p>
                      
                    )
                 }}
            </DataFetcher>
        </div>
    )
}

export default App
