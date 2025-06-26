import { Link } from "react-router-dom";
import logo from "../assets/images/logos/logo.svg";
import dcubewhite from "../assets/images/icons/3dcube-white.svg";
import noteFavoritePurple from "../assets/images/icons/note-favorite-purple.svg";
import crownWhite from "../assets/images/icons/crown-white.svg";
import profile2userWhite from "../assets/images/icons/profile-2user-white.svg";
import securityCardWhite from "../assets/images/icons/security-card-white.svg";
import cupWhite from "../assets/images/icons/cup-white.svg";
import setting2White from "../assets/images/icons/setting-2-white.svg";
import backgroundGlow from "../assets/images/backgrounds/background-glow.png";
import React from "react";

export default function Sidebar() {
    return (
        <aside className="sidebar-container fixed h-[calc(100vh-20px)] w-full max-w-[280px] my-[10px] ml-[10px] bg-[#060A23] overflow-hidden flex flex-1 rounded-[20px]">
            <div className="flex w-full overflow-y-scroll scroll-container hide-scrollbar">
                <nav className="flex flex-col w-full h-fit p-[30px] gap-10 z-10">
                    <Link to="index.html">
                        <img src={logo} alt="logo" />
                    </Link>
                    <ul className="flex flex-col gap-4">
                        <p className="font-semibold text-xs leading-[18px] text-white">GENERAL</p>
                        <li>
                            <Link to="index.html">
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
                                    <img src={dcubewhite} className="w-6 h-6" alt="icon" />
                                    <span className="font-semibold text-white">Overview</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="manage-course.html">
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src={noteFavoritePurple} className="w-6 h-6" alt="icon" />
                                    <span className="font-semibold text-white">Courses</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src={crownWhite} className="w-6 h-6" alt="icon" />
                                    <span className="font-semibold text-white">Categories</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="manage-student.html">
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src={profile2userWhite} className="w-6 h-6" alt="icon" />
                                    <span className="font-semibold text-white">Students</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-4">
                        <p className="font-semibold text-xs leading-[18px] text-white">OTHERS</p>
                        <li>
                            <Link to="#">
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src={securityCardWhite} className="w-6 h-6" alt="icon" />
                                    <span className="font-semibold text-white">Subscription</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src={cupWhite} className="w-6 h-6" alt="icon" />
                                    <span className="font-semibold text-white">Rewards</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src={setting2White} className="w-6 h-6" alt="icon" />
                                    <span className="font-semibold text-white">Settings</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <img src={backgroundGlow} className="absolute bottom-0 object-contain object-bottom" alt="background" />
        </aside>
    )
}