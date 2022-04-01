import Cards from "../../src/asset/desktop/isocard.svg";
const Slogan = () => {
    return ( 
        <section className="md:relative text-3xl my-14 font-semibold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-5xl">
            <div className="text-center md:col-span-1 md:col-start-2">
                <p className="">
                    Earn <span className="text-purple-300">More</span>
                </p>
                <p className="">Pay Less</p>
                <button className=" dark:text-white text-[20px] px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-[14px] hover:bg-purple-400 transition-all duration-300 md:text-2xl md:px-8 md:py-[8px]">
                    Start
                </button>
            </div>
            <div className="mt-[70px] md:absolute md:right-[-5rem]">
                <img src={Cards} alt="" />
            </div>
        </section>
     );
}
 
export default Slogan;