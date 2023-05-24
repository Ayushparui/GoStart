import React from "react";
import "../index.css";

const Page = () => {
  return (
    <div className=" container my-4">
      <section>
        <p className="container">
          <strong>1k+ successfull deals</strong>
        </p>
        <h1 style={{ width: "560px" }} className=" my-2">
          Everything you need to buy and sell startups. No fees. No hassle.
          Total anonymity.
        </h1>
        <div className=" left flex-container">
          <p style={{ width: "560px" }} className="my-2">
            Join 100,000+ entrepreneurs buying and selling startups on the
            world’s #1 acquisition marketplace. Get free and instant access to
            120,000+ trusted buyers. Big or small, get your startup acquired at
            the maximum price in as little as 30 days.
          </p>
        </div>
        <div className="my-3 left flex-container">
          <button className="btn btn-outline-success" type="submit">
            View Listings
          </button>
          <button className="mx-2 btn btn-outline-success" type="submit">
            <i class="fa-solid fa-circle-play"></i> Watch Video
          </button>
        </div>
      </section>
    </div>
  );
};

export default Page;
