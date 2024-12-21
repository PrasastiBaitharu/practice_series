//We can also use <> </> to wrap multiple components

function App(){
  return(
    <>
      <Hello/>
      <WelcomeMessage/>
    </>
  )
}

function Hello(){
  return <h1>Hello World</h1>
}
function WelcomeMessage(){
  return <h1>Welcome to React</h1>
}

export default App;