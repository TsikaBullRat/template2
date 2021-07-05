export const Footer = () => {
    return (
        <footer id="footer" className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <h3>Contacts</h3>
                <p>call: <b>022 315 5698</b></p>
                <p>email: <b>ouradress@what.co.za</b></p>
                <p>Location: <b>Street</b></p>
                <b>
                    <p>Area</p>
                    <p>Town</p>
                    <p>Province</p>
                </b>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div>
                    <p>Copyright: <b>Mlabs South Africa,</b> All rights reserved<br />Developed By: Keahara van Blerk and Ntsikayomzi Ngcakani</p>
                </div>

            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <a> <i className="bi bi-facebook" style={{fontSize: 50, color: '#000'}}></i></a>
                <a> <i className="bi bi-instagram" style={{fontSize: 50, color: '#000', marginLeft:20}}></i></a>
            </div>
        </footer>
    )
}