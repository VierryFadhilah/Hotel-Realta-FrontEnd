import React from 'react'
import cx from 'classnames';
import navbarCss from './navbarcss';
import Menualt from '@/components/icons/menualt';
import Typography from '../Typography';
import variants from '../Typography/textcss';
import Image from 'next/image'
import Avatar from "../../assets/image/avatar.png"
const Navbar = ({showNav,setShownav}:any) => {
    return (
        <div className={cx(`${navbarCss.navbar}`)}>
            <div className={cx('flex justify-center items-center')}>
                <div onClick={()=>setShownav(!showNav)} className={cx('relative inline-block ml-8 cursor-pointer')}>
                    <Menualt />
                </div>
            </div>
            <div className={cx(`${navbarCss.navbarbody}`)}>
                <div className={cx('text-right')}>
                    <Typography variant={variants.h5} color={'text-blackText'} >
                    Muhammad Ikrar
                    </Typography>
                    <Typography variant={variants.subtitle4} color={'text-grayText'}>
                        administrator
                    </Typography>
                    <p></p>
                </div>
                <div className='pl-[15px]'>
                    <Image className='w-9 h-9' src={Avatar} alt='tes'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar