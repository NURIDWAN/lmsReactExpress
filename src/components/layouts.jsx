import React from "react";
import logo from '../assets/images/logos/logo.svg';
import smsIcon from '../assets/images/icons/sms-white.svg';
import keyIcon from '../assets/images/icons/key-white.svg';
import dcubewhite from '../assets/images/icons/3dcube-white.svg';
import crownWhite from '../assets/images/icons/crown-white.svg';
import profile2userWhite from '../assets/images/icons/profile-2user-white.svg';
import securityCardWhite from '../assets/images/icons/security-card-white.svg';
import cupWhite from '../assets/images/icons/cup-white.svg';
import setting2White from '../assets/images/icons/setting-2-white.svg';
import videoPlayPurple from '../assets/images/icons/video-play-purple.svg';
import notePurple from '../assets/images/icons/note-purple.svg';
import noteFavoritePurple from '../assets/images/icons/note-favorite-purple.svg';
import profile2userPurple from '../assets/images/icons/profile-2user-purple.svg';
import searchNormal from '../assets/images/icons/search-normal.svg';
import crownPurple from '../assets/images/icons/crown-purple.svg';
import videoPlayWhite from '../assets/images/icons/video-play-white.svg';
import noteWhite from '../assets/images/icons/note-white.svg';
import noteFavoriteWhite from '../assets/images/icons/note-favorite-white.svg';
import backgroundGlow from '../assets/images/backgrounds/background-glow.png';
import Sidebar from "./Sidebar";
import Header from "./header";

function LayoutDashboard() {
    return (
        <>
            <div className="flex min-h-screen">
                <Sidebar />
                <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
                    <Header />
                    <header className="flex items-center justify-between gap-[30px]">
                        <div>
                            <h1 className="font-extrabold text-[28px] leading-[42px]">Overview</h1>
                            <p className="text-[#838C9D] mt-[1px]">Grow your company quickly</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <a href="#" className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap">
                                Customize
                            </a>
                            <a href="#" className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap">
                                Export Data
                            </a>
                        </div>
                    </header>
                    <section id="Stats" className="flex rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
                        <div className="grid grid-cols-2 w-[500px] gap-[30px]">
                            <div className="flex flex-col rounded-[20px] p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]">
                                <img src="assets/images/icons/profile-2user-purple.svg" className="w-[46px] h-[46px]" alt="icon" />
                                <div>
                                    <p className="font-extrabold text-2xl leading-[36px]">189,498</p>
                                    <p className="text-[#838C9D]">Total Students</p>
                                </div>
                            </div>
                            <div className="flex flex-col rounded-[20px] p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]">
                                <img src="assets/images/icons/note-favorite-purple.svg" className="w-[46px] h-[46px]" alt="icon" />
                                <div>
                                    <p className="font-extrabold text-2xl leading-[36px]">7,221</p>
                                    <p className="text-[#838C9D]">Total Courses</p>
                                </div>
                            </div>
                            <div className="flex flex-col rounded-[20px] p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]">
                                <img src="assets/images/icons/video-play-purple.svg" className="w-[46px] h-[46px]" alt="icon" />
                                <div>
                                    <p className="font-extrabold text-2xl leading-[36px]">893,891</p>
                                    <p className="text-[#838C9D]">Video Content</p>
                                </div>
                            </div>
                            <div className="flex flex-col rounded-[20px] p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]">
                                <img src="assets/images/icons/note-purple.svg" className="w-[46px] h-[46px]" alt="icon" />
                                <div>
                                    <p className="font-extrabold text-2xl leading-[36px]">12,812</p>
                                    <p className="text-[#838C9D]">Text Content</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 rounded-[20px] p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]">
                            <div className="relative flex items-center justify-center shrink-0 m-auto rounded-full w-[230px] h-[230px]">
                                <div
                                    className="absolute rounded-full w-[230px] h-[230px] z-10"
                                    style={{
                                        background: "conic-gradient(#C2ACFF 0% 25%, #662FFF 25% 100%)"
                                    }}
                                />
                                <div className="flex justify-center items-center w-[130px] h-[130px] rounded-full bg-white z-10">
                                    <p className="w-fit h-fit text-center font-bold text-lg leading-[27px]">
                                        Our<br />Rapport
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#662FFF]"></div>
                                    <p className="font-semibold text-sm leading-[21px]">Completed 75%</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#C2ACFF]"></div>
                                    <p className="font-semibold text-sm leading-[21px]">Not Completed 25%</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="grid grid-cols-2 gap-[30px]">
                        <section id="LatestCourse" className="flex flex-col rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
                            <h2 className="font-extrabold text-[22px] leading-[33px]">Latest Courses</h2>
                            {/* Repeatable Course Card */}
                            <div className="flex items-center gap-5 card">
                                <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                    <img src="assets/images/thumbnails/th-1.png" className="object-cover w-full h-full" alt="thumbnail" />
                                </div>
                                <div className="w-full">
                                    <a href="manage-course-materi.html" className="font-bold text-xl leading-[30px] line-clamp-1">Responsive Design Triclorem Lorem, ipsum dolor.</a>
                                    <div className="flex items-center gap-[6px] mt-[6px]">
                                        <img src="assets/images/icons/crown-purple.svg" alt="icon" />
                                        <p className="text-[#838C9D]">Programming</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 card">
                                <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                    <img src="assets/images/thumbnails/th-2.png" className="object-cover w-full h-full" alt="thumbnail" />
                                </div>
                                <div className="w-full">
                                    <a href="manage-course-materi.html" className="font-bold text-xl leading-[30px] line-clamp-1">HTMX JavaScript 2020</a>
                                    <div className="flex items-center gap-[6px] mt-[6px]">
                                        <img src="assets/images/icons/crown-purple.svg" alt="icon" />
                                        <p className="text-[#838C9D]">Marketing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 card">
                                <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                    <img src="assets/images/thumbnails/th-3.png" className="object-cover w-full h-full" alt="thumbnail" />
                                </div>
                                <div className="w-full">
                                    <a href="manage-course-materi.html" className="font-bold text-xl leading-[30px] line-clamp-1">Mastering React</a>
                                    <div className="flex items-center gap-[6px] mt-[6px]">
                                        <img src="assets/images/icons/crown-purple.svg" alt="icon" />
                                        <p className="text-[#838C9D]">Data Science</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 card">
                                <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                    <img src="assets/images/thumbnails/th-2.png" className="object-cover w-full h-full" alt="thumbnail" />
                                </div>
                                <div className="w-full">
                                    <a href="manage-course-materi.html" className="font-bold text-xl leading-[30px] line-clamp-1">Responsive Design Triclorem Lorem, ipsum dolor.</a>
                                    <div className="flex items-center gap-[6px] mt-[6px]">
                                        <img src="assets/images/icons/crown-purple.svg" alt="icon" />
                                        <p className="text-[#838C9D]">Marketing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 card">
                                <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                    <img src="assets/images/thumbnails/th-3.png" className="object-cover w-full h-full" alt="thumbnail" />
                                </div>
                                <div className="w-full">
                                    <a href="manage-course-materi.html" className="font-bold text-xl leading-[30px] line-clamp-1">Company Profile Multilorem Lorem, ipsum dolor.</a>
                                    <div className="flex items-center gap-[6px] mt-[6px]">
                                        <img src="assets/images/icons/crown-purple.svg" alt="icon" />
                                        <p className="text-[#838C9D]">Data Science</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="LatestStudents" className="flex flex-col rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
                            <h2 className="font-extrabold text-[22px] leading-[33px]">Latest Students</h2>
                            {/* Repeatable Student Card */}
                            <div className="flex items-center gap-5 card">
                                <div className="flex shrink-0 w-20 h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                    <img src="assets/images/photos/photo-2.png" className="object-cover w-full h-full" alt="thumbnail" />
                                </div>
                                <div className="w-full">
                                    <h3 className="font-bold text-xl leading-[30px] line-clamp-1">Yulia Putri</h3>
                                    <div className="flex items-center gap-[6px] mt-[6px]">
                                        <img src="assets/images/icons/crown-purple.svg" alt="icon" />
                                        <p className="text-[#838C9D]">183 Course Joined</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 card">
                                <div className="flex shrink-0 w-20 h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                    <img src="assets/images/photos/photo-3.png" className="object-cover w-full h-full" alt="thumbnail" />
                                </div>
                                <div className="w-full">
                                    <h3 className="font-bold text-xl leading-[30px] line-clamp-1">Angga Risky Setiawan</h3>
                                    <div className="flex items-center gap-[6px] mt-[6px]">
                                        <img src="assets/images/icons/crown-purple.svg" alt="icon" />
                                        <p className="text-[#838C9D]">183 Course Joined</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 card">
                                <div className="flex shrink-0 w-20 h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                    <img src="assets/images/photos/photo-4.png" className="object-cover w-full h-full" alt="thumbnail" />
                                </div>
                                <div className="w-full">
                                    <h3 className="font-bold text-xl leading-[30px] line-clamp-1">Shayna Wo</h3>
                                    <div className="flex items-center gap-[6px] mt-[6px]">
                                        <img src="assets/images/icons/crown-purple.svg" alt="icon" />
                                        <p className="text-[#838C9D]">183 Course Joined</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 card">
                                <div className="flex shrink-0 w-20 h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                    <img src="assets/images/photos/photo-5.png" className="object-cover w-full h-full" alt="thumbnail" />
                                </div>
                                <div className="w-full">
                                    <h3 className="font-bold text-xl leading-[30px] line-clamp-1">Imanual Kod</h3>
                                    <div className="flex items-center gap-[6px] mt-[6px]">
                                        <img src="assets/images/icons/crown-purple.svg" alt="icon" />
                                        <p className="text-[#838C9D]">183 Course Joined</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 card">
                                <div className="flex shrink-0 w-20 h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                    <img src="assets/images/photos/photo-3.png" className="object-cover w-full h-full" alt="thumbnail" />
                                </div>
                                <div className="w-full">
                                    <h3 className="font-bold text-xl leading-[30px] line-clamp-1">Battita Gunber</h3>
                                    <div className="flex items-center gap-[6px] mt-[6px]">
                                        <img src="assets/images/icons/crown-purple.svg" alt="icon" />
                                        <p className="text-[#838C9D]">183 Course Joined</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
    );
}

export default LayoutDashboard; 