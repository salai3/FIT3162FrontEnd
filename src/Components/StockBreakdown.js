import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const StockBreakdown = (props) => {
  const CardTitle = (
    <Typography variant="p">Current Stock Breakdown</Typography>
  );

  const colours = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];

  return (
    <Card sx={{ height: 400 }}>
      <CardHeader title={CardTitle} />
      <CardContent>
        <BarChart width={800} height={300} data={props.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </CardContent>
    </Card>
  );
};

export default StockBreakdown;
