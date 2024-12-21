//Making the global variable to local

function Hello() {
  let name = "Shyam";
  let age = 20;
  let height = 5.4;
  let hobbies = ["Photography", "Travelling", "Gaming"];
  function mssg() {
    return <h1>Good luck for react carrier</h1>;
  }
  return (
    <>
      <h1>My name is {name}</h1>
      <h1>I am {age} Years old</h1>
      <h1>I am {height} feet tall</h1>
      <h1>
        My hobbies are -
        {hobbies.map((hobby) => {
          return (
            <ul>
              <li>"{hobby}"</li>
            </ul>
          );
        })}
      </h1>
      {mssg()}
      <h3>Total rating = {10 + 20}</h3>
    </>
  );
}

export default Hello;
