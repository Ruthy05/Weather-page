import React from "react";
import SectionTen from "./SectionTen";
import SectionEleven from "./SectionEleven";


export default function RequestDemoComponent(props) {
  return (
    <>
      

      <div className="container1">
        <h2>{props.title}</h2>
        <p>{props.subText}</p>
</div>
      <div className="container2">
        <div className="box">
          <div className="box-style">
            <form action="/action_page.php">
              <label htmlFor="companyname" className="top-name">
                Company Name
              </label>
              <input
                type="text"
                id="companyname"
                name="companyname"
                placeholder="Company name here.."
              />

              <p className="top-name">Contact Information</p>

              <label htmlFor="fullname" className="top-name">
                Full name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Your full name here.."
              />

              <label htmlFor="emailaddress" className="top-name">
                Email address
              </label>
              <input
                type="text"
                id="emailaddress"
                name="emailaddress"
                placeholder="Your email address here.."
              />

              <label htmlFor="phonenumber" className="top-name">
                Phone number
              </label>
              <input
                type="text"
                id="phonenumber"
                name="phonenumber"
                placeholder="+xxx xxx xxx xxxx"
              />

              <p className="top-name">Company size</p>
              <div className="shape-style">
                <label className="circle-shape">
                  <input type="radio" name="companysize" value="0-50" />
                  <span className="text1">0-50</span>
                </label>
                <label className="circle-shape">
                  <input type="radio" name="companysize" value="50-100" />
                  <span className="text1">50-100</span>
                </label>
                <label className="circle-shape">
                  <input type="radio" name="companysize" value="100-300" />
                  <span className="text1">100-300</span>
                </label>
                <label className="circle-shape">
                  <input type="radio" name="companysize" value=">300" />
                  <span className="text1">300 above</span>
                </label>
              </div>

              <label htmlFor="usecase" className="top-name">
                Potential Use-case
              </label>
              <textarea
              type="text"
                id="usecase"
                name="usecase"
                placeholder="Type your use case.."
              />

              <button type="submit" className="bottom-button">
                Request a demo
              </button>
            </form>
          </div>
        </div>
      </div>
      
<SectionTen/>
<SectionEleven/>
    
    </>
  );
}
