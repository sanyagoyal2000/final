import Button from "@material-tailwind/react/Button";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Link} from "react-router-dom";
function Middle() {
    return (
        <div className="mx-2 my -4 px-2 py 4 flex flex-row justify-content">
            <div>
            <img className="m-auto pb-20 pt-10 " src="https://raw.githubusercontent.com/sanyagoyal2000/Pictures/165460d8c6a0972e9eeccf2f168bd97a6386c13f/undraw_Community_re_cyrm.svg" alt="prodessionaled"/>
            </div>
            <div className="mt-10">
                <div className="flex flex-col md:ml-10">
                    <div>
                <h1 className="text-pink-600 font-bold text-3xl mb-2">Hey There!!!</h1>
                <br/><br/>
                <p className="text-gray-500">Not yet decided what to do in the future</p>
                <br/>
                <p className="text-gray-500">Dont worry ,we at professionaled are the there for you.</p>
                <br/>
                <p className="text-gray-500">Buckle up and get ready to chat with our experts.</p>
                <br/>
                <p className="text-gray-500">This is the opportunity to connect with millions of professionals and confused people just like you!</p>
                <br/>
                <p className="text-gray-500">So what are you waiting for???</p>
                <br/>
                <h3 className="text-pink-600 font-semibold">Let's begin!!!</h3>
                </div>
                <div className="items-center ml-60 pt-20">
                <Link to="/login"><Button
              color="green"
            
            iconOnly={true}
            rounded={false}
            ripple="dark"
            className=" w-40 h-30 border-0 bg-blue-500 text-white items-center"
            >
                <div className="flex flex-row justify-between">
                    <div className="text-uppercase pt-2 pb-2 ">
                    Start
                    </div>
                
                <div>
                <ArrowForwardIosIcon className="ml-5 pt-1 text-white"/>
                </div></div>
            </Button></Link>
            </div></div>

            </div>
        </div>
    )
}

export default Middle
