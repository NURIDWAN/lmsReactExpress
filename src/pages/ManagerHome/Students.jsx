import smsIcon from '../../assets/images/icons/sms-white.svg';
import keyIcon from '../../assets/images/icons/key-white.svg';
import crownPurple from '../../assets/images/icons/crown-purple.svg';
import photo2 from '../../assets/images/photos/photo-2.png';
import photo3 from '../../assets/images/photos/photo-3.png';
import photo4 from '../../assets/images/photos/photo-4.png';
import photo5 from '../../assets/images/photos/photo-5.png';

function Students() {
    return (
        <>
            <section id="LatestStudents" className="flex flex-col rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
                <h2 className="font-extrabold text-[22px] leading-[33px]">Latest Students</h2>
                {/* Repeatable Student Card */}
                <div className="flex items-center gap-5 card">
                    <div className="flex shrink-0 w-20 h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                        <img src={photo2} className="object-cover w-full h-full" alt="thumbnail" />
                    </div>
                    <div className="w-full">
                        <h3 className="font-bold text-xl leading-[30px] line-clamp-1">Yulia Putri</h3>
                        <div className="flex items-center gap-[6px] mt-[6px]">
                            <img src={crownPurple} alt="icon" />
                            <p className="text-[#838C9D]">183 Course Joined</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-5 card">
                    <div className="flex shrink-0 w-20 h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                        <img src={photo3} className="object-cover w-full h-full" alt="thumbnail" />
                    </div>
                    <div className="w-full">
                        <h3 className="font-bold text-xl leading-[30px] line-clamp-1">Angga Risky Setiawan</h3>
                        <div className="flex items-center gap-[6px] mt-[6px]">
                            <img src={crownPurple} alt="icon" />
                            <p className="text-[#838C9D]">183 Course Joined</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-5 card">
                    <div className="flex shrink-0 w-20 h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                        <img src={photo4} className="object-cover w-full h-full" alt="thumbnail" />
                    </div>
                    <div className="w-full">
                        <h3 className="font-bold text-xl leading-[30px] line-clamp-1">Shayna Wo</h3>
                        <div className="flex items-center gap-[6px] mt-[6px]">
                            <img src={crownPurple} alt="icon" />
                            <p className="text-[#838C9D]">183 Course Joined</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-5 card">
                    <div className="flex shrink-0 w-20 h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                        <img src={photo5} className="object-cover w-full h-full" alt="thumbnail" />
                    </div>
                    <div className="w-full">
                        <h3 className="font-bold text-xl leading-[30px] line-clamp-1">Imanual Kod</h3>
                        <div className="flex items-center gap-[6px] mt-[6px]">
                            <img src={crownPurple} alt="icon" />
                            <p className="text-[#838C9D]">183 Course Joined</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-5 card">
                    <div className="flex shrink-0 w-20 h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                        <img src={photo3} className="object-cover w-full h-full" alt="thumbnail" />
                    </div>
                    <div className="w-full">
                        <h3 className="font-bold text-xl leading-[30px] line-clamp-1">Battita Gunber</h3>
                        <div className="flex items-center gap-[6px] mt-[6px]">
                            <img src={crownPurple} alt="icon" />
                            <p className="text-[#838C9D]">183 Course Joined</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Students