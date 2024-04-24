import a from "../images/one.jpg"
import b from "../images/two.jpg"
import c from "../images/three.jpg"


function Product() {
    return (<div class="products">
        <div class="box">
            <img src={a} alt="fogg"></img>
            <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>


        <div class="box">
            <img src={b} alt="villain"></img>
            <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div class="box">
            <img src={c} alt="Designs Club"></img>
            <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
        </div>


    </div>)
}
export default Product