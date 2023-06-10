import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./App.css";

export default function IconDisplayer({ icon }) {
    return (
        <FontAwesomeIcon icon={icon} />
    );
}