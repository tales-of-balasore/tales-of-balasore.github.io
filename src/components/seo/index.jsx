import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="robots" content="index, follow" />
            <meta
                name="description"
                content="Tales of Balasore - The official website of Tales of Balasore. Introducing Odisha's magnificent seaside attractiveness,
                “Balasore”. Discover all it has to offer, such as divine temples, magnificent landscapes, soothing beaches, story-telling lakes, and whatnot."
            />
            <meta
                name="keywords"
                content="Tales of Balasore, Balasore, 756001, Missile City, Chandipur, Khirachora Gopinath, Talsari, Raibania Fort, DRDO, PXE, ITR, Remuna, Panchalingeswar, Chandan Choudhury, Beach, Lake, Shot"
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
};

export default SEO;
