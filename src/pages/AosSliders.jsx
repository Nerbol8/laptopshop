import { Container } from "@mui/material";
import React from "react";
import { iphone } from "../responsive";
import styled from "styled-components";

const AnimationDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 25px;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 100px;
  ${iphone({ display: "flex", flexDirection: "column" })}
`;

const AosSliders = () => {
  return (
    <div>
      <AnimationDiv>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h4>Лучшие Компы</h4>
          <img
            className="box-shadow"
            width={300}
            src="https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <span className="descOfBes">
            Ноутбук Asus TUF Gaming F15 (FX506LI-BI5N5) 15.6\" FHD, Intel Core
            
          </span>
        </div>

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h4>Лучшие Компы</h4>
          <img
            className="box-shadow"
            width={300}
            src="https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <span className="descOfBes">
            Ноутбук Asus TUF Gaming F15 (FX506LI-BI5N5) 15.6\" FHD, Intel Core
            
          </span>
        </div>

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h4>Лучшие Компы</h4>
          <img
            className="box-shadow"
            width={300}
            src="https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1005&q=80"
            alt=""
          />
          <span className="descOfBes">
            Ноутбук Asus TUF Gaming F15 (FX506LI-BI5N5) 15.6\" FHD, Intel Core
           
          </span>
        </div>
      </AnimationDiv>
    </div>
  );
};

export default AosSliders;
