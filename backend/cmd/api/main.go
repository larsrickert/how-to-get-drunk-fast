package main

import (
	"log"

	"github.com/larsrickert/how-to-get-drunk-fast/internal/server"
)

func main() {
	server := server.NewServer()

	if err := server.Start(); err != nil {
		log.Fatal("unable to start server", err)
	}
}
