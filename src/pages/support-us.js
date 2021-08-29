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
                    <br />
                    <br />
                    <br />
                    <br />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/tales-of-balasore.appspot.com/o/UPI.png?alt=media&token=c92c81eb-4cac-4ae4-ab84-122f9b90c70a"
                            alt="UPI-Code"
                        />
                        <br />
                        <br />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <p> Support us for good work</p>
                    </div>
                    {/* <div style={{ display: "flex", justifyContent: "center" }}>
                        <img
                            src=""
                            alt="UPI-Support"
                        />
                    </div> */}
                    {/* <Footer />
                    <ScrollToTop /> */}
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default SupportUs;
