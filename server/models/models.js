const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    firstname: { type: DataTypes.STRING },
    lastname: { type: DataTypes.STRING },
    age: { type: DataTypes.INTEGER },
    avatar: { type: DataTypes.STRING, allowNull: false },
    created_at: { type: DataTypes.DATE, unique: true }
})

const Group = sequelize.define('group', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    owner_id: { type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING, unique: true },
    img: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    // created_at: { type: DataTypes.DATE, unique: true }
})

const Friend = sequelize.define('friend', {
    user_id: { type: DataTypes.INTEGER },
    friend_id: { type: DataTypes.INTEGER },
    // created_at: { type: DataTypes.DATE }
})

const Follower = sequelize.define('follower', {
    user_id: { type: DataTypes.INTEGER },
    follower_id: { type: DataTypes.INTEGER },
    // createdAt: { type: DataTypes.DATE }
})

const Chat = sequelize.define('chat', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, unique: true },
    created_at: { type: DataTypes.DATE },
    owner_id: { type: DataTypes.INTEGER }
})

const Message = sequelize.define('message', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER },
    type: { type: DataTypes.STRING },
    text: { type: DataTypes.STRING, unique: true },
    img: { type: DataTypes.STRING, allowNull: false },
    // createdAt: { type: DataTypes.DATA }
})

const Chat_members = sequelize.define('chat_members', {
    user_id: { type: DataTypes.INTEGER },
    chat_id: { type: DataTypes.INTEGER },
    // created_at: { type: DataTypes.DATE }
})

const Group_members = sequelize.define('group_members', {
    group_id: { type: DataTypes.INTEGER },
    user_id: { type: DataTypes.INTEGER },
    role: { type: DataTypes.STRING }
})

const Post = sequelize.define('post', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    text: { type: DataTypes.STRING },
    author_id: { type: DataTypes.INTEGER },
    img: { type: DataTypes.STRING, allowNull: false },
    // created_at: { type: DataTypes.DATE }
})

const Post_like = sequelize.define('post_like', {
    post_id: { type: DataTypes.INTEGER, unique: true },
    user_id: { type: DataTypes.INTEGER }
})

const Post_dislike = sequelize.define('post_dislike', {
    post_id: { type: DataTypes.INTEGER },
    user_id: { type: DataTypes.INTEGER }
})

const Comment = sequelize.define('comment', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.STRING },
    author_id: { type: DataTypes.STRING },
    post_id: { type: DataTypes.INTEGER },
    // created_at: { type: DataTypes.DATA }
})

const User_posts = sequelize.define('user_posts', {
    user_id: { type: DataTypes.INTEGER },
    post_id: { type: DataTypes.INTEGER }
})

const Group_posts = sequelize.define('group_posts', {
    group_id: { type: DataTypes.INTEGER },
    post_id: { type: DataTypes.INTEGER }
})

User.hasMany(Chat)
Chat.belongsTo(User)

User.hasMany(Group)
Group.belongsTo(User)

User.belongsTo(Friend)
Friend.belongsTo(User)

User.belongsTo(Follower)
Follower.belongsTo(User)

User.belongsToMany(Group, { through: Group_members })
Group.belongsToMany(User, { through: Group_members })

Chat.hasMany(Message)
Message.belongsTo(Chat)

Chat.belongsToMany(Message, { through: Chat_members })
Message.belongsToMany(Chat, { through: Chat_members })

Message.hasOne(Chat)
Chat.belongsTo(Message)

Post.hasMany(Post_like)
Post_like.belongsTo(Post)

Post.hasMany(Post_dislike)
Post_dislike.belongsTo(Post)

Post.hasMany(Comment)
Comment.belongsTo(Post)

User.belongsToMany(Post, { through: User_posts })
Post.belongsToMany(User, { through: User_posts })

Group.belongsToMany(Post, { through: Group_posts })
Post.belongsToMany(Group, { through: Group_posts })


module.exports = {
    User, Group, Group_members, Friend, Message, Chat, Chat_members, Post, Post_like, Post_dislike, Follower, User_posts, Group_posts, Comment
}