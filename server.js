const React = require("react");
const myComponent = require("./src/components/app");
const express = require("express");
const ReactComponent = React.createFactory(myComponent);
const app = express();

// catchall to send back main app component in string,
// rest of routing goes to react router