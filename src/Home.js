import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <header className="item header margin-top-0">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="text-homeimage">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* STEPS =============================*/}
            <div className="item content">
                <div className="container toparea">
                    <div className="row text-center">
                        <div className="col-md-4">
                            <div className="col editContent">
                                <span className="numberstep">
                                    <img className="brand" src={require("./assets/images/microchip.png").default} alt="" style={{ width: '120px', height: '50px' }} />
                                </span>
                                <h3 className="numbertext">최고의 품질 추구</h3>
                                <p>
                                    공정 내 파라미터 최적화로 불량률 제로화 추구
                  </p>
                            </div>
                            {/* /.col-md-4 */}
                        </div>
                        {/* /.col-md-4 col */}
                        <div className="col-md-4 editContent">
                            <div className="col">
                                <span className="numberstep"><i className="fa fa-gift" />
                                    <img className="brand" src={require("./assets/images/quality_icons.png").default} alt="" style={{ width: '120px', height: '50px' }} />
                                </span>
                                <h3 className="numbertext">ISO9001 국제 규격 인증</h3>
                                <p>
                                    ISO에서 제정ㆍ시행하고 있는 품질경영시스템에 관한 국제규격
                        </p>
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.col-md-4 col */}
                        <div className="col-md-4 editContent">
                            <div className="col">
                                <span className="numberstep">
                                    <img className="brand" src={require("./assets/images/delivery_icon.png").default} alt="" style={{ width: '100px', height: '50px' }} />
                                </span>
                                <h3 className="numbertext">영업납기 준수</h3>
                                <p>
                                    최적경로 탐색을 통한 과부하 조절로 납기 준수
                  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* LATEST ITEMS =============================*/}
            <hr />
            <section className="item content">
                <div className="container">
                    <div className="underlined-title">
                        <div className="editContent">
                            <h1 className="text-center latestitems">임원소개</h1>
                        </div>
                        <div className="wow-hr type_short">
                            <span className="wow-hr-h">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="productbox">
                                <div className="fadeshop">
                                    <div className="captionshop text-center" style={{ display: 'none' }}>
                                        <h3>Item Name</h3>
                                        <p>
                                            This is a short excerpt to generally describe what the item is about.
                      </p>
                                        <p>
                                            <a href="#" className="learn-more detailslearn"><i className="fa fa-shopping-cart" /> Purchase</a>
                                            <a href="#" className="learn-more detailslearn"><i className="fa fa-link" /> Details</a>
                                        </p>
                                    </div>
                                    <span className="maxproduct"><img src="images/product1-1.jpg" alt="" /></span>
                                </div>
                                <div className="product-details">
                                    <a href="#">
                                        <h1>이태호 그룹장님</h1>
                                    </a>

                                </div>
                            </div>
                        </div>
                        {/* /.productbox */}
                        <div className="col-md-4">
                            <div className="productbox">
                                <div className="fadeshop">
                                    <div className="captionshop text-center" style={{ display: 'none' }}>
                                        <h3>Item Name</h3>
                                        <p>
                                            This is a short excerpt to generally describe what the item is about.
                      </p>
                                        <p>
                                            <a href="#" className="learn-more detailslearn"><i className="fa fa-shopping-cart" /> Purchase</a>
                                            <a href="#" className="learn-more detailslearn"><i className="fa fa-link" /> Details</a>
                                        </p>
                                    </div>
                                    <span className="maxproduct"><img src="images/product2.jpg" alt="" /></span>
                                </div>
                                <div className="product-details">
                                    <a href="#">
                                        <h1>배강국 교수님</h1>
                                    </a>

                                </div>
                            </div>
                        </div>
                        {/* /.productbox */}
                        <div className="col-md-4">
                            <div className="productbox">
                                <div className="fadeshop">
                                    <div className="captionshop text-center" style={{ display: 'none' }}>
                                        <h3>Item Name</h3>
                                        <p>
                                            This is a short excerpt to generally describe what the item is about.
                      </p>
                                        <p>
                                            <a href="#" className="learn-more detailslearn"><i className="fa fa-shopping-cart" /> Purchase</a>
                                            <a href="#" className="learn-more detailslearn"><i className="fa fa-link" /> Details</a>
                                        </p>
                                    </div>
                                    <span className="maxproduct"><img src="images/product2-3.jpg" alt="" /></span>
                                </div>
                                <div className="product-details">
                                    <a href="#">
                                        <h1>송홍준 교수님</h1>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* BUTTON =============================*/}

            <br />
            {/* AREA =============================*/}

            {/* TESTIMONIAL =============================*/}
            <div className="item content">
                <div className="container">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="slide-text">
                            <div>
                                <h2><span className="uppercase">Awesome Support</span></h2>
                                <img className="brand" src={require("./assets/images/space.png").default} alt="" style={{ width: '150px', height: '150px' }} />
                                <p>
                                    저희의 기술이 필요하다면 청암로 77 RIST연구 4동으로 </p>
                                <p>도미노 피자를 들고 또 방문부탁드려요~
                  </p>
                                <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* CALL TO ACTION =============================*/}
            <section className="content-block" style={{ backgroundColor: '#00bba7' }}>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-sm-10 col-sm-offset-1">
                            <div className="item" data-scrollreveal="enter top over 0.4s after 0.1s">
                                <h1 className="callactiontitle"> Promote Items Area Give Discount to Buyers <span className="callactionbutton"><i className="fa fa-gift" /> Purchase</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* FOOTER =============================*/}
            <div className="footer text-center">
                <div className="container">
                    <div className="row">
                        <p className="footernote">
                            Please Connect with P&O2
              </p>

                        <p>
                            © 2021 포스코의 산소같은 b반 2조<br />
                            <a href="https://ssgfoodingplus.com/fmn101.do?goTo=todayMenu&storeCd=05600">RIST식당</a>
                        </p>
                    </div>
                </div>
            </div>
            {/* SCRIPTS =============================*/}
        </div>
    );
}