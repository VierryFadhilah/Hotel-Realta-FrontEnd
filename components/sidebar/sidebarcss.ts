const sidebarcss ={
    sidebar: 'flex  w-64 h-full bg-white',
    sidebarcontainer: 'bg-white duration-700 z-10 w-64  h-full px-4 height: calc(100vh - 82px)',
    sidelinkactive: "hover:bg-grayHover hover:text-blackText  text-blackText text-sm items-center gap-x-4",
    sidesubmenuactive: "flex cursor-pointer text-center text-sm text-blackText py-2 hover:font-bold hover:text-primary ${router.pathname === slink.to ? 'font-bold text-primary': 'font-medium'} "
}
export default sidebarcss;