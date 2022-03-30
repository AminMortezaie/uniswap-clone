import { useState } from 'react';
import {HiMenuAlt4 } from 'react-icons/hi'
import {AiOutlineClose}  from 'react-icons/ai'
import { AiOutlineDown } from 'react-icons/ai'
import { FiArrowUpRight } from 'react-icons/fi'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import Image from 'next/image';


import logo from '../assets/uniswap.png'
import ethLogo from '../assets/eth.png'

const style ={
    navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold rounded-3xl text-[0.9rem] cursor-pointer duration-400  hover:bg-[#20242A] `,
    navItemMobile:`px-4 py-2 m-1 flex items-center text-lg font-bold rounded-3xl text-[0.9rem] cursor-pointer duration-400`,
    navItemsContainer: `bg-[#191B1F] rounded-3xl`,
    activeNavItem: `bg-[#20242A] `,
    buttonContainer: `flex justify-end items-center`,
    button: `flex items-center rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
    buttonPadding: `p-2`,
    buttonTextContainer: `h-8 flex items-center`,
    buttonIconContainer: `flex items-center justify-center w-8`,
    buttonAccent: `bg-[#2546bd] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-white`,
};




const Header = ()=>{
    const [toggleMenu, setToggleMenu] = useState(false);
    const [selectedNav, setSelectedNav] = useState('swap');
    return (
        <nav className='w-full flex -right-2 justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <Image src={logo} alt="logo" height={40} width={40}/>
            </div>
            <ul className={`${style.navItemsContainer} text-white md:flex hidden list-none flex-row justify-between items-center flex-initial`}>
            <li
                onClick={()=> setSelectedNav('swap')}
                className={`${style.navItem} ${
                  selectedNav === 'swap' && style.activeNavItem
                }`}
                >
                Swap
              </li>
              <li
                onClick={()=> setSelectedNav('pool')}
                className={`${style.navItem} ${
                  selectedNav === 'pool' && style.activeNavItem
                }`}>
                  Pool
              </li>
              <li
                onClick={()=> setSelectedNav('vote')}
                className={`${style.navItem} ${
                  selectedNav === 'vote' && style.activeNavItem
                }`}>
                  Vote
              </li>
              <a
                href='https://info.uniswap.org/#/'
                target='_blank'
                rel='noreferrer'
              >
                <li className={style.navItem}>
                  Charts <FiArrowUpRight/>
                </li>
              </a>      
            </ul>
            <div className='justify-end'>
                <div className={style.buttonContainer}>
                    <div className={`${style.button} ${style.buttonPadding} bg-[#191B1F]`}>
                        <div className={style.buttonIconContainer}>
                            <Image src={ethLogo} alt='eth logo' height={20} width={20}/>
                        </div>
                        <p> Ethereum </p>
                        <div className={style.buttonIconContainer}>
                            <AiOutlineDown />
                        </div>
                    </div>
                       <button type="button" onClick={()=> connectWallet()} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Connect Wallet</button>

                    <div className={`${style.button} ${style.buttonPadding} bg-[#191B1F]`}>
                        <div className={`${style.buttonIconContainer} mx-1  `}>
                            <HiOutlineDotsVertical/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex relative'>
                    {toggleMenu
                    ?<AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=> setToggleMenu(false)} />
                    :<HiMenuAlt4  fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=> setToggleMenu(true)}/>}
                    {toggleMenu && (
                    <ul
                    className={`z-40 fixed top-0 -right-2 p-2 w-[60vw] h-screen shadow-2xl md:hidden flex flex-col justify-start items-end rounded-md bg-[#362b38] text-white`}>  
                        <li className='text-xl w-full my-2'>
                            <AiOutlineClose onClick={()=> setToggleMenu(false)}/>
                        </li>
                        <li
                            onClick={()=> setSelectedNav('swap')}
                            className={`${style.navItemMobile} ${
                            selectedNav === 'swap' 
                            }`}
                            >
                            Swap
                        </li>
                        <li
                            onClick={()=> setSelectedNav('pool')}
                            className={`${style.navItemMobile} ${
                            selectedNav === 'pool'
                            }`}>
                            Pool
                        </li>
                        <li
                            onClick={()=> setSelectedNav('vote')}
                            className={`${style.navItemMobile} ${
                            selectedNav === 'vote' 
                            }`}>
                            Vote
                        </li>
                        <a
                            href='https://info.uniswap.org/#/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <li className={style.navItemMobile}>
                            Charts <FiArrowUpRight/>
                            </li>
                        </a>        
                    </ul>
                    )}
                </div>
        </nav>
        
    );

}

export default Header;
