
        
        
        // document.getElementById(ballform).onsubmit = greet; //do not write greet(); because we dont want to call it

        // function greet()
        // {
        //     alert("hi there")
            
        // }
document.getElementById("ballform").onsubmit = function()   // this is an example of an lamba function being used
{
        let name = document.getElementById("input").value;
        alert("hi " + name);
                       
};
        
        
           
