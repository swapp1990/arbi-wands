import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="/">
      <PageHeader
        title="Wands for Wizards"
        subTitle="Arbitrum NFT game"
        style={{ cursor: "pointer", backgroundColor: "black" }}
      />
    </a>
  );
}
