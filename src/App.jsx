function App() {
  return (
 
<section className="h-screen flex text-center">
    <div className="w-1/4 bg-red-500 h-full">01</div>
    <div className="w-1/2 bg-green-500 h-full">02</div>
    <div className="w-1/4 bg-yellow-500 h-full">03</div>
</section>


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



    )
}
export default App;

