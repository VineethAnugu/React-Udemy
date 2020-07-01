import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NameTag from "./components/nameTag";

function App() {

  const removeLastName = BaseComponent => props =>{
    const newProps = {...props};
    delete newProps.lastName
    return <BaseComponent {...newProps}/>
  }

  const CleanName = removeLastName(NameTag)

  const addVIP = BaseComponent => props => {
    const extraProps = {
      isVIP: true
    }

    const newProps = {...props, ...extraProps}

    return <BaseComponent {...newProps} />
  }

  const VIPName = addVIP(NameTag)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="NamesHeading">Names</h1>
        <div>
          <VIPName firstName="Vineeth" lastName="Anugu" special={true}></VIPName>
          <NameTag firstName="Deepesh" lastName="Beeram"></NameTag>
          <CleanName firstName="Naveen" lastName="Yamparala"></CleanName>
          <NameTag firstName="Akash" lastName="Gurram" special={true}></NameTag>
        </div>
      </header>
    </div>
  );
}

export default App;
