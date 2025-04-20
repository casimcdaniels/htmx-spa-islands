package main

import (
	"log"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {

	// Echo instance
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.Static("/react", "react")
	e.GET("/", index)
	e.GET("/boom", func(ctx echo.Context) error {
		return ctx.HTML(200, "<div>Kaboom!</div>")
	})

	if err := e.Start(":8080"); err != nil {
		log.Fatal(err)
	}
}

func index(ctx echo.Context) error {
	return hello("htmx").Render(ctx.Request().Context(), ctx.Response().Writer)
}
