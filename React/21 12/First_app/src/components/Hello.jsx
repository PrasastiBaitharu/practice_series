//Creating and accessing object in components
const student = {
  name : "Shyam",
  age : 20,
  height : 5.4
}

function Hello() {
  return (
    <>
      <h1>My name is {student.name}</h1>
      <h1>I am {student.age} Years old</h1>
      <h1>I am {student.height} feet tall</h1>
      
    </>
  );
}

export default Hello;
