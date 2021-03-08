module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("posts",
     {
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
          model: "users",
          key: "id",
        }   
      },
            
      created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
 
  });
},

  down: async queryInterface => {
    await queryInterface.dropTable("posts");    
  }
};
