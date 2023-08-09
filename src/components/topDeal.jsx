import { topDealUsers } from "../constants";

const TopDeals = () => {
    return (
        <div className="flex flex-col space-y-4">
            {topDealUsers.map(topDeal => {
                return (
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-2 items-center">
                            <img className="w-[32px] h-[32px] rounded-full object-cover" src={topDeal.img} alt="avatar" />
                            <div className="flex flex-col">
                                <h2 className="text-sm font-bold">{topDeal.username}</h2>
                                <p className="text-[12px] font-semibold">{topDeal.email}</p>
                            </div>
                        </div>

                        <h2 className="text-sm">${topDeal.amount}</h2>

                    </div>
                )
            })}
        </div>
    );
}

export default TopDeals;