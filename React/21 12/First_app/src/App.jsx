//Wrapping multiple components using div inside return

function App(){
  return(
    <div>
      <Hello/>
      <WelcomeMessage/>
    </div>
  )
}

function Hello(){
  return <h1>Hello World</h1>
}
function WelcomeMessage(){
  return <h1>Welcome to React</h1>
}

export default App;