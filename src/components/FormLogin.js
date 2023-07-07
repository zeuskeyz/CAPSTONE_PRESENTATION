import { Link } from "react-router-dom"

const FormLogin = () => {
    return (
        <>
            <form>
                <p className="lead my-3">Please login to your account</p>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                <div className="text-center pt-1 mb-3 pb-1">
                    <a className="text-muted" href="#!">Forgot password?</a>
                </div>
                <div className="text-center pt-1 mb-3 pb-1">
                    <Link to="/home" className="btn btn-primary btn-block gradient-custom-2 mb-3 col-12" type="button">Login</Link>
                </div>

                <div className="d-flex align-items-center justify-content-center pb-3">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <Link to="/sign-up" type="button" className="btn btn-outline-success">Sign Up</Link>
                </div>

            </form>
        </>
    )
}

export default FormLogin