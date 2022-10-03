import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const StockBreakdown = (props) => {
  const CardTitle = (
    <Typography variant="p">Current Stock Breakdown</Typography>
  );

  return (
    <Card>
      <CardHeader title={CardTitle} />
      <CardContent>
        <ResponsiveContainer width="95%" height={500}>
          <BarChart data={props.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default StockBreakdown;
