import PageTitle from "../../../components/page-title";

const PageTitleContainer = () => {
    return (
        <div className="page-title-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" data-aos="fade-up">
                        <PageTitle
                            classOption="page-title-content content-style2 text-center"
                            subTitle="About"
                            title="We Are Team Tales of Balasore"
                        />
                    </div>
                </div>
            </div>
            <div className="thumb" data-aos="fade-up" data-aos-delay="300">
                <img
                    className="w-100"
                    src={
                        process.env.PUBLIC_URL +
                        "https://firebasestorage.googleapis.com/v0/b/tales-of-balasore.appspot.com/o/About%2F01.png?alt=media&token=c157a7c8-adee-4874-85fd-7e48e9d6a417"
                    }
                    alt="Alexis"
                />
            </div>
        </div>
    );
};

export default PageTitleContainer;
