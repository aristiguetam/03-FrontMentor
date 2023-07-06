
export const Hero = () => {

    return (

        <div className="fadeIn flex relative mx-20 mb-20 mt-20 ">

            <div className="flex flex-col w-[45%]">
                <h2 className=" text-[#D0D6F9] text-[28px] font-normal leading-normal not-italic tracking-[4.725px]">
                    SO, YOU WANT TO TRAVEL TO
                </h2>
                <div className="ml-2">

                    <h1 className="  text-[#fff]  text-[180px] not-italic font-normal leading-normal">
                        SPACE
                    </h1>
                    <p className="  text-lg font-normal leading-8 not-italic text-[#D0D6F9] text-ellipsis">
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </div>

            </div>


            <div className="cursor-pointer">
              
                <div className="w-[274px] h-[274px] bg-[#fff] rounded-full flex items-center justify-center absolute bottom-10 right-12">
                    <h2 className="text-center text-[#0B0D17] text-[32px] font-normal no-italic leading-normal tracking-[2px]">
                        EXPLORED
                    </h2>
                </div>
                <div className="bg-transparent hover:bg-[#fff]/60 hover:opacity-[0.1036275252699852] rounded-full absolute bottom-0 right-0 w-[374px] h-[374px] " />

            </div>

        </div>
    )
}

