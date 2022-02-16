/**
 * @fileoverview gRPC-Web generated client stub for servicepb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.servicepb = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.servicepb.OrdersClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.servicepb.OrdersPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.servicepb.GetOrderRequest,
 *   !proto.servicepb.GetOrderResponse>}
 */
const methodDescriptor_Orders_GetOrder = new grpc.web.MethodDescriptor(
  '/servicepb.Orders/GetOrder',
  grpc.web.MethodType.UNARY,
  proto.servicepb.GetOrderRequest,
  proto.servicepb.GetOrderResponse,
  /**
   * @param {!proto.servicepb.GetOrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.servicepb.GetOrderResponse.deserializeBinary
);


/**
 * @param {!proto.servicepb.GetOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.servicepb.GetOrderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.servicepb.GetOrderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.servicepb.OrdersClient.prototype.getOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/servicepb.Orders/GetOrder',
      request,
      metadata || {},
      methodDescriptor_Orders_GetOrder,
      callback);
};


/**
 * @param {!proto.servicepb.GetOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.servicepb.GetOrderResponse>}
 *     Promise that resolves to the response
 */
proto.servicepb.OrdersPromiseClient.prototype.getOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/servicepb.Orders/GetOrder',
      request,
      metadata || {},
      methodDescriptor_Orders_GetOrder);
};


module.exports = proto.servicepb;

