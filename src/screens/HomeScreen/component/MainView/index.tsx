import React, { useState } from "react";
import { Rate, Select, Spin } from "antd";
import Card from "../../../../components/cards";
import { connect } from "react-redux";
import { options } from "../../../helper";
import { Base_URL } from "../../../../config/api";
import { getProducts } from "../../../../store/reducers/productSlice";
import { useNavigate } from "react-router-dom";

const MainView = (props: {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  products: Record<string, any>;
  getProducts?: any;
}) => {
  const [category, setCategory] = useState<string>("all");
  const navigate = useNavigate();
  const handleChange = (value: string) => {
    if (value === "all") {
      props.setLoading(true);
      fetch(Base_URL)
        .then((res) => {
          if (res.status === 200) {
            res.json().then((products) => {
              props.getProducts(products);
              setCategory(value);
            });
          }
        })
        .finally(() => {
          props.setLoading(false);
        });
    } else {
      props.setLoading(true);
      fetch(`${Base_URL}/category/${value}`)
        .then((res) => {
          if (res.status === 200) {
            res.json().then((data) => {
              props.getProducts(data);
              setCategory(value);
            });
          }
        })
        .finally(() => {
          props.setLoading(false);
        });
    }
  };
  return (
    <>
      <div className={"main-heading-container"}>
        <h2 className={"main-heading"}>{category}</h2>
        <div>
          <Select
            defaultValue={options[0].label}
            style={{ width: 200 }}
            onChange={handleChange}
            options={options}
          />
        </div>
      </div>
      <div>
        {props.loading ? (
          <div className={"main-spinner-wrapper"}>
            <Spin size="large" />
          </div>
        ) : (
          <div className={"main-data-container"}>
            {props.products.data.length ? (
              props.products.data.map((item: Record<string, any>) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => navigate("/page_not_found")}
                  >
                    <Card img={item.image} />
                    <div className={"main-data-text-wrapper"}>
                      <p className={"main-data-text-rating"}>Rating</p>
                      <div>
                        <Rate allowHalf value={item.rating.rate} />
                      </div>
                    </div>

                    <div className={"main-data-price-wrapper"}>
                      <p className={"price-text"}>
                        Rs{" "}
                        <span className={"price-font-600"}>{item.price}</span>
                      </p>
                      <p className={"main-data-category main-data-text-xs"}>
                        {item.category}
                      </p>
                    </div>
                    <p className={"main-data-text-xs main-data-title"}>
                      {`${item.title.substring(0, 61)}`}
                    </p>
                    <p className={"main-data-text-xs"}>
                      {`${item.description.substring(0, 50)}...`}
                    </p>
                  </div>
                );
              })
            ) : (
              <p className={"main-spinner-wrapper"}>No Data Found</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};
const mapStateToProps = (state: any) => ({
  products: state.products,
});
export default connect(mapStateToProps, { getProducts })(MainView);
