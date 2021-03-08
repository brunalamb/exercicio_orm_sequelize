import Sequelize, { Model } from "sequelize"; //chaves? perguntar Vini

class Users extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,       
      },

      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,       
      },
    }, 
    {
       sequelize,
    }
  );

    return this;
  }

  static associante(models){
    this.hasMany(models.Posts,{
      as: "posts",
      foreignKey: "user_id",
    });
  }
}

export default Users;