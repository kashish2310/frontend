//OBJECT ASSIGNMENT

//1

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    
    console.log(Object.keys(student).toString());


//2

var student =  { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12  };
  console.log(student);
  delete student.rollno;
  console.log(student);

  //3

  var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    
    console.log(Object.keys(student).length);

//4

var library = [
    {
    author : "bill gates",
    title : "the road ahead",
    readingStatus : true
    },
    {
    author : "steve jobs",
    title : "walter isaacson",
    readingStatus : true
    },
    {
    author : "suzane collins",
    title : "Mockongjay",
    readingStatus : false
    }
    ];
    function stat_books () {
    var result = "";
    for(var x in library) {
    if(library[x].readingStatus)
    library[x].readingStatus = "Already read";
    else
    library[x].readingStatus = "You steel need to read";
    result += library[x].title + ", " + library[x].author + ", " +
    library[x].readingStatus + "." + "\n";
    }
    return result ;
    }
    console.log(stat_books());

    //5

    function CylinderVolume(radius, height) {
        this.radius = radius;
        this.height = height;
        this.volume = function() { return (Math.PI*this.radius*this.radius*this.height).toFixed(4);
        }
        }
        
        let test = new CylinderVolume(5 , 3);
        console.log('Volume of this cylinder is ' + test.volume() + ' units squared.'); 
        // Volume of this cylinder is 235.6194 units squared.

        //6


        var library = [ 
   {
    title: 'Bill Gates',
    author: 'The Road Ahead',
    libraryID: 1254
},
{
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    libraryID: 4264
},
{
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
}];

var sort_by = function(field_name, reverse, initial){

var key = initial ?
    function(x)
          {
            return initial(x[field_name]);
          } :
    function(x) 
          {
            return x[field_name];
          };

reverse = !reverse ? 1 : -1;

return function (x, y) {
    return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
  } ;
};


var newobj = library.sort(sort_by('libraryID', true, parseInt));

console.log(newobj);


        
        