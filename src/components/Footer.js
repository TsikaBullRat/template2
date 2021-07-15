export const Footer = () => {
    return (
        <footer id="footer" className="row">
            <div className="d-flex mt-2 ml-5 mr-5 pl-5 pr-5">
            <div className="text-center ml-5 col-lg-3 col-md-6 col-sm-12">
                </div>
                <div className="text-center ml-5 mr-5 col-lg-3 col-md-6 col-sm-12">
                    <h2>Phone</h2>
                    <h3>022 315 5698</h3>
                    <h3>Head Office</h3>
                </div>

                <div className="text-center ml-5 mr-5 col-lg-3 col-md-6 col-sm-12">
                    <h2>Email</h2>
                    <h3>ouradress@what.co.za</h3>
                    <h3>Head Office</h3>
                </div>

                <div class="text-center ml-5 mr-5 col-lg-3 col-md-12 col-sm-12">
                    <h2>Address:</h2>
                    <h3>BeaconField and Green Point</h3>
                    <h3>Kimberley</h3>
                </div>
            </div>

            <div className="d-flex bg-dark col-lg-12 col-sm-12" style={{ fontSize: 15, color: '#fff' }}>
            <div className="col-lg-4 col-md-6 col-sm-12"></div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-cneter">
                        <p>Copyright: <b>Mlabs South Africa,</b> All rights reserved<br />Developed By: Keahara van Blerk and Ntsikayomzi Ngcakani</p>
                </div>
                <div className="d-flex col-lg-4 col-md-6 col-sm-12 justify-content-end">
                    <a> <i className="bi bi-facebook mr-3" style={{ fontSize: 30}}></i></a>
                    <a> <i className="bi bi-instagram ml-3" style={{ fontSize: 30}}></i></a>
                </div>
            </div>
        </footer>
    )
}