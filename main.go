package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Get("/", Hello)

	log.Fatal(app.Listen(":8000"))
}

func Hello(c *fiber.Ctx) error {
	return c.SendString("I made a ☕ for you!")
}
