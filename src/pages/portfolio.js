import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import QuteContainer from "../containers/global/global-qute/index.jsx";
import PortfolioContainer from "../containers/global/portfolio/index.jsx";
import Footer from "../layouts/footer";
import Header from "../layouts/header/index";
import Layout from "../layouts/index";
import ReactGa from "react-ga";

const Portfolio = () => {
    //Google Analytics
    ReactGa.initialize('UA-204999128-1');
    ReactGa.ga('set', 'page', '/gallery');
    ReactGa.ga('send', 'pageview');

    return (
        <React.Fragment>
            <Layout>
                <SEO title="Tales of Balasore || Gallery" />
                <div className="wrapper home-default-wrapper">
                    <Header classOption="hb-border" />
                    <div className="main-content">
                        <QuteContainer />
                        <PortfolioContainer />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default Portfolio;
