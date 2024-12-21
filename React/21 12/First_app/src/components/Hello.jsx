//Creating and accessing array of object in components

function Hello() {
  const student = [
    {
      name : "Shyam" , 
      age : 20,
      height : 5.4,
      address : {
        state : "odisha" , 
        city : "sambalpur" , 
        pincode : 758965
      }
    },
    {
      name : "ram" , 
      age : 25,
      height : 5.9,
      address : {
        state : "odisha" , 
        city : "bargarh" , 
        pincode : 584595
      }
    },
    {
      name : "vyom" , 
      age : 45,
      height : 3.4,
      address : {
        state : "odisha" , 
        city : "sonepur" , 
        pincode : 467848
      }
    }
  ]
  
  return (
    <>
      {student.map((stud)=>{
       return (
        <h5>
        Name - {stud.name} , Age - {stud.age} , Height - {stud.height},
         Address - "{stud.address.state}" ,"{stud.address.city}" ,"{stud.address.pincode}"
       </h5>
       )
      })}
    </>
  );
}

export default Hello;
