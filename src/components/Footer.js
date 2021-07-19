export const Footer = () => {
    return (
        <div className="footer" style={{ color: "white" }}>
            <div className=" row ">

                <div class="text-center col-lg-3 col-md-12 col-sm-12">
                    <h6>Phone</h6>
                    <p>022 315 5698</p>
                    <p>Head Office</p>
                </div>

                <div className="text-center col-lg-4 col-md-6 col-sm-12">
                    <h6>Email</h6>
                    <p>ouradress@what.co.za</p>
                    <p>Head Office</p>
                </div>

                <div className="text-center col-lg-4 col-md-6 col-sm-12">
                    <h6>Address:</h6>
                    <p>BeaconField and Green Point</p>
                    <p>Kimberley</p>
                </div>

            </div>

            <div className=" bg-dark col-lg-12 col-sm-12" >
                <div className="col-lg-11 col-md-6 col-sm-12 " style={{ fontSize: 15, color: '#fff', display: "flex", justifyContent: 'center' }}>
                    <div className="ml-1 pt-3">
                        <p >Copyright: All rights reserved<br />Developed By: Keahara van Blerk and Ntsikayomzi Ngcakani</p>
                    </div>

                </div>

            </div>
        </div>
    )
}