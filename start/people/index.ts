import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.get("/peoples", "PeopleController.index");
  Route.post("/people", "PeopleController.store");
  Route.get("/people/:id", "PeopleController.show");
  Route.update("/people/edit/:id", "PeopleController.update");
  Route.delete("/people/delete/:id", "PeopleController.destroy");
})
  .prefix("/api")
  .prefix("/v1");
