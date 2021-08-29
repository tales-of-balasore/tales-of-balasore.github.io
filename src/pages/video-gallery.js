import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import PageTitleContainerTwo from "../containers/global/page-title-two";
import VideoGalleryContainer from "../containers/video-gallery";
import Footer from "../layouts/footer";
import Header from "../layouts/header/index";
import Layout from "../layouts/index";
import ReactGa from "react-ga";

const VideoGallery = () => {
    //Google Analytics
    ReactGa.initialize("UA-204999128-1");
    ReactGa.ga("set", "page", "/video-gallery");
    ReactGa.ga("send", "pageview");

    return (
        <React.Fragment>
            <Layout>
                <SEO title="Tales of Balasore || Video Gallery" />
                <div className="wrapper home-default-wrapper">
                    <Header classOption="hb-border" />
                    <div className="main-content">
                        <PageTitleContainerTwo
                            subTitle="Video Gallery"
                            title="Write &amp; Share"
                        />
                        <VideoGalleryContainer />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default VideoGallery;
