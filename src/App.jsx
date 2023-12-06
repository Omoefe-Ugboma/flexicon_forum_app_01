import {Routes , Route} from 'react-router-dom'
import Home from "./pages/Home";
import Error from "./components/Error";
import SharedLayouts from "./components/SharedLayouts";
import AboutPage from './pages/AboutPage';
import Technology from './pages/Technology';
import Gaming from './pages/Gaming';
import Policy from './pages/Policy';
import Trending from './pages/Trending';
import Communities from './pages/Communities';


function App() {
  return (
 
<Routes>
    <Route path="/" element = {<SharedLayouts/>}>
         <Route index element = {<Home/>} />
           <Route path='/about' element = {<AboutPage/>}/>
           <Route path='/technology' element = {<Technology/>}/>
           <Route path='/gaming' element = {<Gaming/>}/>
           <Route path='/policy' element = {<Policy/>}/>
           <Route path='/communities' element = {<Communities/>}/>
           <Route path='/trending' element = {<Trending/>}/>
         <Route path="*" element = {<Error/>} />
    </Route>
</Routes>

    )
}
export default App;



// if the tailwind isnt running on your pc simply install the dependency


// In order for the tailwind css to run on your pc simply do the following 
// 1. npm install -D tailwindcss postcss autoprefixer
// 2. tailwindcss init -p

//3. (In the tailwing.config.js paste this )

//** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


//step 4. (in the index.css file paste this) 
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

//step 5. npm run dev 


