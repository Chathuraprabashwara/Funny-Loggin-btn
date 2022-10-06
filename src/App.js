import { useState } from "react";




function App() {



  const mouse = (e) =>{
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";

    if (((330 <x ) && (x  <450) )    ){
     setAxiseX(0);
    // setAxiseY(10)
     console.log("got it")
    }
    else if((text.length > 8)){
      setAxiseX(0);
    }
    
    else{
      if((x  >850) ){
        setAxiseX(0)
    }else if((text.length >8)){
      setAxiseX(0)
    }
    else{
      setAxiseX(x)
      setAxiseY(y)
    }
      }
   
    // setAxiseX(x)
    // setAxiseY(y)

  //  console.log(coor)
  
  // console.log("mouse move")
  }
  

  const [text, setText] = useState("");
  const [axiseX, setAxiseX] = useState("");
  const [axiseY, setAxiseY] = useState("");
 
 //console.log(`${axiseX/10}`);
// console.log(`${axiseY/10}`);

console.log(text.length)

const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  transform: `translate(${axiseX/2}px, ${0}px)` ,
  marginTop:"10px",

};


  return (
    <div   >
<div >
  <div onMouseMove={(e) => {
    mouse(e)
  }}  className="rounded-lg z-40 drop-shadow-xl mt-20  bg-gradient-to-r from-cyan-500 to-blue-500 m-auto p-10 w-[550px] h-[450px]">
  <h1 className='text-3xl  text-yellow-50'>Login </h1>
  <input onChange={(e) => {
   setText( e.target.value)}} className="rounded-md  h-8  w-full mt-5 "  placeholder="Enter Passsword" type="password"></input>
  <button  style={mystyle}  >Login </button>
  <p className="text-sm text-white items-center ">you should add atleast 8 characterst for the password to loggin</p>
  </div>


</div>
    </div>
  );
}

export default App;
