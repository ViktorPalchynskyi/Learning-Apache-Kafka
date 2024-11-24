const { DataTypes } = require('sequelize');
const { sequelize } = require('@config');

const Post = sequelize.define('Post', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    tags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },
});

module.exports = Post;
