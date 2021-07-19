import workshop from '../assets/image2.jpeg';
import soccerteam from '../assets/image4.jpeg';
import foodparcels from '../assets/image6.jpeg';

export const Accomplishments = () => {
    return (
        <section className="accoplishments">
            <div className="container">
                <h1>Accomplishments</h1>
                <p className="text-center">This is what we as Big Brothers United have done thus far</p>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <div className="whats_done">
                            <img src={workshop} className="work" />
                            <blockquote>
                                On Friday Big Brothers United hosted a youth awakening workshop in Beaconsfield in order to educate
                                the youth on the danger of drug and alcohol. The workshop was a huge success and later Big Brothers
                                united entertained the youth with a gospel show that was done in collaboration with the local church
                                Christian Apostolic Faith Ministries under the administration of Apostle Noel Erasmus.
                            </blockquote>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="whats_done">
                            <img src={soccerteam} className="work" />
                            <blockquote>
                            A young boys’ soccer team that is a product of Big Brothers United was accordingly launched; Beaconsfield Gunners FC.
                            </blockquote>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="whats_done">
                            <img src={foodparcels} className="work" />
                            <blockquote>
                            The programme for Big Brothers United was concluded on the 30th with a charity work that was carried out in Green point. Two households were randomly identified and food-parcels were handed over.
                            </blockquote>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}