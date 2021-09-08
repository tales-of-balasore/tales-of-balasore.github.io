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
    ReactGa.ga("set", "page", "/terms-and-conditions");
    ReactGa.ga("send", "pageview");

    return (
        <React.Fragment>
            <Layout>
                <SEO title="Tales of Balasore || Terms & Conditions" />
                <div className="wrapper home-default-wrapper">
                    <Header classOption="hb-border" />
                    <div className="main-content">
                        <div className="tc-container">
                            <h1>
                                {" "}
                                <b>Terms & Conditions</b>{" "}
                            </h1>
                            <ul>
                                <li>
                                    1. Use our hashtags <b>#talesofbalasore</b>,{" "}
                                    <b>#tales_of_balasore</b> and tag us on
                                    social media to get featured.
                                </li>
                                <li>
                                    2. Make sure to follow our social media
                                    accounts before tagging and using our
                                    hashtags.
                                </li>
                                <li>
                                    3. We will take our time to select the best
                                    quality photographs. So don&#39;t rush into
                                    our inbox.
                                </li>
                                <li>
                                    4. We only feature our Balasore. So
                                    don&#39;t tag and use our hashtags on any
                                    social media platform for other places.
                                </li>
                                <li>
                                    5. Please give detailed information of the
                                    photographs in caption (like location). And
                                    without this we can&#39;t feauture.
                                </li>
                                <li>
                                    6. Please don&#39;t keep messaging over
                                    whether we should feature or not feature,
                                    It&#39;s our decission only.
                                </li>
                                <li>
                                    7. We will slightly improve and modify the
                                    photographs before posting them to our
                                    website as well as social media accounts.
                                </li>
                                <li>
                                    8. We will definitely give credit to the
                                    photographers and also share their social
                                    media post links.
                                </li>
                                <li>
                                    9. We will organise some photography
                                    contests, for which we might take entry
                                    fees, and for sure, winners will be rewarded
                                    and featured on our website and social media
                                    platforms. Winners will be decided by voting
                                    only, don&#39;t try to cheat us. Don&#39;t
                                    worry we will organise free contests also.
                                </li>
                                <li>
                                    10. As we are a small team so please respect
                                    our time and work, don&#39;t steal
                                    someone&#39;s photographs and tag us. We are
                                    strictly against of this.
                                </li>
                                <li>
                                    11. We are not taking any money or anything
                                    for featuring except for the photography
                                    contest, so be aware of online scammers.
                                </li>
                                <li>
                                    12. We can add more T&Cs later if we want.
                                </li>
                            </ul>
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
