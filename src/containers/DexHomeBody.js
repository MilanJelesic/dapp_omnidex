import React from 'react'
import '../assets/styles/page1.css'
import rocket from '../assets/images/page1/rocket.png'
import dotLogo from '../assets/images/page1/dot-logo.png'
import LockIcon from '@mui/icons-material/Lock';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
//import farmingBg from '../assets/images/page1/farming-bg.png'
import dcbBsc from '../assets/images/page1/dcb-bsc.png'
import arrow from "../assets/images/arrow.png";
import { Link } from "react-router-dom";
import facebook from "../assets/images/communityIcons/fb.svg";
import discord from "../assets/images/communityIcons/discord.svg";
import github from "../assets/images/communityIcons/github.svg";
import email from "../assets/images/communityIcons/mail.svg";
import twitter from "../assets/images/communityIcons/twitter.svg";
import telegram from "../assets/images/communityIcons/telegram.svg";
import coingecko from "../assets/images/communityIcons/coingecko.svg";
import cube from "../assets/images/omni-documnet-box.png"
import fadedCube from "../assets/images/faddedBox.png"
import rect1Bg from "../assets/images/page1/rect1-bg.png"
const DexHomeBody = () => {
    return (
        <div className='page1BodyContainer'>
            <div>
                <img src={rect1Bg} className="rect1bgImage"/>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="rect1 d-flex justify-content-center align-items-center py-4">
                        <div>
                            <img src={rocket} width={240} style={{ position: 'relative', top: "1.5rem" }} alt="rocket" />
                        </div>
                        <div>
                            <h2 className="color2 bolder">OMNIDEX</h2>
                            <h2 className="text-uppercase bolder">Lending Service</h2>
                            <button className="btn launchBtn">Beta Mode Launching Soon</button>
                        </div>
                    </div>
                    <img src={cube} className="cubeImage"/>
                </div>
                <div className="col-md-12 mt-5">
                    <div className="d-flex align-items-center">
                        <div className="mr-3 my-auto">
                            <img src={dotLogo} width={120} alt="dotlogo" />
                        </div>
                        <div className="my-auto">
                            <h1 className="text-uppercase bolder">Welcome all</h1>
                            <h1 className="text-uppercase bolder"><span className="color2">Ominidex</span> Users</h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="d-flex align-items-center mt-2">
                        <div className="mr-5 my-auto">
                            <h3>Complete multi chain <br /> swaps in 1 click!</h3>
                        </div>
                        <div className="my-auto">
                            <button className="btn btn-primary btn-lg btn-gradient px-5">Beginner? Start Here</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-5">
                    <div className="rect2 d-flex justify-content-center align-items-center py-5">
                        <div>
                            <h2 className="text-uppercase bolder"> <span className="color2">OMNI </span> Farmings</h2>
                            <p className="">Omni is the ultimate exchange protocol</p>
                            <div className="d-flex">
                                <div>
                                    <button className="btn launchBtn d-flex mr-3">
                                        Locked
                                        <LockIcon fontSize="small" />
                                    </button>
                                </div>
                                <div>
                                    <button className="btn btn-gradient d-flex">
                                        Unlock Wallet
                                        <ArrowRightAltIcon fontSize="small" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-5">
                    <img src={fadedCube} className="cubeImage2"/>
                    <div className="rect3 d-flex flex-column justify-content-start py-5">
                        <div>
                            <h2 className="bolder"><span className="color2">HOT</span> FARMS</h2>
                            <h6 className="">Omni is the ultimate exchange protocol</h6>
                        </div>
                        <div className="d-flex justify-content-start">
                            <div className="d-flex bgDCB mr-2 pr-5">
                                <div className="mr-3">
                                    <img src={dcbBsc} width={120} alt="dcb-bsc" />
                                </div>
                                <div>
                                    <p className="mb-1 bold">DCB-BSC</p>
                                    <p className="mb-1">Apr: 82.10%</p>
                                </div>
                            </div>
                            <div className="d-flex bgDCB pr-5">
                                <div className="mr-3">
                                    <img src={dcbBsc} width={120} alt="dcb-bsc" />
                                </div>
                                <div>
                                    <p className="mb-1 bold">DCB-BSC</p>
                                    <p className="mb-1">Apr: 82.10%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-5 position-relative">
                    <img src={cube} className="cubeImage1"/>
                    <div className="rect4 d-flex flex-column justify-content-start py-5">
                        <div>
                            <h2 className="bolder"><span className="color2">COOL</span> POOLS</h2>
                            <h6 className="">Omni is the ultimate exchange protocol</h6>
                        </div>
                        <div className="d-flex justify-content-start">
                            <div className="d-flex bgDCB mr-2 pr-5">
                                <div className="mr-3">
                                    <img src={dcbBsc} width={120} alt="dcb-bsc" />
                                </div>
                                <div>
                                    <p className="mb-1 bold">DCB-BSC</p>
                                    <p className="mb-1">Apr: 82.10%</p>
                                </div>
                            </div>
                            <div className="d-flex bgDCB pr-5">
                                <div className="mr-3">
                                    <img src={dcbBsc} width={120} alt="dcb-bsc" />
                                </div>
                                <div>
                                    <p className="mb-1 bold">DCB-BSC</p>
                                    <p className="mb-1">Apr: 82.10%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-4">
                    <div className="rect5 d-flex flex-column justify-content-center align-items-center mt-4 py-4">
                        <div>
                            <h2 className="bolder mb-3"><span className="color2">OMNIDEX</span> STATS</h2>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="rect5-item1">
                                <span className="text-uppercase">Total Value Locked</span>
                                <span>$ 454,543,34</span>
                            </div>
                            <div className="rect5-item2">
                                <span className="text-uppercase">USD Market Cap</span>
                                <span>$ 454,543,34</span>
                            </div>
                            <div className="rect5-item1">
                                <span className="text-uppercase">Banana in circulation</span>
                                <span>$ 454,543,34</span>
                            </div>
                            <div className="rect5-item2">
                                <span className="text-uppercase">Total Banana Burned</span>
                                <span>$ 454,543,34</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 p-0">
                    <div className="newsLetter">
                        <div>
                            <h2>Subscribe to our newsletter</h2>
                            <p>Fill in your email to receive Omni's latest info and updates</p>
                        </div>
                        <div>
                            <div class="input-group mb-3 p-2">
                                <input type="text" className="form-control fs-lg" placeholder="Email Address" id="mail" name="email" />
                                <div className="input-group-append">
                                    <button className="btn btn-gradient px-4">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 p-0">
                <footer className='footer_container'>
				<div className='_2CnzWZ7-9CkSBh7Czhrq7O'>
					<div className='xKGRxEZ58RoSqMJGbrrq6'>
						<div>
							<h3 className='_1taTtc7XhIMqvwCgfnppti'>Community</h3>
							<nav className='_3jt2oztRe9u2DB6DlqqmE_'>
								<Link to='/' className='_2AYjj8ChaxuGx00GqNpb3u'>
									<img src={facebook} alt='facebook' />
								</Link>
								<Link className='_2AYjj8ChaxuGx00GqNpb3u' to='/'>
									<img src={discord} alt='dicord' />
								</Link>
								<Link className='_2AYjj8ChaxuGx00GqNpb3u' to='/'>
									<img src={twitter} alt='twitter' />
								</Link>
								<Link className='_2AYjj8ChaxuGx00GqNpb3u' to='/'>
									<img src={telegram} alt='telegram' />
								</Link>
								<Link className='_2AYjj8ChaxuGx00GqNpb3u' to='/'>
									<img src={email} alt='email' />
								</Link>
								<Link className='_2AYjj8ChaxuGx00GqNpb3u' to='/'>
									<img src={github} alt='github' />
								</Link>
								<Link className='_2AYjj8ChaxuGx00GqNpb3u' to='/'>
									<img src={coingecko} alt='coingecko' />
								</Link>
							</nav>
						</div>
						<div>
							<h3 className='_1taTtc7XhIMqvwCgfnppti'>Documents</h3>
							<nav className='RmujUMsYkKkkuRY8eS296'>
								<Link to='/'>
									Pitch Deck
									<img
										className='arrow__3f0-7'
										src={arrow}
										height={15}
										width={35}
										alt='arrow'
									/>
								</Link>
								<Link to='/'>
									One Pager
									<img
										className='arrow__3f0-7'
										src={arrow}
										height={15}
										width={35}
										alt='arrow'
									/>
								</Link>
								<Link to='/'>
									Roadmap
									<img
										className='arrow__3f0-7'
										src={arrow}
										height={15}
										width={35}
										alt='arrow'
									/>
								</Link>
							</nav>
						</div>
						<div>
							<h3 className='_1taTtc7XhIMqvwCgfnppti'>Company</h3>
							<nav className='RmujUMsYkKkkuRY8eS296'>
								<Link to='/'>
									Merch Shop
									<img
										className='arrow__3f0-7'
										src={arrow}
										height={15}
										width={35}
										alt='arrow'
									/>
								</Link>
								<Link to='/'>
									Contact Our Team
									<img
										className='arrow__3f0-7'
										src={arrow}
										height={15}
										width={35}
										alt='arrow'
									/>
								</Link>
							</nav>
						</div>
					</div>
					<p className='nEVyhRp2L427W-NvwfPEX'>
						©Copyright Omni 2021,{" "}
						<Link to='/' className='_3d4_tKssgilyA1Tcp3MBFt'>
							Privacy policy
						</Link>
					</p>
				</div>
			</footer>
                </div>
            </div>
        </div>

    )
}

export default DexHomeBody