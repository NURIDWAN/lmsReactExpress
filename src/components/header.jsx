
import searchNormal from '../assets/images/icons/search-normal.svg';
import photo1 from '../assets/images/photos/photo-1.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div id="TopBar" className="flex items-center justify-between gap-[30px]">
            <form action="" className="flex items-center w-full max-w-[450px] rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D]"
                    placeholder="Search course, student, other file..."
                />
                <img src={searchNormal} className="w-6 h-6" alt="icon" />
            </form>
            <div className="relative flex items-center justify-end gap-[14px] group">
                <div className="text-right">
                    <p className="font-semibold">Shayna Angga</p>
                    <p className="text-sm leading-[21px] text-[#838C9D]">Manager</p>
                </div>
                <button type="button" id="profileButton" className="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img src={photo1} className="object-cover w-full h-full" alt="profile photos" />
                </button>
                <div id="ProfileDropdown" className="absolute hidden top-full group-hover:block">
                    <ul className="flex flex-col w-[200px] rounded-[20px] border border-[#CFDBEF] p-5 gap-4 bg-white mt-4">
                        <li className="font-semibold">
                            <Link href="#">My Account</Link>
                        </li>
                        <li className="font-semibold">
                            <Link href="#">Subscriptions</Link>
                        </li>
                        <li className="font-semibold">
                            <Link href="#">Settings</Link>
                        </li>
                        <li className="font-semibold">
                            <Link href="signin.html">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}