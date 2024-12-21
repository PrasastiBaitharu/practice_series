//Creating and accessing nested object in components
const student = {
  name : "Shyam",
  age : 20,
  height : 5.4,
  address : {
    state : "odisha",
    city : "sambalpur",
    pincode: 768550
  }
}

function Hello() {
  return (
    <>
      <h1>My name is {student.name}</h1>
      <h1>I am {student.age} Years old</h1>
      <h1>I am {student.height} feet tall</h1>
      <h1>My location is {student.address.state},{student.address.city},{student.address.pincode}</h1>
    </>
  );
}

export default Hello;
