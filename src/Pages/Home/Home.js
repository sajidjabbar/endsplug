import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Newslettter from "../../components/Newslettter";

const Home = () => {
  return (
    <>
      {/* header starts here */}
      <Header />
      {/* header ends here */}
      {/* live stream wrapper starts here */}
      <section className="live-steam-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div  className="stream-card-wrapper">
                <div className="stream-img-wrapper">
                  
                </div>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </section>
      {/* live stream wrapper ends here */}
      {/* newsletter starts here */}
      <Newslettter />
      {/* newsletter ends here */}
      {/* footer starts here */}
      <Footer />
      {/* footer ends here */}
    </>
  );
};

export default Home;
