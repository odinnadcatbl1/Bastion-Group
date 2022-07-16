import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import arrowLeftIcon from "../../assets/svg/arrow-left.svg";
import sortIcon from "../../assets/svg/sort.svg";
import tabFilterIcon from "../../assets/svg/tab-filter.svg";
import listFilterIcon from "../../assets/svg/list-filter.svg";

import "./PageTitle.scss";

const PageTitle: React.FC = () => {
    return (
        <div>
            <BreadCrumbs />

            <div className="page__title-container">
                <div className="page__title">
                    <button className="page__title-button">
                        <img src={arrowLeftIcon} alt="back" />
                    </button>
                    <h1>Опоры трубопроводов</h1>
                </div>

                <div className="sort__block">
                    <div className="sort__type">
                        Сначала популярные <img src={sortIcon} alt="sort" />
                    </div>
                    <div className="view__types">
                        <div className="tab__filter">
                            <img src={tabFilterIcon} alt="tab filter" />
                        </div>
                        <div className="list__filter">
                            <img src={listFilterIcon} alt="list filter" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageTitle;
