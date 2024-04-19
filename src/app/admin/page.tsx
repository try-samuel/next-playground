import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function getSalesData() {}

export default function AdminDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard title="Total Sales" subtitle="This month" body="$10,000" />
      <DashboardCard title="Total Customers" subtitle="This month" body="100" />
      <DashboardCard title="Total Products" subtitle="This month" body="100" />
    </div>
  );
}

type DashboardCardProps = {
  title: string;
  subtitle: string;
  body: string;
};

function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>{body}</CardContent>
    </Card>
  );
}
