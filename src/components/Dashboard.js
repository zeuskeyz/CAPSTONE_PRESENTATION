import Navbar from "./Navbar";
import Table from "./Table";
import Scorecard from "./Scorecard";
import Profile from "./Profile";
import Targets from "./Targets";

const Dashboard = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="row my-3">

                    <div className="col-lg-6 col-sm-12 px-3"> 
                        <Profile/>
                        <Scorecard/>
                    </div>
                    <div className="col-lg-6 col-sm-12"> 
                        <Targets/>
                        <Table/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard