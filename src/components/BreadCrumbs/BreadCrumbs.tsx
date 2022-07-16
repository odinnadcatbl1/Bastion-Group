import "./BreadCrumbs.scss";

const BreadCrumbs: React.FC = () => {
    return (
        <ul className="breadcrumbs">
            <li className="breadcrumbs__item">
                <a href="/">Главная</a>
            </li>
            <li className="breadcrumbs__item">
                <a href="/">Интернет-магазин</a>
            </li>
            <li className="breadcrumbs__item">
                <a href="/">Опоры трубопроводов</a>
            </li>
        </ul>
    );
};

export default BreadCrumbs;
