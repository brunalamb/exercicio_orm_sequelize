import Sequelize, { Model } from "sequelize";

class Posts extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      content: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,       
      },

      users_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,    
        references: {
        model: "users_posts",
        key: "id",
        }   
      },
    },
    {
      sequelize
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Users, {
      as: "users",
      foreignKey: "users_id",
    });
  }
}

export default Posts;