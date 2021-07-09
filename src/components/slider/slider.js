import './slider.scss';
import tick from '../../assets/images/tick.png';
import mobile from '../../assets/images/mobile.png';


const Slider = ()=> {
    return (
        <div className="container-fluid slider">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-6 mainText d-flex justify-content-center mt-5 mt-sm-0">
                        <div className="topText d-flex mb-3">
                            <div className="circle">
                                <img src={tick} alt="" />
                            </div>
                            <span>#1 Editiors Choice App of 2020</span>
                        </div>
                        <div className="title">
                            <h1>
                            Best app for your modern lifestyle
                            </h1>
                        </div>
                        <div className="description">
                            <span>
                            Increase productivity with a simple to-do app. app for managing
                            </span>
                        </div>
                        <div className="cta-btns mt-3">
                        <a href="#">Try for free</a> 
                        <a href="#">Watch demo video</a> 
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-5 d-none d-sm-block mobile">
                        <img src={mobile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;