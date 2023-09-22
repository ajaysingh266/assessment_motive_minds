import React from "react";
import HomeHeader from "./component/HomeHeader";
import MainView from "./component/MainView";
import Navbar from "../../components/navbar";
import "./index.scss";
import {Base_URL} from "../../config/api";
import {connect} from "react-redux";
import {getProducts} from "../../store/reducers/productSlice";

const HomeScreen = (props: {
    getProducts: any
}) => {
    const [loading, setLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        fetch(Base_URL).then((res) => {
            if (res.status === 200) {
                res.json().then((products) => {
                    props.getProducts(products)
                });
            }
        }).finally(() => {
            setLoading(false);
        });
    }, [])
    return (
        <>
            <Navbar/>
            <div className={"home-screen-container"}>
                <HomeHeader/>
                <MainView loading={loading} setLoading={setLoading}/>
            </div>
        </>
    );
};

export default connect(null, {getProducts})(HomeScreen);
