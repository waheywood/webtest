package grpcapi

import (
	"context"
	"fmt"

	apiPB "github.com/waheywood/webtest/protos/go"
)

type server struct {
	apiPB.UnimplementedOrdersServer
}

func NewServer() *server {
	return &server{}
}

func (s server) GetOrder(ctx context.Context, request *apiPB.GetOrderRequest) (*apiPB.GetOrderResponse, error) {
	fmt.Println("Got a request")
	return nil, nil
}
