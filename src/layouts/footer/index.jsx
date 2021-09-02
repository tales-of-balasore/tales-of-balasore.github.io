import { Link } from "react-router-dom";
import FooterLogo from "../../components/footer-logo";

const Footer = () => {
    return (
        <footer className="footer-area reveal-footer border-top-style">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="footer-content">
                            <div className="widget-item">
                                <div className="widget-footer-nav">
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link
                                                    to={
                                                        process.env.PUBLIC_URL +
                                                        "support-us"
                                                    }
                                                >
                                                    SUPPORT US
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to={
                                                        process.env.PUBLIC_URL +
                                                        "/"
                                                    }
                                                >
                                                    TERMS & CONDITIONS
                                                </Link>
                                            </li>
                                            <li>
                                                {/* <a
                                                    href="https://www.google.com/maps/place/Balasore,+Odisha/data=!4m2!3m1!1s0x3a1cf4ec20929ba1:0xc0ae3bcaf5c67126?sa=X&ved=2ahUKEwi-9LzQ643yAhVnzTgGHaR3Cu0Q8gF6BAgMEAE"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    MAP
                                                </a> */}
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="widget-item text-center">
                                <div className="about-widget">
                                    <FooterLogo
                                        image={`${process.env.PUBLIC_URL}/img/logo.png`}
                                    />
                                </div>
                                <div className="widget-copyright">
                                    <p>
                                        © 2021
                                        <a href="/" rel="noreferrer">
                                            <span> Tales of Balasore</span>
                                        </a>
                                        . Made by{" "}
                                        <a
                                            target="_blank"
                                            href="https://www.chandanchoudhury.in/"
                                            rel="noreferrer"
                                        >
                                            Chandan Choudhury
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="widget-item">
                                <ul className="widget-social">
                                    <li className="social-text">
                                        <span>follow us on social</span>
                                    </li>
                                    <li>
                                        <a
                                            className="social-twitter"
                                            href="https://twitter.com/talesofbalasore/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="social-facebook"
                                            href="https://www.facebook.com/talesofbalasore/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i
                                                className={"icofont-facebook"}
                                            ></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="social-instagram"
                                            href="https://www.instagram.com/tales_of_balasore/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="icofont-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
