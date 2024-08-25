import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

const NavBar = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/auth/login");
  };

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-4 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">
          <Link href="/" className="relative inline-block group">
            <span className="relative text-white group-hover:text-gray-200 transition-colors duration-300 transform group-hover:scale-105">
              GIF.Hy 
              <span className="absolute left-0 bottom-0 block w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="relative inline-block group">
              <span className="relative text-white group-hover:text-gray-200 transition-colors duration-300 transform group-hover:scale-105">
                Home
                <span className="absolute left-0 bottom-0 block w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/favorites" className="relative inline-block group">
              <span className="relative text-white group-hover:text-gray-200 transition-colors duration-300 transform group-hover:scale-105">
                Favorites
                <span className="absolute left-0 bottom-0 block w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            </Link>
          </li>
          <li>
          <button 
  onClick={handleLogout} 
  className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-full overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
>
  <span className="absolute inset-0 bg-red-800 opacity-30 rounded-full"></span>
  <span className="relative">Logout</span>
</button>


          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
