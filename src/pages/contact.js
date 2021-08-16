import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import ContactContainer from "../containers/contact";
import MapContainer from "../containers/global/map";
import Footer from "../layouts/footer";
import Header from "../layouts/header/index";
import Layout from "../layouts/index";
import ReactGa from "react-ga";

const Contact = () => {
    //Google Analytics
    ReactGa.initialize('UA-204999128-1');
    ReactGa.ga('set', 'page', '/contact');
    ReactGa.ga('send', 'pageview');

    return (
        <React.Fragment>
            <Layout>
                <SEO title="Tales of Balasore || Contact" />
                <div className="wrapper home-default-wrapper">
                    <Header classOption="hb-border" />
                    <div className="main-content">
                        <ContactContainer />
                        {/* <MapContainer /> */}
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default Contact;
