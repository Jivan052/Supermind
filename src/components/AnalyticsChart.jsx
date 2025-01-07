import { Card } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function AnalyticsChart({ data }) {
  return (
    <Card sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="posts" fill="#1A73E8" />
          <Bar dataKey="engagement" fill="#34A853" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}