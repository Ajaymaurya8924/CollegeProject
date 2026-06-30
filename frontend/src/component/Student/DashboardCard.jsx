const DashboardCard = ({ title, value, color }) => {

    return (

        <div className={`p-8 rounded-2xl shadow-lg text-white ${color}`}>

            <h2 className="text-xl">

                {title}

            </h2>

            <h1 className="text-5xl font-bold mt-5">

                {value}

            </h1>

        </div>

    )

}

export default DashboardCard;