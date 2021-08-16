import {GlobeIcon} from "@heroicons/react/solid";
function Footer() {
    return (
        <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">

            <div className="px-8 py-3 text-lg"> 
                <p className="foot">India</p>
            </div>
            
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-12 py-6  ">
            
                <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2  ">
                
                
                Carbon neutral since 2007

            </div>

                
               

            <div className="flex justify-center space-x-8  text-lg whitespace-nowrap md:justify-self-start" >


                <p className="foot">About</p>
                <p className="foot">Advertising</p>
                <p className="foot">Business</p>
                <p className="foot">How Search works</p>
            </div>

            <div className ="flex justify-center  space-x-8  md:ml-auto  text-lg  ">
                <p className="foot">Privacy</p>
                <p className="foot">Terms</p>
                <p className="foot">Settings</p>
            </div>
            </div>
        </footer>
    )
}

export default Footer
