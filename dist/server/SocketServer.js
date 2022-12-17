"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var SocketServer_exports = {};
__export(SocketServer_exports, {
  default: () => SocketServer_default
});
module.exports = __toCommonJS(SocketServer_exports);
var import_net = require("net");
class SocketServer {
  listen(port = 3e3, host = "localhost") {
    const server = new import_net.Server();
    server.listen(port, host);
    server.on("connection", (socket) => {
      const socketInfo = `${socket.remoteAddress}:${socket.remotePort}`;
      socket.setEncoding("utf-8");
      console.log(`${socketInfo} has been conected`);
      socket.on("data", (httpMessage) => {
        console.log(`${socketInfo} has sent 
${httpMessage}`);
      });
      socket.on("close", () => {
        socket.end();
        console.log(`${socketInfo} exited from the server`);
      });
    });
  }
}
var SocketServer_default = SocketServer;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
