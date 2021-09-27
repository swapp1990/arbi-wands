import "./FAQ.css";
import React, { useEffect, useState } from "react";
import { Button, Divider } from "antd";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

export default function Resources() {
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
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/resources" className="selected">
                Resources
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="faq">
        <h2 style={{ color: "white" }}>Resources</h2>

        <h2 style={{ color: "white" }}>Coming Soon</h2>
      </div>
    </>
  );
}
