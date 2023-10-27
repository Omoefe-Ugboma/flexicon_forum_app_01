import { NavLink } from 'react-router-dom'
import Logo from './Logo';
import SearchBar from './SearchBar';

function NavBar( { toggleModal }){

    return (

       
       <nav className='flex justify-between font-semibold p-3 border-b border-gray-200 gap-10 text-gray-400 '>

        <div className='flex justify-start text-red-500 font-bold text-xl '> <Logo/> </div>
        
        <div><SearchBar/></div>
        
           {/* <NavLink to= '/' style={({isActive}) => {return {color:isActive ? 'blue':'black'};}} >Home</NavLink> */}
           <NavLink to= '/login' style={({isActive}) => {return {color:isActive ? 'blue':'black'};}}>
               < button  data-modal-target="popup-modal" data-modal-toggle="popup-modal" 
               className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
                text-sm px-4 py-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " type="button"   onClick={toggleModal}>
                   Login
               </button>
            </NavLink>
          
          
       </nav>

    )

    
}
export default NavBar;
