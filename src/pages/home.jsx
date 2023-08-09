
import TopDeals from './../components/topDeal';
const Home = () => {
    return (
        <div className="mx-4 mt-2 text-white w-[1300px]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-6 border border-gray-800 rounded-[5px] row-span-3">
                    <h2 className="text-lg pb-2">Top Deals</h2>
                    <TopDeals />
                </div>
                <div className="p-20 border border-gray-800  rounded-[5px]">
                    box2
                </div>
                <div className="p-20 border border-gray-800  rounded-[5px]">
                    box3
                </div>
                <div className="p-20 border border-gray-800  rounded-[5px] row-span-3">
                    box4
                </div>
                <div className="p-20 border border-gray-800 rounded-[5px]">
                    box5
                </div>
                <div className="p-20 border border-gray-800  rounded-[5px]">
                    box6
                </div>
                <div className="p-20 border border-gray-800  rounded-[5px] md:row-span-2 md:col-span-2">
                    box7
                </div>
                <div className="p-20 border border-gray-800  rounded-[5px]">
                    box8
                </div>
                <div className="p-20 border border-gray-800  rounded-[5px]">
                    box9
                </div>
            </div>
        </div>
    );
}

export default Home;