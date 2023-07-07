const Scorecard = () => {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></button>
                </div>

                <div class="carousel-inner">

                    <div class="carousel-item active">
                        <div class="card m-3 targets">
                            <div class="card-body mb-5 pb-5">
                                <h1 class= "lead display-1 fw-bold mt-5">NPS</h1>
                                <h3 class="card-text my-3">95%</h3>
                            </div>
                        </div>

                        <div class="carousel-caption d-none d-md-block text-dark">
                            <p>Some representative placeholder content for the 1st slide.</p>
                        </div>
                    </div>

                    <div class="carousel-item active">
                        <div class="card m-3 targets">
                            <div class="card-body mb-5 pb-5">
                                <h1 class= "lead display-1 fw-bold mt-5">REVENUE</h1>
                                <h3 class="card-text my-3">97%</h3>
                            </div>
                        </div>

                        <div class="carousel-caption d-none d-md-block text-dark">
                            <p>Some representative placeholder content for the 2nd slide.</p>
                        </div>
                    </div>

                    <div class="carousel-item active">
                        <div class="card targets m-3">
                            <div class="card-body mb-5 pb-5">
                                <h1 class= "lead display-1 fw-bold mt-5">CSAT</h1>
                                <h3 class="card-text my-3">90%</h3>
                            </div>
                        </div>

                        <div class="carousel-caption d-none d-md-block text-dark">
                            <p>Some representative placeholder content for the 3rd slide.</p>
                        </div>
                    </div>

                    <div class="carousel-item active">
                        <div class="card targets m-3">
                            <div class="card-body mb-5 pb-5">
                                <h1 class= "lead display-1 fw-bold mt-5">SOME KPI</h1>
                                <h3 class="card-text my-3">100%</h3>
                            </div>
                        </div>

                        <div class="carousel-caption d-none d-md-block text-dark">
                            <p>Some representative placeholder content for the 4th slide.</p>
                        </div>
                    </div>

                </div>

                <button class="carousel-control-prev me-5" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Scorecard