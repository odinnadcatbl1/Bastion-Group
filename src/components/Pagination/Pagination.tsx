import "./Pagination.scss";

const Pagination: React.FC = () => {
    return (
        <div className="pagination">
            <ul className="pagination__list">
                <li className="pagination__list-item">&#x2190;</li>
                <li className="pagination__list-item pagination__list-item--active">
                    1
                </li>
                <li className="pagination__list-item">2</li>
                <li className="pagination__list-item">3</li>
                <li className="pagination__list-item">4</li>
                <li className="pagination__list-item">5</li>
                <li className="pagination__list-item">&#x2192;</li>
            </ul>
            <button className="pagination__btn">Показать все товары</button>
        </div>
    );
};

export default Pagination;
