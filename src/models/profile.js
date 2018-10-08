module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define("Profile", {
    profileId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    summary: {
      type: DataTypes.STRING
    },
    bio: {
      type: DataTypes.STRING
    }
  });

  Model.associate = function(models) {
    this.Profile = this.belongsTo(models.User, {
      foreignKey: "userId"
      //targetKey: "userId"
    });
  };

  //sequelize.sync({ force: true });
  return Model;
};
