import "./FAQ.css";
import React, { useEffect, useState } from "react";
import { Button, Divider } from "antd";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

export default function FAQ() {
  const [route, setRoute] = useState();
  useEffect(() => {
    setRoute(window.location.pathname);
  }, [setRoute]);

  return (
    <>
      <div className="menu">
        <div className="menuLeft">
          <a href="/" className="unselected">
            Wands
          </a>
        </div>
        <div className="menuRight">
          <ul>
            <li>
              <a href="/faq" className="selected">
                FAQ
              </a>
            </li>
            <li>
              <a href="/">Resources</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="faq">
        <h2 style={{ color: "white" }}>Frequently Asked Questions</h2>

        <h2 style={{ color: "white" }}>Coming Soon</h2>
      </div>
    </>
  );
}
