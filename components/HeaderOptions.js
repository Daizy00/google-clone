import HeaderOption from "./HeaderOption";
import {
    DotsVerticalIcon,
    LocationMarkerIcon,
  
    NewspaperIcon,
    BookmarkAltIcon,
    ShoppingCartIcon,
    SearchIcon,
} from "@heroicons/react/outline"


function HeaderOptions() {
    return (
        <div className="flex w-full text-gray-700 justify-evenly  lg:text-base lg:justify-start
        lg:space-x-36 lg:pl-52 border-b-[1px]">
         {/* left */}   

         <div className="flex space-x-6">
             <HeaderOption Icon={SearchIcon} title="All" selected/>
             <HeaderOption Icon={BookmarkAltIcon} title="Books "/>
            
             <HeaderOption Icon={NewspaperIcon} title="News" />
             <HeaderOption Icon={ShoppingCartIcon} title="Shopping"/>
             <HeaderOption Icon={LocationMarkerIcon} title="Maps"/>
             <HeaderOption Icon={DotsVerticalIcon} title="More"/>
             
             


         </div>

         {/* Right */}

         <div className = " flex space-x-4">
            
             <p className="link">Tools</p>
         </div>
        </div>
    )
}

export default HeaderOptions
