/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/api/routes.js":
/*!**********************************!*\
  !*** ./src/server/api/routes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _server_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server.js */ \"./src/server/server.js\");\n// import events from 'events'\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router(); // const emitter = new events.EventEmitter()\n\nrouter.use(express__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({\n  extended: true\n}));\nrouter.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\nrouter.use(morgan__WEBPACK_IMPORTED_MODULE_1___default()(\"common\")); //TODO: In the incoming handler, Read stream a few bytes at a time and emit an event containing those bytes. In the play handler, listen for the event and send the data. When the close event is emitted, end the response.\n// router.post('play', (req, res, next) =>{\n//   let id = req.query.id\n// //webrtc, socket.io\n//   let data\n//   while(data = __readBytesFromReq__()) {\n//     emitter.emit('data'+id, Buffer.from(data))\n//   }\n//   emitter.emit('close'+id)\n//   res.json({status: 'success', message:'Stream finished'})\n// })\n\nconsole.log(\"hi from apiv1.js\");\nrouter.get(\"/play/test\", (req, res, next) => {\n  try {\n    let id = req.query.id;\n    res.json({\n      id,\n      available: !!_server_js__WEBPACK_IMPORTED_MODULE_2__.recordings[id]\n    });\n  } catch (e) {\n    next(e);\n  }\n});\nrouter.get(\"/play\", (req, res, next) => {\n  console.log(\"hi from play\");\n\n  try {\n    let id = req.query.id;\n\n    if (!_server_js__WEBPACK_IMPORTED_MODULE_2__.recordings[id]) {\n      res.status(409);\n      res.json({\n        message: \"This data source isn't currently sending data. Please check the ID or try again later.\"\n      });\n      next();\n    } // let stream\n    // try {\n    //   stream = fs.createReadStream(id, {emitClose: true})\n    // } catch(err) {\n    //   next(err)\n    // }\n\n\n    res.writeHead(200, \"audio/mp3\"); // io.on('audio'+id, data=>res.write(data))\n    // io.on('close'+id, ()=>res.end())\n\n    _server_js__WEBPACK_IMPORTED_MODULE_2__.io.on(\"audio\" + id, data => console.log({\n      id,\n      event: \"audio\",\n      seq: data.seq\n    }));\n    _server_js__WEBPACK_IMPORTED_MODULE_2__.io.on(\"close\" + id, data => console.log({\n      id,\n      event: \"close\"\n    })); // TODO: Do I need to remove the listener to avoid memory leaks?\n    // stream.pipe(res)\n    // stream.on('close', ()=>res.end())\n  } catch (e) {\n    next(e);\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://fullstack_starter/./src/server/api/routes.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"recordings\": () => (/* binding */ recordings),\n/* harmony export */   \"io\": () => (/* binding */ io)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! loglevel */ \"loglevel\");\n/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(loglevel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n/* harmony import */ var _api_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/routes */ \"./src/server/api/routes.js\");\n// import events from 'events'\n\n\n\n\n\n // import cors from 'cors'\n\n\n\n\nconst config = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_5___default().join(__dirname, \"../src/server\", \"config.json\")).toString());\nloglevel__WEBPACK_IMPORTED_MODULE_3___default().setLevel(config.loglevel, false);\nloglevel__WEBPACK_IMPORTED_MODULE_3___default().debug(\"config: \", config);\nconst recordings = {};\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // app.use(cors())\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({\n  extended: true\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\napp.use(morgan__WEBPACK_IMPORTED_MODULE_4___default()(\"common\"));\napp.use(\"/\", (req, res, next) => {\n  try {\n    res.header({\n      \"Feature-Policy\": \"microphone\"\n    });\n    next();\n  } catch (e) {\n    next(e);\n  }\n});\napp.use(\"/api\", _api_routes__WEBPACK_IMPORTED_MODULE_8__.default);\napp.use(\"/test\", (req, res, next) => {\n  res.json({\n    message: \"success\"\n  });\n});\napp.use(\"/\", express__WEBPACK_IMPORTED_MODULE_0___default().static(path__WEBPACK_IMPORTED_MODULE_5___default().join(process.cwd(), \"public\")));\napp.use((req, res, next) => {\n  res.sendFile(path__WEBPACK_IMPORTED_MODULE_5___default().join(process.cwd(), \"public\", \"index.html\"));\n}); // 404 handler\n\napp.use((req, res, next) => {\n  try {\n    res.status(404);\n    res.json({\n      status: \"error\",\n      message: \"404 Not Found\"\n    });\n  } catch (e) {\n    next(e);\n  }\n});\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({\n    err,\n    status: \"error\",\n    req: {\n      path: req.path,\n      method: req.method\n    }\n  });\n}); //error handler: app.use((err, req,res, next) => {// is an error handler because it takes four parameters})\n// res.json({...err})\n//then call next(error)\n//\n// Custom 404: place on a general route, then override with a specific route\n\nconst server = http__WEBPACK_IMPORTED_MODULE_2___default().createServer(app);\nconst io = new socket_io__WEBPACK_IMPORTED_MODULE_6__.Server(server, {\n  cors: {\n    origin: `http://192.168.1.100:${config.port}`,\n    methods: [\"GET\", \"POST\"]\n  }\n});\nio.on(\"connection\", socket => {\n  console.log(\"a user connected\");\n  socket.emit(\"test\", {\n    test: true,\n    message: \"message\"\n  });\n  loglevel__WEBPACK_IMPORTED_MODULE_3___default().debug(socket);\n}).on(\"start recording\", ({\n  id\n}) => recordings[id] = true).on(\"stop recording\", ({\n  id\n}) => recordings[id] = false).on(\"ping\", () => console.log(\"ping\"));\nserver.on(\"connect\", socket => loglevel__WEBPACK_IMPORTED_MODULE_3___default().debug(`Client ${socket.remoteAddress}:${socket.remotePort} connected to the server at ${socket.localAddress}:${socket.localPort}.`)).on(\"connection\", socket => loglevel__WEBPACK_IMPORTED_MODULE_3___default().debug(`Connection established from ${socket.remoteAddress} port ${socket.remotePort} to ${socket.localAddress} port ${socket.localPort}`)).on(\"request\", (req, res) => loglevel__WEBPACK_IMPORTED_MODULE_3___default().debug(`Request received. URL: ${req.url}. Method: ${req.method}`)).on(\"upgrade\", (req, socket, head) => loglevel__WEBPACK_IMPORTED_MODULE_3___default().debug(`Upgrade requested. Header: ${head}\\nSocket:${socket}`));\nserver.listen(config.port, () => loglevel__WEBPACK_IMPORTED_MODULE_3___default().info(`Server listening on port ${config.port}`));\nprocess.on(\"SIGTERM\", () => _utils__WEBPACK_IMPORTED_MODULE_7__.default.kill_server(server));\nprocess.on(\"SIGINT\", () => _utils__WEBPACK_IMPORTED_MODULE_7__.default.kill_server(server));\nprocess.on(\"SIGHUP\", () => _utils__WEBPACK_IMPORTED_MODULE_7__.default.kill_server(server));\n\n//# sourceURL=webpack://fullstack_starter/./src/server/server.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loglevel */ \"loglevel\");\n/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(loglevel__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction kill_server(server) {\n  server.close(() => loglevel__WEBPACK_IMPORTED_MODULE_0___default().info(\"\\nServer shut down\\n\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  kill_server\n});\n\n//# sourceURL=webpack://fullstack_starter/./src/server/utils.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");;

/***/ }),

/***/ "loglevel":
/*!***************************!*\
  !*** external "loglevel" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("loglevel");;

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ 	
/******/ })()
;