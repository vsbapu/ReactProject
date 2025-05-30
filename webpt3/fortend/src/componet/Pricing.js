import React from "react";
import Info from "./info";
import Footer from "./footer";

function Pricing() {
    
    return(
        <>
              {/* <!-- price section --> */}

<section class="price_section layout_padding">
  <div class="container">
    <div class="heading_container heading_center">
      <h2>
        Our Pricing
      </h2>
    </div>
    <div class="price_container ">
      <div class="box">
        <div class="detail-box">
          <h2>$ <span>49</span></h2>
          <h6>
            Startup
          </h6>
          <ul class="price_features">
            <li>
              2GB RAM
            </li>
            <li>
              20GB SSD Cloud Storage
            </li>
            <li>
              Weekly Backups
            </li>
            <li>
              DDoS Protection
            </li>
            <li>
              Full Root Access
            </li>
            <li>
              24/7/365 Tech Support
            </li>
          </ul>
        </div>
        <div class="btn-box">
          <a href="">
            See Detail
          </a>
        </div>
      </div>
      <div class="box">
        <div class="detail-box">
          <h2>$ <span>99</span></h2>
          <h6>
            Standard
          </h6>
          <ul class="price_features">
            <li>
              4GB RAM
            </li>
            <li>
              50GB SSD Cloud Storage
            </li>
            <li>
              Weekly Backups
            </li>
            <li>
              DDoS Protection
            </li>
            <li>
              Full Root Access
            </li>
            <li>
              24/7/365 Tech Support
            </li>
          </ul>
        </div>
        <div class="btn-box">
          <a href="">
            See Detail
          </a>
        </div>
      </div>
      <div class="box">
        <div class="detail-box">
          <h2>$ <span>149</span></h2>
          <h6>
            Business
          </h6>
          <ul class="price_features">
            <li>
              8GB RAM
            </li>
            <li>
              100GB SSD Cloud Storage
            </li>
            <li>
              Weekly Backups
            </li>
            <li>
              DDoS Protection
            </li>
            <li>
              Full Root Access
            </li>
            <li>
              24/7/365 Tech Support
            </li>
          </ul>
        </div>
        <div class="btn-box">
          <a href="">
            See Detail
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <!-- price section --> */}
        <Info/>
        <Footer/>
        </>
    );
}export default Pricing;