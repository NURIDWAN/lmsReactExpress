``

function Cources() {
    return (
        <>
            <aside className="sidebar-container fixed h-[calc(100vh-20px)] w-full max-w-[280px] my-[10px] ml-[10px] bg-[#060A23] overflow-hidden flex flex-1 rounded-[20px]">
                <div className="flex w-full overflow-y-scroll scroll-container hide-scrollbar">
                    <nav className="flex flex-col w-full h-fit p-[30px] gap-10 z-10">
                        <a href="index.html">
                            <img src={logo} alt="logo" />
                        </a>
                        <ul className="flex flex-col gap-4">
                            <p className="font-semibold text-xs leading-[18px] text-white">GENERAL</p>
                            <li>
                                <a href="index.html">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
                                        <img src={dcubewhite} className="w-6 h-6" alt="icon" />
                                        <span className="font-semibold text-white">Overview</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="manage-course.html">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img src={noteFavoritePurple} className="w-6 h-6" alt="icon" />
                                        <span className="font-semibold text-white">Courses</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img src={crownWhite} className="w-6 h-6" alt="icon" />
                                        <span className="font-semibold text-white">Categories</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="manage-student.html">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img src={profile2userWhite} className="w-6 h-6" alt="icon" />
                                        <span className="font-semibold text-white">Students</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-4">
                            <p className="font-semibold text-xs leading-[18px] text-white">OTHERS</p>
                            <li>
                                <a href="#">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img src={securityCardWhite} className="w-6 h-6" alt="icon" />
                                        <span className="font-semibold text-white">Subscription</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img src={cupWhite} className="w-6 h-6" alt="icon" />
                                        <span className="font-semibold text-white">Rewards</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img src={setting2White} className="w-6 h-6" alt="icon" />
                                        <span className="font-semibold text-white">Settings</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <img src="assets/images/backgrounds/sidebar-glow.png" className="absolute bottom-0 object-contain object-bottom" alt="background" />
            </aside>
        </>
    )
}

export default Cources