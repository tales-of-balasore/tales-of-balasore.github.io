import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Team = ({ data }) => {
    const { website, linkedin, facebook, instagram } = data;

    return (
        <div className={data.classOption}>
            <div className="thumb">
                <img src={data.image} alt="Alexis-Team" />
            </div>
            <div className="content">
                <div className="member-info">
                    <h3 className="name">
                        {website ? (
                            <a
                                className="social-website"
                                href={data.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                dangerouslySetInnerHTML={{ __html: data.name }}
                            ></a>
                        ) : null}
                    </h3>
                    <span className="designation">{data.designation}</span>
                </div>
                <div className="member-icons">
                    {instagram ? (
                        <a
                            className="social-instagram"
                            href={data.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="icofont-instagram"></i>
                        </a>
                    ) : null}
                    {facebook ? (
                        <a
                            className="social-facebook"
                            href={data.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="icofont-facebook"></i>
                        </a>
                    ) : null}
                    {linkedin ? (
                        <a
                            className="social-linkedin"
                            href={data.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="icofont-linkedin"></i>
                        </a>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

Team.propTypes = {
    data: PropTypes.object,
};

export default Team;
