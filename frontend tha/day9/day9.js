//USE OF call(),apply() and bind()
document.write("check the console");
document.write("   ,  use of call, apply and bind");
const person1 = {
    firstName:"Kashish",
    lastName: "Tibrewal"
  }
  const person2 = {
    firstName:"Arpit",
    lastName: "Tibrewal"
  }
  
  function fullName(city,college)
  {
    console.log(this.firstName + " " + this.lastName + "," + city + "," + college);
      
    
  }
  //call()

 fullName.call(person1, "Gorakhpur", "KIET");
 fullName.call(person2, "Ghaziabad", "RKGIT");

  //apply()

 fullName.apply(person1, ["Gorakhpur", "KIET"]);
 fullName.apply(person2, ["Ghaziabad", "RKGIT"]);

 //bind()

 const p1 = fullName.bind(person1, "Gorakhpur", "KIET");
 const p2 = fullName.bind(person2, "Ghaziabad", "RKGIT");
 console.log(p1);
 console.log(p2);







