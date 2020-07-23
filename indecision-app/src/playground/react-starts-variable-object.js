const user = {
   name: 'Hyukho Song',
   age: 38,
   location: 'Dongtan'
}

function getLocation(location) {
   if(location) {
      return location;
   } else {
      return 'Unknown';
   }
}

function getLocation(location) {
   if(location) {
      return <p>Location: {location}</p>;
   }
}

var userName = 'Hyukho Song';
var userAge = 38;
var userLocation = 'Dongtan';

const templateTwo = (
   <div>
      {/* <h1>{user.name.toUpperCase()}</h1> */}
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
      {/* <p>Age: {user.age}</p> */}
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
      {/* <p>Location: {getLocation(user.location)}</p> */}
      {getLocation(user.location)/* if it is undefined, nothing shows up */}
   </div>
);