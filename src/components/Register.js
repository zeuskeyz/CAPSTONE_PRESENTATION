import FormSignup from "./FormSignup"
const Register = () =>{
    return (
        <>
            <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-3 p-md-5 mx-md-4">
                                            <h4 className="mb-4">Customer Service KPIs</h4>
                                            <p className="small mb-0">
                                                Customer Service KPIs are essential to evaluate the effectiveness of a company’s customer service team. They measure customer satisfaction levels, track customer feedback, and monitor the team’s ability to acquire, manage, and retain customers. By measuring response time, resolution time, customer churn rate, and customer feedback scores, businesses can identify areas for improvement and enhance the customer experience. Additionally, these Customer Service KPIs help to build a customer-centric culture, leading to greater customer loyalty and advocacy.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <div className="text-center py-2">
                                                <img src="https://seeklogo.com/images/S/safaricom-twaweza-logo-A1C3B7B4B1-seeklogo.com.png" style={{ width: "185px" }} alt="logo" />
                                            </div>
                                            <FormSignup/>                                              
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register