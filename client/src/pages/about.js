import Header from '../components/Header';
import Footer from '../components/Footer';
//import Img from '../components/images/about_background.jpg'
//style={{background:`url(${Img})`}}


function AboutUs() {
    return (
        <div>
        <Header/>
             <div className="overlay bg-pink-50 h-50"  >
                <div className="flex flex-row ">
                    <div>
                        <img src="https://raw.githubusercontent.com/sanyagoyal2000/Pictures/7a09159e1e520fd876846371c3dc3e32ac7b6bc5/undraw_Co-working_re_w93t.svg" alt="about"/>

                    </div>
                    <div className="px-2 py-2 mx-4 items-start">
                    <br/>
                        <h1 className="text-gray-700 text-3xl font-bold">Dreams meet Destination!!</h1>
                        <br/><br/>
                     <p className="text-pink-800 font-semibold">
                         A one stop destination where you can connect with industry professionals,learn about their experiences and anecdotes and in turn make an informed decision about your career.
                         <br/>
                         <br/><br/>
                         <div className=" ml-12 text-left">
                         <h3 className="text-gray-700">Features available: </h3>
                         
                         <ul className="list-disc text-pink-600 ">
                             <li >Connect with industry experts</li>
                             <li>Become a part of our community profam where you can connect with our other customers and guiders</li>
                             <li>Go through our general test to see which careers are best suited for you</li>
                         </ul>
                         </div>

                     </p>
                    </div>
                </div>
             </div>
     <Footer className="static bottom-0"/>
            
        </div>
    )
}

export default AboutUs
