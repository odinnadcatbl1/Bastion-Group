import PageTitle from "../../PageTitle/PageTitle";
import Sidebar from "../../Sidebar/Sidebar";

import "./Main.scss";

const MainPage: React.FC = () => {
    return (
        <div className="container">
            <PageTitle />
            <div className="content">
                <Sidebar />
            </div>
        </div>
    );
};

export default MainPage;
