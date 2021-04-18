/*
 * @Author: your name
 * @Date: 2021-03-31 13:26:08
 * @LastEditTime: 2021-04-18 23:37:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog-server\models\user.js
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    createTime: Date
});

// exports = module.exports = mongoose.model('User', userSchema);
