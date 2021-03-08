import Posts from "../models/Posts";

class PostsController {
  async index(request, response) {
    return response.json(await Posts.findAll());           
  };

  catch (error) {
    response.json({
      error:true, 
      message:error.message
  }
  );
  };

  async show(request, response) {
    const { id } = request.params;

    return response.json(await service.getById(id));
  };
  catch (error) {
    response.json({
      error:true, 
      message:error.message
  }
  );
  };

  async store(request, response) {
    const { content } = request.body;
    const result = await service.create(content);

    return response.json(result);
  };

  catch (error) {
    response.json({
      error:true, 
      message:error.message
  }
  );
  };

  async update(request, response) {
    const { id } = request.params;
    const { content } = request.body;
    const result = await service.update(
      content
    );

    return response.json(result);
  };

  catch (error) {
    response.json({
      error:true, 
      message:error.message
  }
  );
  };

  async delete(request, response) {
    const { id } = request.params;
    await service.delete(id);

    return response.sendStatus(202);
  };

  catch (error) {
    response.json({
      error:true, 
      message:error.message
  }
  );
  };
}

export default new PostsController();
