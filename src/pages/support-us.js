import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import Footer from "../layouts/footer";
import Header from "../layouts/header/index";
import Layout from "../layouts/index";
import ReactGa from "react-ga";

const SupportUs = () => {
    //Google Analytics
    ReactGa.initialize("UA-204999128-1");
    ReactGa.ga("set", "page", "/support-us");
    ReactGa.ga("send", "pageview");

    return (
        <React.Fragment>
            <Layout>
                <SEO title="Tales of Balasore || Support Us" />
                <div className="wrapper home-default-wrapper">
                    <Header classOption="hb-border" />
                    <div className="main-content">
                        <div className="support-container">
                            <h1>
                                {" "}
                                <b>Support Us</b>{" "}
                            </h1>
                            <p>
                                Hi <b>Balasorians</b> and our{" "}
                                <b>lovely viewers</b>, we are a very small team,
                                some of our team members are working full time
                                and some are studying. So we don&#39;t have too
                                much time to manage this, but we are trying our
                                best.
                            </p>
                            <p>
                                We are extremely passionate about our{" "}
                                <b>Balasore (ବାଲେଶ୍ୱର)</b>. So we are starting
                                this as our project. We need your help & support
                                to grow more to serve more.
                            </p>
                            <p>
                                Our main aim is to share the hidden/unexplored
                                places of <b>Balasore (ବାଲେଶ୍ୱର)</b> with our
                                viewers and this is not possible without your
                                help. Also, this will help to attract more
                                visitors to our places, which will indirectly
                                support the local people of that place.
                            </p>
                            <p>Please follow Covid19 Protocols everywhere.</p>
                            <p>
                                Please don&#39;t be mean, and keep your
                                surroundings clean.
                            </p>
                            <p>
                                Kindly follow and share our social media pages,
                                website with others.
                            </p>
                            <br />
                            <span role="img" aria-label="foldedhand">
                                🙏🏻
                            </span>
                        </div>
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default SupportUs;
