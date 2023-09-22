import React from 'react';
import {page404Images} from "../helper";
import "./index.scss";
import PlugMan from "../../assets/page404Image/plug_man_deskop.png";
const Page404 = () => {
    return (
        <div className={"flex justify-center py-6"}>
        <div className={"w-[40vw]"}>
            <div className={"py-6"}>

                <h2 className={"text-6xl text-red-500 font-700 pb-4 text-center"}>Oops!</h2>
                <p className={"text-center"}>Something went wrong!</p>

            </div>
            <div>
                <p className={"text-center"}>Click below to browse similar deals from top shopping sites</p>
                <div className={"page404-container"}>
                {
                    page404Images.map((image:{key: string, url: string, href:string}) => {
                        return (
                            <div key={image.key} className={"cursor-pointer"}>
                                <div className={"page404-img-container"}>
                                    <div className={"page404-img-wrapper"}>
                                        <img src={image.url} alt={"logo"} style={{width:"100%"}} className={"page404-img"}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div className={"flex justify-center pt-10"}>
                <img src={PlugMan} alt={"plug"} style={{width:"100%"}}/>
            </div>
        </div>
        </div>
    );
};

export default Page404;