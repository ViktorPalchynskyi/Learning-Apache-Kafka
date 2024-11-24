const { DataTypes } = require('sequelize');
const { sequelize } = require('@config');
const Post = require('./post.model');

const Comment = sequelize.define('Comment', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

Comment.belongsTo(Post, { foreingKey: 'postId', onDelete: 'CASCADE' });
Post.hasMany(Comment, { foreingKey: 'postId' });

module.exports = Comment;
