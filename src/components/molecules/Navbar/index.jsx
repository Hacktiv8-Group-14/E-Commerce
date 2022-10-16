import { useState } from "react"
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return(
        <nav className="w-full font-bold text-white bg-[#242582] p-2 md:p-4 flex justify-between flex-col md:flex-row fixed z-10 top-0">
            <div className="flex flex-row justify-between mb-2 md:mb-0">
                {/* Nav Brand(?)/Header */}
                <h1 className="text-2xl md:text-3xl text-[#F64C72]"><i>BukaPedia</i></h1>

                {/* Button for Expanding Nav Link when Small Screen */}
                <button className="md:hidden text-2xl" onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}>
                    <AiOutlineMenu/>
                </button>
            </div>

            {/* Navlink */}
            <div className={`text-lg md:text-xl flex-col md:flex-row md:items-center ${isNavExpanded ? 'flex' : 'hidden md:flex'}`}>
                {/* User Navlink */}
                <Link to="/" onClick={() => setIsNavExpanded(false)}>Products</Link>
                <Link to="/cart" className="mx-0 md:mx-16 my-4 md:my-0" onClick={() => setIsNavExpanded(false)}>Cart</Link>

                {/* Admin Navlink */}
                {/* <Link to="/" onClick={() => setIsNavExpanded(false)}>Home</Link>
                <Link to="/sales" className="mx-0 md:mx-16 my-4 md:my-0" onClick={() => setIsNavExpanded(false)}>Sales Recap</Link> */}

                {/* Login/Logout Button */}
                <button className="border-[#F64C72] border-2 rounded-lg px-5 py-1 text-base md:text-lg text-[#F64C72]">Login</button>
            </div>
        </nav>
    )
}
export default Navbar