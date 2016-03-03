import sinon from 'sinon';
 
export default class FakeServer {
    constructor(settings) {
        this.server = undefined;
        this.routes = {};

        this.defaultSettings = {
            autoRespondAfter: 10,
            autoRespond: true,
            respondImmediately: false
        };

        this.setup(settings);
    }

    setup(settings) {
        this.stop();

        if (!this.server) {
            try {
                this.server = sinon.fakeServer.create();
            } catch (e) {
                console.error(e, arguments);
            }
        }
        Object.assign(this.defaultSettings, settings);
        this.server.configure(this.defaultSettings);
    }

    stop() {
        if (this.server && this.server.restore) {
            this.server.restore();
        }
    }

    addRoute(routeId, options) {
        options = options || {};

        // make sure we replace the route if it already exists
        this.removeRoute(routeId);

        this.server.respondWith(options.method.toUpperCase(), options.url, function (xhr, args1) {
            //let queryStringArguments =  arguments[1];
            console.log("WebAPI [" + routeId + "]", options.method, options.url, JSON.stringify(args1));

            let handlerCallbackFn = function (httpStatusCode, responseObj) {
                // validate the arguments from the callback
                if (typeof httpStatusCode !== "number" || (typeof responseObj !== "string" && typeof responseObj !== "object")) {
                    console.error("Invalid arguments: httpStatusCode[Number], responseObj[String or Object]", httpStatusCode, responseObj);
                }

                let responseString;
                if (typeof responseObj === "string") {
                    responseString = responseObj;
                } else {
                    responseString = JSON.stringify(responseObj);
                }

                xhr.respond(
                    httpStatusCode, {
                        "Content-Type": "application/json"
                    },
                    responseString
                );
            };

            let parameter = {};
            if (args1) {
                parameter = args1.toLowerCase();
            }
            options.handler(xhr, handlerCallbackFn, parameter);
        });
    }

    removeRoute(routeId) {
        var self = this;

        if (!this.server || !this.server.responses) {
            return;
        }

        // find the index of the response object at sinon server
        var index = this.server.responses.findIndex(function (o) {
            return o.url === self.routes[routeId] && self.routes[routeId].url && o.method === self.routes[routeId].method;
        });

        if (index >= 0) {
            this.server.responses.splice(index, 1);
        }
    }
}
