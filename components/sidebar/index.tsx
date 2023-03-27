import React, { LegacyRef, forwardRef, useState } from "react";
import cx from "classnames";
import sidebarcss from "./sidebarcss";
import Link from "next/link";
import { useRouter } from "next/router";
import Typography from "../Typography";
import variants from "../Typography/textcss";
import Image from "next/image";
import Logo from "../../assets/image/logo.png";
import MenuIcon from "./menuicon";
import listMenu from "./listmenu";

const Sidebar = forwardRef(({}, ref: LegacyRef<HTMLDivElement>) => {
  const router = useRouter();
  const [dropdown, setDropdown] = useState({
    status: false,
    index: -1,
  });
  const handleDropdown = (index: any) => {
    setDropdown({
      status: dropdown.index === index ? !dropdown.status : true,
      index,
    });
  };

  return (
    <div className={cx(`${sidebarcss.sidebar}"`)}>
      <div className={cx(`${sidebarcss.sidebarcontainer} `)}>
        <div className="flex justify-center mt-[14px]">
          <Image className="w-[251px] mb-3.5" src={Logo} alt="company logo" />
        </div>
        <ul className="">
          {(listMenu || []).map((menu, index) => (
            <>
              <div className="pt-[26px]">
                <Link
                  key={menu.name}
                  href={menu.to}
                  className={`flex rounded-md py-1 cursor-pointer ${
                    router.pathname === menu.to
                      ? "bg-grayHover text-blackText "
                      : ""
                  }  ${
                    dropdown.status && dropdown.index === index
                      ? "bg-grayHover text-blackText"
                      : ""
                  } ${sidebarcss.sidelinkactive} `}
                  onClick={() => handleDropdown(index)}
                >
                  <MenuIcon icon={menu.icon} />
                  <Typography
                    variant={variants.subtitle3}
                    customClass={"flex-1"}
                  >
                    {menu.name}
                  </Typography>

                  {menu.submenu && (
                    <div
                      className={`${
                        dropdown.status && dropdown.index === index
                          ? "rotate-90"
                          : ""
                      }`}
                    >
                      <MenuIcon icon={menu.icon2} />
                    </div>
                  )}
                </Link>
              </div>
              {menu.submenu && dropdown.status && dropdown.index === index && (
                <div className="pl-[40px]">
                  {menu.submenu.map((slink) => (
                    <div
                      key={slink.title}
                      className={`${sidebarcss.sidesubmenuactive}`}
                    >
                      <Link href={slink.to}>
                        <Typography variant={variants.subtitle3}>
                          {slink.title}
                        </Typography>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Sidebar;
