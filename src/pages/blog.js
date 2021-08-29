import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import BlogContainer from "../containers/blog/blog-grid";
import PageTitleContainerTwo from "../containers/global/page-title-two";
import Footer from "../layouts/footer";
import Header from "../layouts/header/index";
import Layout from "../layouts/index";
import ReactGa from "react-ga";

const Blog = () => {
    //Google Analytics
    ReactGa.initialize("UA-204999128-1");
    ReactGa.ga("set", "page", "/blog");
    ReactGa.ga("send", "pageview");

    return (
        <React.Fragment>
            <Layout>
                <SEO title="Tales of Balasore || Blog" />
                <div className="wrapper home-default-wrapper">
                    <Header classOption="hb-border" />
                    <div className="main-content">
                        <PageTitleContainerTwo
                            subTitle="Our Blog"
                            title="Write &amp; Share"
                        />
                        <BlogContainer />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default Blog;
