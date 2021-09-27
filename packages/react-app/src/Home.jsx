import "./Home.css";
import React, { useEffect, useState } from "react";
import { Button, Divider } from "antd";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { animate, stagger } from "motion";
import { ReactComponent as Wand1 } from "./assets/351.svg";
import { ReactComponent as Wand2 } from "./assets/709.svg";
import { ReactComponent as Wand3 } from "./assets/833.svg";

export default function Home() {
  const [route, setRoute] = useState();
  useEffect(() => {
    setRoute(window.location.pathname);
  }, [setRoute]);

  useEffect(() => {
    animate(
      "#box",
      { x: 200 },
      {
        delay: stagger(0.1),
        duration: 0.5,
        easing: [0.22, 0.03, 0.26, 1],
      },
    );
  }, []);

  return (
    <>
      <div className="menu">
        <div className="menuLeft">
          <a href="/">Wands</a>
        </div>
        <div className="menuRight">
          <ul>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/resources">Resources</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="home">
        <div
          //   id="box"
          className="symbols"
        >
          <span style={{ fontSize: 50, color: "red" }}>Θ</span>
          <span style={{ fontSize: 50, color: "red" }}>Ϡ</span>
          <span style={{ fontSize: 50, color: "red" }}>ʓ</span>
        </div>
        <h1>Wands for Wizards</h1>
        <div>
          <Button type={"primary"}>
            <Link
              onClick={() => {
                setRoute("/app");
              }}
              to="/app"
            >
              ENTER GAME
            </Link>
          </Button>
        </div>

        <div className="description">
          <p>
            Wands for Wizards are randomized & unique 10k wands built and stored on Arbitrum chain. The wands that you
            own will be used throughout the Wizard Metaverse to perform magic.
          </p>
        </div>

        <div className="subHeader">
          <a>
            <a href="https://opensea.io" target="_blank" rel="noopener noreferrer">
              Marketplace
            </a>
          </a>
          <a>
            <a href="https://opensea.io" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
          </a>
          <a>
            <a
              href="https://arbiscan.io/address/0x991866c101521355153dec646a767246784c87af#code"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contract
            </a>
          </a>
        </div>
        <div className="examplesTitle">
          <span>Example Random Wands</span>
        </div>
      </div>
      <div className="examples">
        <Wand1></Wand1>
        <Wand2></Wand2>
        <Wand3></Wand3>
      </div>
    </>
  );
}
