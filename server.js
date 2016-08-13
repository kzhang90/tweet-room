const React = require("react");
const myComponent = require("./src/components/app");
const express = require("express");
const ReactComponent = React.createFactory(myComponent);
const app = express();

app.set("views")