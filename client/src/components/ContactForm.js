import {useState} from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

 

 function handleSubmit(){

 }
  
  return (
       

        <div className=" flex flex-row justify-items bg-gray-200 text-gray-100 px-8 py-12">
              <div className="text-center w-full">
                <img src="https://raw.githubusercontent.com/sanyagoyal2000/Pictures/6931e3c979c02135fb08fd72e76bef5fa3d7fe3b/undraw_contact_us_15o2.svg" alt="contactUs"/>

                  </div>
                
                  <div className="text-center w-full">
                     <form onSubmit={handleSubmit}>
                     <div className="mt-8">   
                    <label className="uppercase text-sm text-gray-600 font-bold">Full Name</label>
                    <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text" placeholder="John Doe"
                      name="userName"
                      value={name}
        onChange={(e) => setName(e.target.value)}/>
                  </div>
                  <div className="mt-8">
                    <label for className="uppercase text-sm text-gray-600 font-bold">Email</label>
                    <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text" placeholder="john.doe@gmail.com"
                      name="userEmail"
                      value={email}
        onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div className="mt-8">
                    <label for className="uppercase text-sm text-gray-600 font-bold">Message</label>
                    <textarea
                      className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      value={message}
        onChange={(e) => setMessage(e.target.value)}
                      name="userMessage" >

                      </textarea>
                  </div>
                  <div className="mt-8">
                    <button
                    type="submit"
                      className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                      >
                      
                      Send Message
                    </button>
                    </div>
                    </form>
                    </div>
                  
                </div>
             
            
    )
}

export default ContactForm
