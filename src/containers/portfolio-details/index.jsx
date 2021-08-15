import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PortfolioDetailsContainer = ({ data }) => {
    const { nextLink, prevLink, instaLink, facebookLink, mapLink } = data;
    const cate = data.categories.map((value, idx) => {
        return (
            <span className="d-inline" key={idx}>
                {value}
                {idx !== data.categories.length - 1 && " , "}
            </span>
        );
    });
    return (
        <div className="portfolio-area portfolio-single">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner-content">
                            <div className="content" data-aos="fade-up">
                                {/* <p className="category">{cate}</p> */}
                                <h3 className="title">{data.title}</h3>
                            </div>
                            <div className="portfolio-info">
                                <div className="row">
                                    <div
                                        className="col-sm-6 col-md-3 col-lg-3"
                                        data-aos="fade-up"
                                    >
                                        <div className="info-item">
                                            <span>Photographer</span>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: data.photographer,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-6 col-md-3 col-lg-3"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        <div className="info-item">
                                            <span>Date</span>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: data.date,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-6 col-md-3 col-lg-3"
                                        data-aos="fade-up"
                                        data-aos-delay="600"
                                    >
                                        <div className="info-item">
                                            <span>Team</span>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: data.team,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-6 col-md-3 col-lg-3"
                                        data-aos="fade-up"
                                        data-aos-delay="900"
                                    >
                                        <div className="info-item style-two">
                                            <span>Location</span>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: data.location,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="thumb section-padding-bottom"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <img
                                    className="w-100"
                                    src={data.gallery.imageOne}
                                    alt="Tales of Balasore"
                                />
                            </div>
                            <div
                                className="portfolio-content"
                                data-aos="fade-up"
                            >
                                {data.body.map((value, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="content-wrap"
                                            dangerouslySetInnerHTML={{
                                                __html: value,
                                            }}
                                        />
                                    );
                                })}
                                <Link
                                    to={
                                        process.env.PUBLIC_URL +
                                        data.pageUrl.link
                                    }
                                >
                                    {data.pageUrl.text}
                                </Link>
                            </div>
                            {/* <div className="row">
                                <div
                                    className="col-lg-8 m-auto"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <div className="thumb section-padding-bottom">
                                        <img
                                            className="w-100"
                                            src={`${process.env.PUBLIC_URL}/${data.gallery.imageTwo}`}
                                            alt="Alexis"
                                        />
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-lg-12" data-aos="fade-up">
                        <div className="thumb section-padding-bottom">
                            <img
                                className="w-100"
                                src={`${process.env.PUBLIC_URL}/${data.gallery.imageThree}`}
                                alt="Alexis"
                            />
                        </div>
                    </div>
                </div>
                <div className="row thumb style-two">
                    <div
                        className="col-md-6 col-lg-5 pl-sm-15 pl-0"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <img
                            className="mb-xs-30 mb-sm-60"
                            src={`${process.env.PUBLIC_URL}/${data.gallery.imageFour}`}
                            alt="Alexis"
                        />
                    </div>
                    <div
                        className="col-md-6 col-lg-7 text-end pr-sm-15 pr-0"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <img
                            className="sm-pl-0 pl-md-50"
                            src={`${process.env.PUBLIC_URL}/${data.gallery.imageFive}`}
                            alt="Alexis"
                        />
                    </div>
                </div>
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" data-aos="fade-up">
                        <div className="social-icons">
                            <span>Links:</span>
                            {mapLink ? (
                                <a
                                    href={data.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="icon_pin_alt"></i>
                                </a>
                            ) : null}
                            {instaLink ? (
                                <a
                                    href={data.instaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="social_instagram"></i>
                                </a>
                            ) : null}
                            {facebookLink ? (
                                <a
                                    href={data.facebookLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="social_facebook"></i>
                                </a>
                            ) : null}
                        </div>
                    </div>
                    {/* <div
                        className="col-lg-12 text-center"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <Link
                            to={process.env.PUBLIC_URL + "/"}
                            className="btn-started"
                        >
                            Start your project with us now{" "}
                            <span>Get Started</span>{" "}
                            <i className="arrow_carrot-right_alt2"></i>
                        </Link>
                    </div> */}
                </div>
                <div className="row">
                    <div
                        className="col-lg-12"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <div className="portfolio-navigation">
                            {prevLink ? (
                                <div className="prev">
                                    <Link to={data.prevLink}>
                                        <i className="arrow_carrot-left"></i>{" "}
                                        Previous
                                    </Link>
                                    {/* Sample Project */}
                                </div>
                            ) : null}
                            {nextLink ? (
                                <div className="next">
                                    <Link to={data.nextLink}>
                                        Next{" "}
                                        <i className="arrow_carrot-right"></i>
                                    </Link>
                                    {/* Sample Project */}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

PortfolioDetailsContainer.propTypes = {
    data: PropTypes.object,
};

export default PortfolioDetailsContainer;
