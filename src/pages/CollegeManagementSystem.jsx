import { Link } from "react-router-dom";

function CollegeManagementSystem() {
  return (
    <>
      <section id="hero" className="hero d-flex align-items-center">
        <div data-aos="fade-up" className="container">
          <header className="section-header">
            <h2
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#4154f1",
                textTransform: "none",
              }}
            />
          </header>
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                  <h3
                    style={{ color: "#0c219a", fontWeight: 700, fontSize: 32 }}
                  >
                    College Management System
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    College management system or college ERP is designed
                    considering the need of colleges in today&apos;s time for
                    end-to-end digitisation. It brings all the stakeholders on a
                    single cloud based web and Mobile App platform to provide
                    strong platform based connectivity for truly digital
                    operations.
                  </p>
                </div>
                <div
                  className="col-lg-6 hero-img aos-init aos-animate"
                  data-aos="zoom-out"
                >
                  <img
                    src="assets/img/services/college-management-system.jpeg"
                    className="img-fluid"
                    alt="College Management System"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    {" "}
                    <img
                      src="assets/img/school-management.png"
                      style={{ width: 50, height: 50 }}
                      alt="School Automation System"
                      title="College Automation System - Info Era"
                    />
                    <b> School Management System</b>
                  </p>
                </div>
                <div className="col-md-12">
                  <p>
                    {" "}
                    <img
                      src="assets/img/hospital-management.png"
                      style={{ width: 50, height: 50 }}
                      alt="Hospital Management System"
                      title="Hospital Management System - Info Era"
                    />
                    <Link to="/hospital-management-system">
                      <b> Hospital Management System</b>
                    </Link>
                  </p>
                </div>
                <div className="col-md-12">
                  <p>
                    <img
                      src="assets/img/hotel-management.png"
                      style={{ width: 50, height: 50 }}
                      alt="Hotel Management System - Info Era Software Services"
                    />
                    <Link to="/hotel-management-system">
                      <b> Hotel Management System</b>
                    </Link>
                  </p>
                </div>
                <div className="col-md-12">
                  <p>
                    <img
                      src="assets/img/realestate.png"
                      style={{ width: 50, height: 50 }}
                      alt="Real Estate Management System"
                      title="Real Estate Management System - Info Era Software Services Pvt Ltd"
                    />
                    <Link to="/real-estate-manaement-system">
                      {" "}
                      <b> Real Estate Manag. System</b>
                    </Link>
                  </p>
                </div>
                <div className="col-md-12">
                  <p>
                    <img
                      src="assets/img/custom.png"
                      style={{ width: 50, height: 50 }}
                      alt="Customize Web Application"
                      title="Customize Web Application - Software Company"
                    />
                    <Link to="/shop-management-system">
                      {" "}
                      <b> Shop Management System</b>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
    </>
  );
}

export default CollegeManagementSystem;