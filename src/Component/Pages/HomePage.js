import React, { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import "./HomePage.css";
import { BiDownload, BiWorld, BiWalletAlt } from "react-icons/bi";
import { BsShieldLockFill } from "react-icons/bs";
import { GoLink } from "react-icons/go";
import { ImProfile } from "react-icons/im";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { TbCloudDataConnection, TbCircles } from "react-icons/tb";
import { BsTwitter, BsTelegram } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

import "aos/dist/aos.css";
import AOS from "aos";

const SingleScrollPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const pageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = pageRef.current.scrollTop;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    };

    pageRef.current.addEventListener("scroll", handleScroll);

    return () => {
      pageRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="single-scroll-page" ref={pageRef}>
      <section className="section-1 active">
        <div className="container">
          <div className="row">
            <div className="col-md-6 section1-left mt-5">
              <div className="section1-title">
                <h1>TronLink Wallet</h1>
                <p>Link TRON Ecosystem</p>
                <div className="btn">
                  <Button variant="light">
                    <BiDownload /> Download Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-md-6 section1-right mt-5">
              <div className="section1-banner">
                <img
                  src="./image/mobile-2.png"
                  alt="mobie"
                  className="img-fluid mobile-2"
                />
                <img
                  src="./image/mobile-1.png"
                  alt="mobie"
                  className="img-fluid mobile-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 section1-left mt-5">
              <div className="section2-left ps-4 pb-5 ">
                <h4>More Secure</h4>
                <h2>Asset Management</h2>
              </div>
              <div className="section2-left-discription">
                <p className="d-flex p-4 ">
                  <span>
                    <BsShieldLockFill />
                  </span>
                  Decentralized wallet: data security ensured through local
                  storage of private key and multi-layer algorithm encryption.
                </p>
                <p className="d-flex p-4">
                  <span>
                    <GoLink />
                  </span>
                  Hot and cold wallets: sign in your hot wallet and store in
                  your cold wallet to achieve physical isolation and double
                  protection.{" "}
                </p>
                <p className="d-flex p-4">
                  <span>
                    <HiArrowPathRoundedSquare />
                  </span>
                  Node stability and reliability: free switching among nodes and
                  auto reconnection supported.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 section2-secure mt-5">
              <div class="secure-image">
                <div class="secure-shild-ball">
                  <img src="./image/ball.png" alt="" />
                  <div class="secure-shild-ball-line"></div>
                  {/* <img src="./image/line-1.png" alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 section3-left mt-5">
              <h4>More Well-Rounded</h4>
              <h2>Features of TRON</h2>
              <div className="section3-left-discription">
                <p className="d-flex p-4 ">
                  <span>
                    <BiWorld />
                  </span>
                  Full coverage of tokens: we support TRX, TRC-10, TRC-20 and
                  TRC-721 tokens while serving global TRON users.
                </p>
                <p className="d-flex p-4">
                  <span>
                    <TbCloudDataConnection />
                  </span>
                  Unique on-chain mechanism: you can stake TRX to gain resources
                  and voting rights, consume resources instead of gas fees and
                  vote for SRs to win considerable TRX.
                </p>
                <p className="d-flex p-4">
                  <span>
                    <TbCircles />
                  </span>
                  Available SDK and testnet: we serve developers who can help
                  expand TRON's ecosystem through joint efforts.
                </p>
              </div>
            </div>
            <div className="col-md-6 section3-right">
              <div className="secure-earth my-auto">
                <div className="secure-earth-rotate">
                  <div className="secure-earth-ball1 ">
                    <img src="./image/ball4.svg" alt="orbit ball" />
                  </div>
                  {/* <div className="secure-earth-ball2  secure-earth-ball2-animate"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 section3-left mt-5">
              <h4>More Convenient</h4>
              <h2>User Experience</h2>
              <div className="section3-left-discription">
                <p className="d-flex p-4 ">
                  <span>
                    <BiWalletAlt />
                  </span>
                  Simple and user-friendly: we support creating/importing
                  wallets with one click, HD wallets, importing Ledger wallets
                  via bluetooth and creating muiltiple wallet accounts.
                </p>
                <p className="d-flex p-4">
                  <span>
                    <ImProfile />
                  </span>
                  Multisignature feature: multiple accounts to manage one set of
                  assets with various use cases and a new way of signing.
                </p>
                <p className="d-flex p-4">
                  <span>
                    <TbCircles />
                  </span>
                  Switch and manage with ease: TronLink is available in the
                  forms of mobile app and browser extension, catering to your
                  needs in different use cases. Come and enjoy TRON DApps
                  whenever and wherever you want!
                </p>
              </div>
            </div>
            <div className="col-md-6 section3-right">
              <div className="secure-earth my-auto">
                <div className="secure-earth-rotate">
                  <div className="secure-earth-ball1 ">
                    <img src="./image/ball4.svg" alt="orbit ball" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 footer-contant mb-5">
              <h3 className="pb-3">Supported by World-Renowned Public Chain</h3>
              <h5>Number of Users Exceeds</h5>
              <h2 className="pb-5">10,000,000</h2>
              <Button variant="primary">
                <BiDownload /> Download Now
              </Button>
            </div>
          </div>
        </div>
        <div className="container-fluid footer">
          <div className="container d-flex footer-contant p-5 ">
            <div className="footer-links my-auto">
              <a href="/">
                <BsTwitter />
              </a>
              <a href="/">
                <BsTelegram />
              </a>
              <a href="/">
                <HiMail />
              </a>
              <a href="/">Help Center</a>
            </div>
            <div className="Privacy d-flex my-auto">
              <h6>©Rainco Pte Ltd 2023</h6>
              <h6>Privacy Policy</h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleScrollPage;
