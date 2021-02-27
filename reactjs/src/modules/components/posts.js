module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts',{
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
      validate: {
        isUUID: { args:4, msg: 'ID not valid, please try again.'},
      },
    },
    title: {
      type: DataTypes.STRING,
      validate: {
        len: {args: [3, 500], msg: 'The post title is required to have at least 3 characters.'}
      },
    },
    content: {
      type: DataTypes.STRING,
      validate: {
        len: {args: [3, 500], msg: 'To make a post, it is required to have at least 3 characters.'}
    },
  },
  }, {});

  Posts.associate = (models) => {
    //associations can be defined here
    Posts.belongsTo(models.Users, {foreignKey: 'userId'});
    Posts.hasMany(models.Comments, {foreignKey: 'postId'});
    Posts.hasMany(models.PostTags, {foreignKey: 'postId'});
    Posts.hasMany(models.Votes, {foreignKey: 'postId'});
  };

  return Posts;
};
