import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.get("/contacts", "ContactController.index");
  Route.post("/contact", "ContactController.store");
  Route.get("/contact/:id", "ContactController.show");
  Route.update("/contact/edit/:id", "ContactController.update");
  Route.delete("/contact/delete/:id", "ContactController.destroy");
})
  .prefix("/api")
  .prefix("/v1");
