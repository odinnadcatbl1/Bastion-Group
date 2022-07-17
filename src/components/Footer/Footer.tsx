import "./Footer.scss";
import footerImg from "../../assets/img/footer.png";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <img src={footerImg} alt="footer" />
        </footer>
    );
};

export default Footer;
