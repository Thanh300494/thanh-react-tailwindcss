import {FaUser} from "react-icons/fa"
import {BsFillCreditCardFill} from"react-icons/bs"
import checkIconMobile from"../../src/asset/mobile/checkpoint.svg";
import { useSpring, animated } from 'react-spring'
const Content = () => {
    const customer = useSpring({
        customer:10245, 
        from:{
            customer:0
    }})
    const cart= useSpring({
        cart:12045,from:{cart:0}
    })
    return ( 
        <section className="md:flex md:flex-row">
            <div className="ml-[70px] mr-[54px] text-bold  flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 to-transparent rounded-[24px] md:w-[20%]">
                <div className="mt-16 gap-8 flex items-start">
                    <FaUser size={"22px"} className="mt-[12px]"/>
                    <div className="text-[26px]">
                        <animated.div>
                            {customer.customer.to((val)=>Math.floor(val))}
                        </animated.div>
                    <p className="text-[13px] font-semibold mb-[36px] md:text-[16px]">
                        Customers
                    </p>
                    </div>
                </div>
                <div className=" gap-8 flex items-start mb-16">
                    <BsFillCreditCardFill size={"22px"} className="mt-[12px]"/>
                    <div className="text-[26px]">
                        <animated.div>
                            {cart.cart.to((val)=>Math.floor(val))}
                        </animated.div>
                        <p className="text-[13px] font-semibold md:text-[16px]">
                              Cards Issued
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-[13px] flex flex-col w-[100%] mt-[90px] font-semibold  md:w-[30%] md:mt-0 md:text-[16px] md:text-lg md:ml-[20%]">
                <div className="check-content">
                   <img src={checkIconMobile} alt="" />
                   <p className="">
                       Card reports sent to your phone every weeks
                   </p>
                </div>
                <div className="check-content">
                   <img src={checkIconMobile} alt="" />
                   <p className="">
                   No external fees
                   </p>
                </div>
                <div className="check-content">
                   <img src={checkIconMobile} alt="" />
                   <p className="">
                   Set spending limits and restrictions
                   </p>
                </div>
            </div>
        </section>
     );
}
 
export default Content;