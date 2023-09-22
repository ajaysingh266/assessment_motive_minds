import React from "react";
import { Modal } from "antd";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const InputSearch = (props: {
  isModalOpen: boolean;
  products: any;
  handleCancel: any;
}) => {
  const navigate = useNavigate();
  return (
    <Modal open={props.isModalOpen} footer={""} onCancel={props.handleCancel}>
      <div className={"modal-input-wrapper"}>
        <input
          placeholder={"Search for your product"}
          className={"modal-input"}
        />
      </div>
      <div style={{ height: "30rem", overflow: "auto" }}>
        {props.products.data.length ? (
          <>
            {props.products.data.map((product: Record<string, any>) => {
              return (
                <div
                  key={product.id}
                  onClick={() => navigate("/page_not_found")}
                  className={"modal-content-wrapper"}
                >
                  <img
                    src={product.image}
                    style={{
                      width: "2rem",
                      height: "3rem",
                    }}
                  />
                  <div>
                    <p
                      className={"modal-data-title"}
                    >{`${product.title.substring(0, 36)}`}</p>
                    <p className={"modal-data-category"}>{product.category}</p>
                    <p>{`${product.description.substring(0, 50)}..`}</p>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <p>No Data Found</p>
        )}
      </div>
    </Modal>
  );
};
const mapStateToProp = (state: any) => ({
  products: state.products,
});
export default connect(mapStateToProp)(InputSearch);
