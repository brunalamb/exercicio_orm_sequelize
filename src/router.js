import { Router } from 'express';
import UsersController from "./app/controllers/UsersController";
import PostsController from "./app/controllers/PostsController";

const routes = new Router();

routes.get("/users", UsersController.index);
routes.get("/users/:id", UsersController.show);
routes.post("/users", UsersController.store);
routes.put("/users/:id", UsersController.update);
routes.delete("/users/:id", UsersController.delete);

routes.get("/posts", PostsController.index);
routes.get("/posts/:id", PostsController.show);
routes.post("/posts", PostsController.store);
routes.put("/posts/:id", PostsController.update);
routes.delete("/posts/:id", PostsController.delete);


export default routes;

