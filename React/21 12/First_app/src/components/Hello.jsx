//Creating variables and accessing them in components
let name  = "Shyam";
let age = 20;
let height = 5.4
function Hello(){
    return(
      <>
        <h1>My name is {name}</h1>
        <h1>I am {age} Years old</h1>
        <h1>I am {height} feet tall</h1>
      </>
    )
  }

export default Hello;