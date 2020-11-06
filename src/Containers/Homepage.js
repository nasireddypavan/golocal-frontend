import Newbar from '../Components/Newbar.js';
import Homepages from '../Components/Homepageheader';
import Products from '../Components/Products';
import Offers from '../Components/Offers';
import Footer from '../Components/Footer';
import Delivary from '../Components/Delivery';


function Homepage() {
    

    return (
        <>
            <div>
                <Newbar></Newbar>
                <Homepages></Homepages>
                <Products></Products>
                <Offers></Offers>
                <Delivary></Delivary>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Homepage;