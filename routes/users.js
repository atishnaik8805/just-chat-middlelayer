const express = require('express');
const userRouter = express.Router();
const { getDB }= require('../public/js/firestore-connect')




let userMiddlewareFuncs = {
    'addUser': async (req, res, next)=> {
        const userDocRef = db.collection('users').doc(req.user.displayName)
        await userDocRef.set(req.user);
        res.end()
    },
    'deleteUser': ()=> {

    },
    'updateUser': ()=> {

    }
}
userRouter.post('/add', async (req,res)=> {
    const db = getDB();
    //console.log(req);
    console.log('res', res)
    console.log('req', req.user)
//    const docRef = await db.collection('users')
    res.end()
});


module.exports = {userRouter, userMiddlewareFuncs};