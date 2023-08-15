import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import { Link } from 'react-router-dom';

const Charts = ({ color, icon, title, chartData, number, percentage, dataKey }) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex-col space-y-6">
                <div className="flex">
                    <img src={icon} alt="user" />
                    <h2 className="text-sm font-semibold text-white">{title}</h2>
                </div>
                <div className="flex flex-col space-y-4 mt-8">
                    <h2 className="text-lg font-bold">{number}</h2>
                    <Link style={{ color: color }} to='/' className="text-lg">View all</Link>
                </div>


            </div>
            <div className="flex-col w-[100px] h-[100px]">
                <ResponsiveContainer width="99%" height="100%">
                    <LineChart data={chartData}>
                        <Tooltip contentStyle={{ background: "transparent", border: "none" }} />
                        <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={false}
                            labelStyle={{ display: "none" }}
                            position={{ x: 10, y: 60 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
                <h2 style={{ color: percentage < 0 ? 'tomato' : 'limegreen' }}>{percentage}%</h2>
                <p>this month</p>

            </div>
        </div>
    );

}

export default Charts;