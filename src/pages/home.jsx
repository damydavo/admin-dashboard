import Charts from '../components/charts';
import { chartBoxUser, chartBoxProduct, chartBoxRevenue, chartBoxConversion } from '../constants';
import TopDeals from './../components/topDeal';

const Home = () => {
    return (
        <div className="mx-4 mt-2 text-white w-[1300px]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-6 border border-gray-800 rounded-[5px] row-span-3">
                    <h2 className="text-lg pb-2">Top Deals</h2>
                    <TopDeals />
                </div>
                <div className="p-6 border border-gray-800  rounded-[5px]">
                    <Charts chartBoxUser {...chartBoxUser} />
                </div>
                <div className="p-6 border border-gray-800  rounded-[5px]">
                    <Charts chartBoxProduct {...chartBoxProduct} />
                </div>
                <div className="p-6 border border-gray-800  rounded-[5px] row-span-3">
                </div>
                <div className="p-6 border border-gray-800 rounded-[5px]">
                    <Charts chartBoxRevenue {...chartBoxRevenue} />
                </div>

                <div className="p-6 border border-gray-800  rounded-[5px]">
                    <Charts chartBoxConversion {...chartBoxConversion} />
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