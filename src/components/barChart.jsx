import { ResponsiveContainer, BarChart, Bar, Tooltip } from 'recharts';

const BarChartBox = ({ title, color, dataKey, chartData }) => {
    return (
        <div className="w-full h-full">
            <h2 className="text-[16px] font-bold">{title}</h2>
            <div className="chart">
                <ResponsiveContainer width="100%" height={150}>
                    <BarChart width={150} height={40} data={chartData}>
                        <Tooltip contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                            labelStyle={{ display: "none" }}
                            cursor={{ fill: "none" }}
                        />

                        <Bar dataKey={dataKey} fill={color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default BarChartBox;