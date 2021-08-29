import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const ContactForm = () => {
    const sendForm = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        let result = {};
        data.forEach(function (value, key) {
            result[key] = value;
        });
        const { name, email, subject, message } = result;
        fetch("https://retoolapi.dev/48puF5/form-data", {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message,
            }),
        }).then((response) => {
            document.getElementById("contact-form").reset();
            swal({
                title: "Well received!",
                text:
                    "Thank you for your request, we will get back to you soon.",
                icon: "success",
                timer: "1000",
                button: false,
            });
        });
    };
    const { register, errors } = useForm({
        mode: "onBlur",
    });
    return (
        <Fragment>
            <form
                className="contact-form-wrapper"
                onSubmit={sendForm}
                id="contact-form"
            >
                <div className="row">
                    <div
                        className="col-md-4"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                ref={register({ required: "Name is required" })}
                            />
                            {errors.name && <p>{errors.name.message}</p>}
                        </div>
                    </div>
                    <div
                        className="col-md-4"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                ref={register({
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "invalid email address",
                                    },
                                })}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                    </div>
                    <div
                        className="col-md-4"
                        data-aos="fade-up"
                        data-aos-delay="900"
                    >
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                ref={register({
                                    required: "Subject is required",
                                })}
                            />
                            {errors.subject && <p>{errors.subject.message}</p>}
                        </div>
                    </div>
                    <div className="col-md-12" data-aos="fade-up">
                        <div className="form-group mb-0">
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your message here..."
                                ref={register({
                                    required: "Message is required",
                                })}
                            ></textarea>
                            {errors.message && <p>{errors.message.message}</p>}
                        </div>
                    </div>
                    <div
                        className="col-md-12 text-center"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="form-group mb-0">
                            <button className="btn-submit" type="submit">
                                Submit Message
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default ContactForm;
