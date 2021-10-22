import { Button, Card, DatePicker, Divider, Input, List, Progress, Slider, Spin, Switch, Row, Col } from "antd";
import React, { useEffect, useState } from "react";
import { ReactComponent as CardEx } from "../card_ex.svg";

export default function LinkTest({
  address,
  mainnetProvider,
  localProvider,
  yourLocalBalance,
  price,
  tx,
  readContracts,
  writeContracts,
}) {
  const init = async () => {
    console.log("called init");
    addEventListener("APIConsumer", "DiceLanded", onDiceLanded);
  };

  const addEventListener = async (contractName, eventName, callback, electionsMap) => {
    await readContracts[contractName].removeListener(eventName);
    readContracts[contractName].on(eventName, (...args) => {
      let msg = args.pop().args;
      callback(msg, electionsMap);
    });
  };

  const onDiceLanded = async msg => {
    console.log("onDiceLanded ", msg);
  };

  const update = async () => {};
  useEffect(() => {
    if (readContracts && readContracts.APIConsumer) {
      init();
    }
  }, [readContracts]);

  const getRandom = async () => {
    console.log("getRandom");
    const result = await tx(writeContracts.APIConsumer.rollDice(address, { gasLimit: 3200000 }));
    console.log(result);
  };

  return (
    <div style={{ maxWidth: 1024, margin: "auto", paddingBottom: 56 }}>
      <Button onClick={getRandom} style={{ marginBottom: "5px", marginTop: "25px" }}>
        Get Random Number
      </Button>
      <Divider />
    </div>
  );
}
