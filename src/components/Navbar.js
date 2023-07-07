const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-success navbar-dark">
                <div class="container">
                    <a class="navbar-brand" href="#">Dashboard</a>

                    <ul class="navbar-nav d-flex flex-row me-1">

                        <li class="nav-item me-3 me-lg-0">
                            <a class="nav-link text-white" href="https://www.safaricom.co.ke/about-landing">Core Values</a>
                        </li>
                        <li class="nav-item me-3 me-lg-0">
                            <a class="nav-link text-white" href="https://www.safaricom.co.ke/personal/m-pesa">M-Pesa</a>
                        </li>
                        <li class="nav-item me-3 me-lg-0">
                            <a class="nav-link text-white" href="https://www.business.safaricom.co.ke/">Safaricom Business</a>
                        </li>
                        <li class="nav-item me-3 me-lg-0">
                            <a class="nav-link text-white" href="https://www.safaricom.co.ke/customer-service">Contact Us</a>
                        </li>
                        <li class="nav-item me-3 me-lg-0">
                            <a class="nav-link text-white" href="https://www.safaricom.co.ke/personal/data/data-tariffs">Safaricom Internet</a>
                        </li>
                        <li class="nav-item me-3 me-lg-0">
                            <a class="nav-link text-white" href="https://www.safaricom.co.ke/careers">Careers</a>
                        </li>
                        
                    </ul>
                </div>

            </nav>

        </>
    )
}

export default Navbar