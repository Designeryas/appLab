import './companies.scss';
import company1 from '../../assets/images/co-southwest.png';
import company2 from '../../assets/images/co-anubis.png';
import company3 from '../../assets/images/co-alonzo.png';
import company4 from '../../assets/images/co-express.png';
import company5 from '../../assets/images/co-maniac.png';


const Companies = ()=> {
    const companyImg = [company1,company2,company3, company4, company5];
    return (
        <div className="container companies pt-2 pt-md-5 pb-5">
            <div className="row justify-content-center">
                <span className="mt-4 mb-5">Trusted by companies like</span>
                {companyImg.map((item,index)=>{
                    return (
                        <div className="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 img" key={index}>
                        <img src={item} alt="" />
                    </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Companies;