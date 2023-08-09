import styles from "../style";
import { expand, notifications, search, app, settings, noavatar } from "../assets";

const NavBar = () => {

    return (
        <div className={`flex justify-between items-center bg-black ${styles.paddingX} py-3`}>
            <h2 className={`text-lg md:text-2xl font-bold text-white`}>Damydavo</h2>
            <ul className="flex gap-4 text-white px-4 md:px-8 items-center">
                <li className="text-white font-bold"><img src={search} alt="icons" /></li>
                <li className="text-white font-bold"><img src={app} alt="icons" /></li>
                <li className="text-white font-bold"><img src={expand} alt="icons" /></li>
                <div className="relative">
                    <li className="text-white font-bold"><img src={notifications} alt="icons" /></li>
                    <div className="absolute flex rounded-full bg-red-500 w-5 h-5 bottom-3 left-3 justify-center items-center">1</div>
                </div>

                <div className="ml-4 flex gap-2 items-center">
                    <li className="text-white font-bold"><img className="w-[30px] h-[30px] rounded-full" src={noavatar} alt="avatar" /></li>
                    <li className="text-white font-bold">Damy</li>
                    <li className="text-white font-bold ml-8"><img src={settings} alt="icons" /></li>

                </div>

            </ul>
        </div>


    );
}

export default NavBar;