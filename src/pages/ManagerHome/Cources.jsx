import logo from '../../assets/images/logos/logo.svg';
import dcubewhite from '../../assets/images/icons/3dcube-white.svg';
import noteFavoritePurple from '../../assets/images/icons/note-favorite-purple.svg';
import crownWhite from '../../assets/images/icons/crown-white.svg';
import profile2userWhite from '../../assets/images/icons/profile-2user-white.svg';
import securityCardWhite from '../../assets/images/icons/security-card-white.svg';
import cupWhite from '../../assets/images/icons/cup-white.svg';
import setting2White from '../../assets/images/icons/setting-2-white.svg';
import sidebarGlow from '../../assets/images/backgrounds/sidebar-glow.png';
import crownPurple from '../../assets/images/icons/crown-purple.svg';
import th1 from '../../assets/images/thumbnails/th-1.png';
import th2 from '../../assets/images/thumbnails/th-2.png';
import th3 from '../../assets/images/thumbnails/th-3.png';

function Cources() {
    return (
        <>
            <section id="LatestCourse" className="flex flex-col rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
                <h2 className="font-extrabold text-[22px] leading-[33px]">Latest Courses</h2>
                {/* Repeatable Course Card */}
                <div className="flex items-center gap-5 card">
                    <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                        <img src={th1} className="object-cover w-full h-full" alt="thumbnail" />
                    </div>
                    <div className="w-full">
                        <a href="manage-course-materi.html" className="font-bold text-xl leading-[30px] line-clamp-1">Responsive Design Triclorem Lorem, ipsum dolor.</a>
                        <div className="flex items-center gap-[6px] mt-[6px]">
                            <img src={crownPurple} alt="icon" />
                            <p className="text-[#838C9D]">Programming</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-5 card">
                    <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                        <img src={th2} className="object-cover w-full h-full" alt="thumbnail" />
                    </div>
                    <div className="w-full">
                        <a href="manage-course-materi.html" className="font-bold text-xl leading-[30px] line-clamp-1">HTMX JavaScript 2020</a>
                        <div className="flex items-center gap-[6px] mt-[6px]">
                            <img src={crownPurple} alt="icon" />
                            <p className="text-[#838C9D]">Marketing</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-5 card">
                    <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                        <img src={th3} className="object-cover w-full h-full" alt="thumbnail" />
                    </div>
                    <div className="w-full">
                        <a href="manage-course-materi.html" className="font-bold text-xl leading-[30px] line-clamp-1">Mastering React</a>
                        <div className="flex items-center gap-[6px] mt-[6px]">
                            <img src={crownPurple} alt="icon" />
                            <p className="text-[#838C9D]">Data Science</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-5 card">
                    <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                        <img src={th2} className="object-cover w-full h-full" alt="thumbnail" />
                    </div>
                    <div className="w-full">
                        <a href="manage-course-materi.html" className="font-bold text-xl leading-[30px] line-clamp-1">Responsive Design Triclorem Lorem, ipsum dolor.</a>
                        <div className="flex items-center gap-[6px] mt-[6px]">
                            <img src={crownPurple} alt="icon" />
                            <p className="text-[#838C9D]">Marketing</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-5 card">
                    <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                        <img src={th3} className="object-cover w-full h-full" alt="thumbnail" />
                    </div>
                    <div className="w-full">
                        <a href="manage-course-materi.html" className="font-bold text-xl leading-[30px] line-clamp-1">Company Profile Multilorem Lorem, ipsum dolor.</a>
                        <div className="flex items-center gap-[6px] mt-[6px]">
                            <img src={crownPurple} alt="icon" />
                            <p className="text-[#838C9D]">Data Science</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cources