import PropTypes from "prop-types";
import { LightgalleryItem, LightgalleryProvider } from "react-lightgallery";
import { Link } from "react-router-dom";

const PortfolioItem = ({ portfolio }) => {
    const { mapLink, instaLink, facebookLink } = portfolio;

    return (
        <div className="single-portfolio">
            <LightgalleryProvider>
                <LightgalleryItem
                    group="any"
                    src={process.env.PUBLIC_URL + portfolio.homeImage}
                >
                    <div className="thumbnail">
                        <div className="overlay">
                            <img
                                src={
                                    process.env.PUBLIC_URL + portfolio.homeImage
                                }
                                alt="portfolio"
                            />
                        </div>
                    </div>
                </LightgalleryItem>
            </LightgalleryProvider>
            <div className="content">
                <h3 className="title">
                    <Link
                        to={
                            process.env.PUBLIC_URL +
                            `/portfolio-details/${portfolio.id}`
                        }
                    >
                        {portfolio.title}
                    </Link>
                </h3>
                <p className="desc">{portfolio.excerpt}</p>
                <div className="portfolio-icons">
                    {mapLink ? (
                        <a
                            className="social-map"
                            href={portfolio.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="icofont-google-map"></i>
                        </a>
                    ) : null}
                    {instaLink ? (
                        <a
                            className="social-instagram"
                            href={portfolio.instaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="icofont-instagram"></i>
                        </a>
                    ) : null}
                    {facebookLink ? (
                        <a
                            className="social-facebook"
                            href={portfolio.facebookLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="icofont-facebook"></i>
                        </a>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

PortfolioItem.propTypes = {
    portfolio: PropTypes.object,
};

export default PortfolioItem;
