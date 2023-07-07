const Table = () => {
    return (
        <>
            <div class="container">
                <table class="table table-hover table-secondary mt-3" id="myTable">
                    <thead>
                        <tr>
                            <th scope="col">2023</th>
                            <th scope="col">CSAT</th>
                            <th scope="col">NPS</th>
                            <th scope="col">REVENUE</th>
                            <th scope="col">QUALITY</th>
                            <th scope="col">RESOLUTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">JAN</th>
                            <td>95%</td>
                            <td>90%</td>
                            <td>94%</td>
                            <td>92%</td>
                            <td>88%</td>
                        </tr>
                        <tr>
                            <th scope="row">FEB</th>
                            <td>90%</td>
                            <td>89%</td>
                            <td>87%</td>
                            <td>87%</td>
                            <td>98%</td>
                        </tr>
                        <tr>
                            <th scope="row">MAR</th>
                            <td>75%</td>
                            <td>88%</td>
                            <td>91%</td>
                            <td>65%</td>
                            <td>75%</td>
                        </tr>
                        <tr>
                            <th scope="row">APR</th>
                            <td>87%</td>
                            <td>91%</td>
                            <td>90%</td>
                            <td>99%</td>
                            <td>95%</td>
                        </tr>
                        <tr>
                            <th scope="row">MAY</th>
                            <td>95%</td>
                            <td>85%</td>
                            <td>93%</td>
                            <td>90%</td>
                            <td>93%</td>
                        </tr>
                        <tr>
                            <th scope="row">JUN</th>
                            <td>95%</td>
                            <td>96%</td>
                            <td>99%</td>
                            <td>95%</td>
                            <td>75%</td>
                        </tr>
                        <tr>
                            <th scope="row">JUL</th>
                            <td>99%</td>
                            <td>95%</td>
                            <td>95%</td>
                            <td>94%</td>
                            <td>92%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table