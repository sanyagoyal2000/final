//import {Link} from 'react-router-dom';
import {useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {useHistory} from 'react-router-dom';



function SignUp() {
    const [variableName, setVariableName] = useState("");

    
    const navigate = useHistory()
    
    const handleChange=()=>{
        if(variableName==='mentee'){
            navigate.push('/mentee');

        }
        else if(variableName==='mentor'){
            navigate.push('/mentor');

        }
        

        setVariableName("");
        
    }
    
    return (
        

        <>
        <Header/>
            <div className="grid grid-cols-2 mt-30 px-5 py-6">
                <div>
                    <img src="https://raw.githubusercontent.com/sanyagoyal2000/Pictures/c0267aeea9eefb64a8060a4a4873b94cae44b7f3/undraw_authentication_fsn5.svg" alt="signup"/>
                </div>
                <div className="mt-20 ml-5">
               <form className="flex flex-col bg-gray-100 rounded shadow-lg p-12 mt-12">
                   <h1 className="text-gray-800 font-semibold ">Not registered Yet</h1>
                   <hr/>
                   <br/>

                   <div className="flex flex-row items-center">
                   <input type="radio" name="variableName"
   value="mentor"
   onChange={(e) =>
   setVariableName("mentor")
   }
   checked={variableName === "mentor"}
           className="ml-12 mr-5"/>
                  <label >Here to Help</label><br/>
                  <input type="radio" id="css" name="variableName"
   value="mentee"
   onChange={(e) =>
   setVariableName("mentee")
   }
   checked={variableName === "mentee"}
            className="ml-10 mr-5"/>
                 <label >Here for Help</label><br/><br/>
                 </div>
                 <button className="bg-green-600 text-white active:bg-pink-600 font-bold uppercase text-xs mt-4 px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="submit" onClick={handleChange}>
          GO TO YOUR RESPECTIVE PAGE
        </button>

               </form>
               </div>
           </div>
           <Footer/>
        </>
    )
}

export default SignUp
