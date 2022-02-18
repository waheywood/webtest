package main

import (
	"net"

	grpcAPI "github.com/waheywood/webtest/go/api/grpc"
	apiPB "github.com/waheywood/webtest/protos/go"
	"google.golang.org/grpc"
)

func main() {
	lis, _ := net.Listen("tcp", "localhost:10000")
	server := grpcAPI.NewServer()
	grpcServer := grpc.NewServer()
	apiPB.RegisterOrdersServer(grpcServer, server)
	grpcServer.Serve(lis)
}
