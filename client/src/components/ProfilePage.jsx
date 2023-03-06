const ProfilePage = () => {
  return (
    <div className='flex-row-reverse w-screen h-screen'>
        <div className='w-[750px] h-[374px] bg-white mx-auto my-auto rounded-2xl overflow-hidden'>
            <div className=''>
            {/* <img className='top-0 z-10' src={banner} alt=''></img> */}
            </div>
            <div className='relative'>
            {/* <img className='z-0 mx-auto mt-[-45px] rounded-full border-[5px] border-white' src={pic} alt=''></img> */}
            </div>
            <div className='flex-col'>
                <h2 className='text-center text-[18px] font-main font-bold mt-[12px]'>Victor Crest <span className='font-light text-[#6B7082] ml-2'>26</span></h2>
                <h2 className='text-center font-main text-[14px] mt-[12px]'>London</h2>
                <div className='border mt-[40px]'></div>
                <div className='flex flex-row'>
                    <div className='flex-col'>
                        <p className='text-[#2E3349] text-[18px] font-main font-bold text-center ml-[41px] mt-[12px]'>80K</p>
                        <p className='text-[10px] text-[#6B7082] font-main ml-[41px]'>Followers</p>
                    </div>
                    <div className='flex-col'>
                        <p className='text-[#2E3349] text-[18px] font-main font-bold text-center ml-[61px] mt-[12px]'>803K</p>
                        <p className='text-[10px] text-[#6B7082] font-main ml-[70px]'>Likes</p>
                    </div>
                    <div className='flex-col'>
                        <p className='text-[#2E3349] text-[18px] font-main font-bold text-center ml-[55px] mt-[12px]'>1.4K</p>
                        <p className='text-[10px] text-[#6B7082] font-main ml-[57px]'>Posts</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage