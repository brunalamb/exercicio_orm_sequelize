import Users from "../models/Users";

class UsersController {
  async index(request, response) {
    return response.json(await Users.findAll());        
  }

  async show(request, response) {
    const { id } = request.params;

    return response.json(await service.getById(id));
  }

  async store(request, response) {
    const { name, email } = request.body;
    const result = await service.create(name, email);

    return response.json(result);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, email } = request.body;
    const result = await service.update(
      name, email
    );

    return response.json(result);
  }

  async delete(request, response) {
    const { id } = request.params;
    await service.delete(id);

    return response.sendStatus(202);
  }
}

export default new UsersController();
