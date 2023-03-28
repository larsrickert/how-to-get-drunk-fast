package server

import (
	"github.com/pocketbase/pocketbase"
)

type Server struct {
	pb *pocketbase.PocketBase
}

func NewServer() *Server {
	return &Server{
		pb: pocketbase.New(),
	}
}

func (s *Server) Start() error {
	// we can add custom endpoints etc. here
	return s.pb.Start()
}
