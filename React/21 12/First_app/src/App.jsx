//Using div is not the good way to wrap instead of that we will use React.Fragment
import React from "react";
function App(){
  return(
    <React.Fragment>
      <Hello/>
      <WelcomeMessage/>
    </React.Fragment>
  )
}

function Hello(){
  return <h1>Hello World</h1>
}
function WelcomeMessage(){
  return <h1>Welcome to React</h1>
}

export default App;