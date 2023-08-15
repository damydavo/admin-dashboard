import { Pie, ResponsiveContainer, PieChart, Tooltip, Cell, } from 'recharts';

const PieChartBox = () => {

    const data = [
        { name: 'Mobile', value: 400, color: "#0088FE" },
        { name: 'Laptop', value: 300, color: "#00C49F" },
        { name: 'Desktop', value: 300, color: "#FFBB28" },
        { name: 'Tablet', value: 200, color: "#FF8042" },
    ];
    // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
        <div className="w-full h-full">
            <h2 className='text-lg font-semibold font-poppins'>Lead by source</h2>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Tooltip contentStyle={{ background: "white", borderRadius: "5px" }} />
                    <Pie
                        data={data}
                        innerRadius={"70%"}
                        outerRadius={"90%"}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((item) => (
                            <Cell key={item.name} fill={item.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className='flex space-x-2 items-center font-semibold'>
                {data.map(item => {
                    return (
                        <div key={item.key} className='flex flex-col text-white items-center'>
                            <div className='flex items-center space-x-2'>
                                <div style={{ backgroundColor: item.color }} className='rounded-full w-[8px] h-[8px]'></div>
                                <p className='text-sm'>{item.name}</p>
                            </div>

                            <div />

                            <span className='text-sm'>{item.value}</span>
                        </div>
                    )
                })}
            </div>
        </div>

    );
}

export default PieChartBox;