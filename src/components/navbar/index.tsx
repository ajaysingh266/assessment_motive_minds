import React from "react";
import Logo from "../../assets/logo/logo.png";
import {FaSearch} from "react-icons/fa";
import "./index.scss"
import InputSearch from "../modal";

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <nav
                className={"navbar-container"}
            >
                <div className={"navbar-image-container"}>
                    <div className={"navbar-image-wrapper"}>
                        <div className={"navbar-image-inner-wrapper"}>
                            <div className={"navbar-image-div"}>
                                <img src={Logo} alt={"logo"} style={{height: "10rem", maxWidth: "100%"}}/>
                            </div>
                        </div>
                        <div className={"navbar-search-container"}>
                            <div className={"navbar-search-wrapper"}>
                                <button type={"button"} className={"navbar-search-btn"} onClick={showModal}>
                                    <div className={"navbar-search-btn-content"}>
                                        <FaSearch color={"#bfbfbf"}/>
                                        <span className={"navbar-search-btn-text"}>Search for Product</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <InputSearch isModalOpen={isModalOpen} handleCancel={handleCancel}/>
        </>
    );
};

export default Navbar;
