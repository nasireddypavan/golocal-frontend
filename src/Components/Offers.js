import { Image } from 'react-bootstrap'
import farm from '../images/farm.png'
import './Offers.css'

function Offers() {
    

    return (
        <>
        <h1 className= "weoffer">We Offer</h1>
        <div className= "imageone">
        <Image src={farm} fluid />
        </div>
        </>
    )
}

export default Offers;