/* eslint-disable no-unused-vars */
import React from 'react';
import './InviteCard.css';

import Button from "./Button";

function InviteCard() {
  const queryParameters = new URLSearchParams(window.location.search)
  // const geo = queryParameters.get("geo")

  const link = "tg://join?invite=Q9XHgHP0gB5lMjky";
  
  return (
    <div className="invite-card">
      <div className="invite-card-content">
        <img src={require("./logo.jpg")} alt="ESCO Agency" className="channel-logo" />
        <h1 className="channel-name">Dubai USDT Exchange ♻️💰</h1>
        <p className="channel-handle">1 014 subscribers</p>
        <p className="channel-description">
          Crypto Exchange #1 in Dubai!
        </p>
        <ul>
          <li>💰Pay +2.5% for your tether </li>
          <li>👌🏻No verification and hidden commission</li>
        </ul>
        <p className="channel-description">
          Manager: <strong>@dubaiusdt_manager</strong>
        </p>
          <Button className="channel-link" text="join channel" link={link} type="msg" />
      </div>
    </div>
  );
}

export default InviteCard;
