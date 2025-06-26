import { Link } from 'react-router-dom';
import logo from '../assets/images/logos/logo.svg';




export default function Navbar() {
    return (
        <>
            <div className="flex items-center gap-[60px]">
                <img src={logo} className="flex shrink-0" alt="Logo" />
                <ul className="flex items-center gap-10">
                    <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
                        <Link to="/pricing">Pricing</Link>
                    </li>
                    <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
                        <Link to="/features">Features</Link>
                    </li>
                    <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
                        <Link to="/testimonials">Testimonials</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}