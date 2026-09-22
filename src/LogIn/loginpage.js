
import React from "react"
 
import '../LogIn/loginpage.css'
export default function LoginPage() {
    return (
        <section className>
            <div className="container py-5 h-100 mt-5 ">
                <div className="row d-flex justify-content-center align-items-center h-100 shadow-lg border-0">
                    <div className="col-xl-0 logincard ">
                        <div className="card text-black border-0  ">
                            <div className="row g-0 logincard">
                                <div className="col-lg-6 loginform">
                                    <div className="card-body p-md-5 mx-md-4">
                                        <div className="text-center">
                                            <h4 className="mt-1 mb-4 pb-1 text-success fw-bold"> JENTRA E-LIBRARY 
                                                 <br></br>
                                                Online Class Portal</h4>
                                        </div>
                                        <form>
                                            <p>Please login to your account</p>
                                            <div data-mdb-input-init className="form-outline mb-2 row">
                                                <input type="email" id="form2Example11" className="form-control"
                                                    placeholder="Phone number or email address" />

                                            </div>
                                            <div data-mdb-input-init className="form-outline mb-2 row">
                                                <input type="password" id="form2Example22" className="form-control" placeholder="Password" />

                                            </div>
                                            <div className=" text-center row">
                                                <button data-mdb-button-init data-mdb-ripple-init className="btn btn-success  text-white " type="button">Log
                                                    in</button> <p></p>

                                            </div>
                                            <a className="text-muted " href="#!">Forgot password?</a>
                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                            </div>

                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-3 bglogin">
                                    <h1 className="text-center text-dark">
                                         JENTRA E-LIBRARY ONLINE CLASS  
                                    </h1>
                                    
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

