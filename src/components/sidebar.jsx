import { navLink } from "../constants";

const SideBar = () => {
    return (
        <div className="w-[80px] md:w-[180px] h-screen border-gray-800 border-r px-4 bg-primary font-poppins">
            {navLink.map(nav => {
                return (
                    <div key={nav.topics} className="flex flex-col">
                        <h4 className="hidden md:flex font-poppins font-medium text-[12px] leading-[27px] text-gray-400 my-1">{nav.topics}</h4>
                        <ul className="flex flex-col space-y-4">
                            {nav.links.map(link => {
                                return (
                                    <div key={link.title} className="flex space-x-2 items-center">
                                        <img className="w-4 h-4 my-4 sm:my-0" src={link.img} alt="icons" />
                                        <li className="hidden md:flex text-white list-none"><p className="text-[14px]">{link.title}</p></li>


                                    </div>
                                )
                            })}
                        </ul>

                    </div>
                )
            })}
        </div>
    );
}

export default SideBar;