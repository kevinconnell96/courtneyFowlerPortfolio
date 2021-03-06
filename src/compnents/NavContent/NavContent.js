import React, { useState } from 'react';
import icon1 from "../../images/icons/icon1.png"
import icon2 from "../../images/icons/icon2.png"
import icon3 from "../../images/icons/icon3.png"
import icon4 from "../../images/icons/icon4.png"

const iconArr = [icon1, icon2, icon3, icon4];

const NavContent = (props) => {

    const [arrNum, setArrNum] = useState(Math.floor(Math.random() * 4));

    const changeIcon = () => {
        if (arrNum > 2) {
            setArrNum(0)
        } else {
            setArrNum(arrNum + 1)
        }
    }

    return (
        <div>
            {props.isMobile? '' : <h4>Courtney Fowler</h4>}

            <div style={{width: "80px", height: "64px", margin: "15px 0px 5px 25px"}}>

                <img src={iconArr[arrNum]} alt="floral icon" style={{width: "80px", height: "64px"}} onClick={changeIcon} />

            </div>

            <h5 className={props.category === 'horticulture' ? "current category" : "category"} data-cat="horticulture" data-tag="summer" onClick={props.handleClick}>Horticulture</h5>

            {/* Horticulture */}
            <h6 className={props.subcat === 'summer' ? "current subcat" : "subcat"} data-cat="horticulture" onClick={props.handleClick} data-tag="summer">Summer</h6>
            <h6 className={props.subcat === 'autumn' ? "current subcat" : "subcat"} data-cat="horticulture" onClick={props.handleClick} data-tag="autumn">Autumn</h6>
            <h6 className={props.subcat === 'winter' ? "current subcat" : "subcat"} data-cat="horticulture" onClick={props.handleClick} data-tag="winter">Winter</h6>
            <h6 className={props.subcat === 'spring' ? "current subcat" : "subcat"} data-cat="horticulture" onClick={props.handleClick} data-tag="spring">Spring</h6>
            <h6 className={props.subcat === 'floral' ? "current subcat" : "subcat"} data-cat="horticulture" onClick={props.handleClick} data-tag="floral">Floral</h6>

            {/* Photography */}
            <h5 className={props.category === 'photography' ? "current category" : "category"} data-cat="photography"
                data-tag="smiles" onClick={props.handleClick}>Photography</h5>

            <h6 className={props.subcat === 'smiles' ? "current subcat" : "subcat"} data-cat="photography" onClick={props.handleClick} data-tag="smiles">Smiles Beach Photo</h6>

            {/* Filmmaking */}
            <h5 className={props.category === 'filmmaking' ? "current category" : "category"} data-cat="filmmaking" data-tag="esteem" onClick={props.handleClick}>Filmmaking</h5>
            <h6 className="subcat" data-cat="filmmaking" onClick={props.handleClick} data-tag="esteem">eSteem</h6>
            <h6 className="subcat" data-cat="filmmaking" onClick={props.handleClick} data-tag="hardnipples">Hard Nipples</h6>
            <h6 className="subcat" data-cat="filmmaking" onClick={props.handleClick} data-tag="relapse">Relapse</h6>
            <h6 className="subcat" data-cat="filmmaking" onClick={props.handleClick} data-tag="time">Time</h6>
            <h6 className="subcat" data-cat="filmmaking" onClick={props.handleClick} data-tag="trendy">Trendy</h6>
            <h6 className="subcat" data-cat="filmmaking" onClick={props.handleClick} data-tag="production">Production Design</h6>
            <h6 className="subcat" data-cat="filmmaking" onClick={props.handleClick} data-tag="artDirection">Art Direction</h6>

            <h5 className={props.category === 'contact' ? "current category" : "category"} data-cat="contact" data-tag="contact" onClick={props.handleClick}>Contact</h5>
        </div>
    );
}

export default NavContent;