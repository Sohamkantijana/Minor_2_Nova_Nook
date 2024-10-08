import { ChangeEvent, useState } from "react";
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";

const Shipping = () => {

    const navigate = useNavigate()

    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        state: "",
        country: "",
        pinCode: "",
    });

    const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setShippingInfo((prev) => ({...prev, [e.target.name]: e.target.value}));
    };


    return <div className="shipping">

        <button className="back-btn" onClick={()=>navigate("./cart")}>
            <BiArrowBack />
        </button>

        <form>
            <h1>Shipping Address</h1>

            <input
                required
                type="text"
                placeholder="Address"
                name="address"
                value={shippingInfo.address}
                onChange={changeHandler}
            />

            <input
                required
                type="text"
                placeholder="City"
                name="city"
                value={shippingInfo.city}
                onChange={changeHandler}
            />

            <input
                required
                type="text"
                placeholder="State"
                name="state"
                value={shippingInfo.state}
                onChange={changeHandler}
            />

            <select name="country" required value={shippingInfo.country}
                onChange={changeHandler}>

                <option value="">Choose Country</option>
                <option value="india">India</option>
                <option value="america">America</option>
                <option value="china">China</option>
                <option value="nepal">Nepal</option>
                <option value="portugal">Portugal</option>
                <option value="brazil">Brazil</option>
                <option value="russia">Russia</option>
                <option value="united kingdom">United Kingdom</option>
                <option value="argentian">Argentina</option>




            </select>

            <input
                required
                type="number"
                placeholder="Pin code"
                name="pinCode"
                value={shippingInfo.pinCode}
                onChange={changeHandler}
            />


            <button type="submit"><b>Pay Now</b></button>
        </form>
    </div>;

};

export default Shipping;