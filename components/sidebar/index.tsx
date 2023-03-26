import React, { LegacyRef, forwardRef, useState } from 'react'
import cx from 'classnames';
import sidebarcss from './sidebarcss';
import Link from 'next/link';
import { useRouter } from "next/router";
import Typography from '../Typography';
import variants from '../Typography/textcss';
import Image from 'next/image'
import Logo from "../../assets/image/logo.png"

import MenuIcon from './menuicon';
import listMenu from './listmenu';

const Sidebar = forwardRef(({ }, ref: LegacyRef<HTMLDivElement>) => {
    const router = useRouter();
    const [subHeading, setSubHeading] = useState("");
    const [dropdown, setDropdown] = useState({
        status: false,
        index: -0
    })
    return (
        <div className={cx(`${sidebarcss.sidebar}"`)}>
            <div
                className={cx(`${sidebarcss.sidebarcontainer} `
                )}
            >
                <div className="flex justify-center mt-[14px]">
                    <Image className="w-[251px] mb-3.5" src={Logo} alt="company logo" />
                </div>
                <ul className="">
                    {
                        (listMenu || []).map((menu) => (
                            <>
                                <div className='pt-[26px]'>
                                    <Link key={menu.name} href={menu.to} className='flex rounded-md py-1 cursor-pointer hover:bg-grayHover hover:text-blackText  text-blackText text-sm items-center gap-x-4 ' onClick={() =>
                                        subHeading !== menu.name
                                            ? setSubHeading(menu.name)
                                            : setSubHeading("")
                                    }>
                                        <MenuIcon
                                            icon={menu.icon}
                                        />
                                        <Typography variant={variants.subtitle3} customClass={'flex-1'}>
                                            {menu.name}
                                        </Typography>

                                        {
                                            menu.submenu && (
                                                <div className={`${subHeading && 'rotate-90'}`}>
                                                    <MenuIcon
                                                        icon={menu.icon2}
                                                    />
                                                </div>
                                            )
                                        }
                                    </Link>
                                </div>
                                <div
                                    className={`${subHeading === menu.name ? "" : "hidden"
                                        }`}
                                >
                                    {(menu.submenu || []).map((slink) => (
                                        <li className="flex pl-[40px] cursor-pointer text-center text-sm text-blackText py-2 hover:text-primary">
                                            <Link href={slink.title}>
                                                <Typography variant={variants.subtitle3}>
                                                    {slink.title}
                                                </Typography>
                                            </Link>
                                        </li>
                                    ))}
                                </div>


                            </>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
})

export default Sidebar