import Sidebar from "../../component/Student/Sidebar";
import Topbar from "../../component/Student/Topbar";
import DashboardCard from "../../component/Student/DashboardCard";

const Dashboard = () => {

    return (

        <div className="flex">

            <Sidebar />

            <div className="flex-1 bg-slate-100 min-h-screen p-8">

                <Topbar />

                <div className="grid grid-cols-2 gap-8 mt-10">

                    <DashboardCard

                        title="Total Projects"

                        value="10"

                        color="bg-blue-600"

                    />

                    <DashboardCard

                        title="Pending"

                        value="3"

                        color="bg-yellow-500"

                    />

                    <DashboardCard

                        title="Approved"

                        value="5"

                        color="bg-green-600"

                    />

                    <DashboardCard

                        title="Rejected"

                        value="2"

                        color="bg-red-600"

                    />

                </div>

            </div>

        </div>

    )

}

export default Dashboard;