import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import card from "../Images/card.png";
import logo from '../Images/logo.png';
import logo2 from "../Images/logo2.png";
import logo3 from "../Images/logo3.png";
import logo4 from "../Images/logo4.png";
import troy from "../Images/troy.png";
const Homepage = () => {
    AOS.init();
    return (
        <div>


            <div className='samurai-bg w-full h-fixedheight'>
                <div className='flex justify-evenly items-center'>
                    <div className='flex w-[180px]   justify-center items-center'>
                        <div>
                            <img className="w-106 h-117" src={logo} alt="" />
                        </div>
                        <div>
                            <p style={{fontFamily:" ZCOOL KuaiLe "}} className="text-white">Saviour</p>
                        </div>
                    </div>
                    <div className='flex gap-3 bg-black text-white p-2  rounded-full px-4 ' style={{fontFamily:" ZCOOL KuaiLe "}} >
                        <p>Home</p>
                        <p>IDO</p>
                        <p>Tokenomics</p>
                        <p>Roadmap</p>
                        <p>Coming Soon</p>
                    </div>
                    <div>
                        <button className="bg-gradient-to-r p-2 rounded-full from-red-600 to-yellow-400">
                            Connect Wallet
                        </button>
                    </div>


                </div>
                <div>
                    <p   data-aos="zoom-in" style={{  fontFamily:"Shojumaru", width: "900px", fontSize: "32px", position: "relative", top: "150px", color: "white", fontWeight: "400", left: "200px", textAlign: "center" }}> WHERE BLOCKCHAIN HEROES THRIVE , RESCUING DREAMS , ELEVATING FORTUNES</p>
                </div>


            </div>
            <div  style={{ background: "black", display: "flex", justifyContent: "center" }}>
                <div  style={{ width: "35%", paddingTop: "15px" }}>
                    <p   style={{ color: " #ED0137", fontWeight: "400px", fontSize: "44px", fontFamily:"Shojumaru" }}  >INTRODUCTION</p>
                    <p data-aos="zoom-in" style={{  fontFamily:"ZCOOL KuaiLe", fontSize: "24px", fontWeight: "400", color: "white" }}>We've all been in the mud once, and now we've decided to fight it out.
                        Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive, join us to save the future!
                        Our mission is to empower everyone to share wealth and succeed.</p>
                    <p>read more...</p>
                    <button style={{ color: "white", gap: "11.35px", padding: "3px 10px", borderRadius: "8px",   fontFamily:"ZCOOL KuaiLe", background: " linear-gradient(93.73deg, #D51B46 10.19%, #EE6910 98.19%" }}>Documents</button>
                </div>
                <div style={{ width: "45%" }}>
                    <img src={troy} alt="" />
                </div>
            </div>
            <div style={{ background: "black" }}>
                <p style={{  fontFamily:"Shojumaru", textAlign: "center", marginBottom: "100px", fontSize: "25px" }} className=' text-red-600'>TOKENOMICS</p>
                <div data-aos="zoom-in" style={{ width: "70%", margin: "auto", paddingBottom: "50px" , fontFamily:"ZCOOL KuaiLe" }} className='flex justify-between'>
                    <div className='w-[20%]'>
                        <div className='flex justify-between text-white'>
                            <p>Name</p>
                            <p className='text-red-600'>Saviour</p>
                        </div>
                        <div className='flex justify-between text-white'>
                            <p>Symbol</p>
                            <p className='text-red-600'>SvR</p>
                        </div>
                        <div className='flex justify-between text-white '>
                            <p>Total Supply</p>
                            <p className='text-red-600'>1000 trillion</p>
                        </div>
                        <div className='flex justify-between text-white '>
                            <p>Decimals</p>
                            <p className='text-red-600'>18</p>
                        </div>
                    </div>
                    <div  style={{ width: "60%" }}>
                        <img src={logo2} alt="" />
                    </div>
                </div>
            </div>
            <div style={{background:"black", paddingTop:"50px", paddingBottom:"20px"}}>
                <div style={{width:"90%", margin:"auto"}}>
                    <div data-aos="zoom-in">
                        <img src={card} alt="" />
                    </div>
                </div>
            </div>
            <div style={{background:"black", paddingTop:"20px", paddingBottom:"30px"}}>
                <div style={{display:"flex", width:"70%", margin:"auto", justifyContent:"space-between"}}>
                    <div data-aos="zoom-in" style={{width:"30%"}}>
                        <img src={logo3} alt="" />
                    </div>
                    <div style={{width:"40%"}}>
                        <p style={{color:"red", fontFamily:"Shojumaru"}}>FAQ</p>
                        <div data-aos="zoom-in" style={{color:"white", position:"relative", top:"40px", fontFamily:"Shojumaru"}}>
                            <p style={{border:"1px solid red", padding:"9px 15px", borderRadius:"8px,", marginBottom:"6px"}}>1. WHY CHOOSE SAVIOUR?</p>
                            <p style={{border:"1px solid red", padding:"9px 15px", borderRadius:"8px",  marginBottom:"6px"}}>2. WHY IS THE IDO DURATION SO LONG?</p>
                            <p style={{border:"1px solid red", padding:"9px 15px", borderRadius:"8px",  marginBottom:"6px"}}>3. WHEN WILL TRADING GO LIVE?</p>
                            <p style={{border:"1px solid red", padding:"9px 15px", borderRadius:"8px",  marginBottom:"6px"}}>4. WHEN CAM WE CLAIM THE TOKENS?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{background:"black", paddingBottom:"30px", paddingTop:"110px"}}>
                 <div style={{margin:"auto", marginBottom:"20px"}} className=' w-[200px] h-[163px]'>
                    <img src={logo4} alt="" />
                 </div>
                 <div style={{color:"white", display:"flex", justifyContent:"space-around", width:"618px", height:"20px", margin:"auto",}}>
                    <p >Home</p>
                    <p>Ido</p>
                    <p>Tokenomics</p>
                    <p>Road Map</p>
                    <p>Whitepaper</p>
                    <p>Pledge</p>
                    <p>NFT</p>
                    <p>Games</p>
                 </div>

            </div>
        </div>
    );
}

export default Homepage;

