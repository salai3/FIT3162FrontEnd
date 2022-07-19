import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import { Cell, Legend, Pie, PieChart } from "recharts";

const StockBreakdown = () => {
    const CardTitle = <Typography variant="p">Current Stock Breakdown</Typography>;

    const colours = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];

    const data = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ];

    return(
        <Card sx={{ maxWidth: 450}}>
            <CardHeader title={CardTitle}/>
            <CardContent>
                <PieChart width={400} height={300}>
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                        {data.map((entry, index) => {return <Cell key={`cell-${index}`} fill={colours[index]}/>;})}
                    </Pie>
                    <Legend/>
                </PieChart>
            </CardContent>
        </Card>
    );
}

export default StockBreakdown;