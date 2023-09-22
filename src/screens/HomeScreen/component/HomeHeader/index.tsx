import React from "react";
import {imagesLogo} from "../../../helper";
import {useNavigate} from "react-router-dom"

const HomeHeader = () => {
    const navigate = useNavigate();
    const handleClick = (href: string) => {
        if (href === "") {
            navigate("/page_not_found")
        } else {
            window.location.href = href
        }
    }
    return (
        <div className={"home-header-container"}>
            {
                imagesLogo.map((image: { key: string, url: string, href: string }) => {
                    return (
                        <a
                            key={image.key}
                            className={"cursor-pointer"}
                            onClick={() => handleClick(image.href)}>
                            <div className={"home-img-container"}>
                                <div className={"home-img-wrapper"}>
                                    <img src={image.url} alt={"logo"} style={{width: "100%"}} className={"home-img"}/>
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </div>
    );
};

export default HomeHeader;
