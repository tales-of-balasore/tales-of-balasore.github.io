import PropTypes from "prop-types";
import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import BlogItemContainer from "../containers/blog/blog-item";
import PageTitleContainerTwo from "../containers/global/page-title-two";
import BlogData from "../data/blog.json";
import Footer from "../layouts/footer";
import Header from "../layouts/header/index";
import Layout from "../layouts/index";
import { slugify } from "../utils";
import ReactGa from "react-ga";

const BlogTag = ({
    match: {
        params: { slug },
    },
}) => {
    //Google Analytics
    ReactGa.initialize("UA-204999128-1");
    ReactGa.ga("set", "page", "/tag/:slug");
    ReactGa.ga("send", "pageview");

    const data = BlogData.map((blog) => {
        return {
            ...blog,
            tags: blog.tags.filter((tag) => slugify(tag) === slug),
        };
    }).filter((blog) => blog.tags.length > 0);
    const tagTitle = data[0].tags[0];
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Tales of Balasore || Blog Tag" />
                <div className="wrapper home-default-wrapper">
                    <Header classOption="hb-border" />
                    <div className="main-content">
                        <PageTitleContainerTwo
                            subTitle="Tag"
                            title={tagTitle}
                        />
                        <BlogItemContainer data={data} />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

BlogTag.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            slug: PropTypes.string,
        }),
    }),
};

export default BlogTag;
