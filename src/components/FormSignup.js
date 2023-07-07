import { Link } from "react-router-dom"

const FormSignup = () => {
    return (
        <>
            <form role="form">
                <p className="lead mb-3 text-center">Create your Account</p>

                <div class="row mb-3">
                    <div class="col-6">
                        <div class="form-group">
                            <input type="text" name="first_name" id="first_name" class="form-control input-sm" placeholder="First Name" />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <input type="text" name="last_name" id="last_name" class="form-control input-sm" placeholder="Last Name" />
                        </div>
                    </div>
                </div>

                <div class="form-group mb-3">
                    <input type="text" name="employment" id="employment" class="form-control input-sm" placeholder="Employment Number" />
                </div>

                <div class="row mb-3">
                    <div class="col-6">
                        <div class="form-group">
                            <input type="text" name="region" id="region" class="form-control input-sm" placeholder="Shop Region" />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <input type="text" name="location" id="location" class="form-control input-sm" placeholder="Shop Location" />
                        </div>
                    </div>
                </div>

                <div class="form-group mb-3">
                    <input type="text" name="manager" id="manager" class="form-control input-sm" placeholder="Current Manager" />
                </div>

                <div class="row mb-3">
                    <div class="col-6">
                        <div class="form-group">
                            <input type="text" name="region" id="email" class="form-control input-sm" placeholder="Email Address" />
                        </div>
                    </div>
                    <div class="col-6">
                        <select class="form-select">
                            <option selected>Role</option>
                            <option value="Manager">Manager</option>
                            <option value="Agent">Agent</option>
                        </select>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-xs-6 col-sm-6 col-md-6">
                        <div class="form-group">
                            <input type="password" name="password" id="password" class="form-control input-sm" placeholder="Password" />
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6">
                        <div class="form-group">
                            <input type="password" name="password_confirmation" id="password_confirmation" class="form-control input-sm" placeholder="Confirm Password" />
                        </div>
                    </div>
                </div>

                <Link to="/" type="submit" class="btn btn-success col-12">SUBMIT</Link>


            </form>

        </>
    )
}

export default FormSignup