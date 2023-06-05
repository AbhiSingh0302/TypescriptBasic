"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    try {
        const Body = req.body;
        if (!Body.text) {
            throw new Error('text is not found');
        }
        const newTodo = {
            id: new Date().toISOString(),
            text: Body.text
        };
        todos.push(newTodo);
        return res.status(201).json({
            'success': 'true'
        });
    }
    catch (error) {
        return res.status(404).json({
            'success': 'false'
        });
    }
});
router.post('/delete', (req, res, next) => {
    try {
        const todoId = req.body;
        if (!todoId.id) {
            throw new Error('id not found');
        }
        const removedInd = todos.findIndex((val) => {
            return val.id === todoId.id;
        });
        todos.splice(removedInd, 1);
        return res.status(201).json({
            'success': 'true',
            'todos': todos
        });
    }
    catch (error) {
        return res.status(404).json({
            'success': 'false',
            'message': 'id not found'
        });
    }
});
router.post('/edit', (req, res, next) => {
    try {
        const todoId = req.body;
        const Body = req.body;
        console.log("Edit");
        console.log(todoId.id, " ", Body.newtext);
        if (!(todoId.id && Body.newtext)) {
            throw new Error('Not found');
        }
        const removedInd = todos.findIndex((val) => {
            return val.id === todoId.id;
        });
        console.log(removedInd);
        todos.forEach((val, ind) => {
            if (ind === removedInd) {
                todos[ind].text = Body.newtext;
            }
        });
        return res.status(201).json({
            'success': 'true',
            'todos': todos
        });
    }
    catch (error) {
        return res.status(404).json({
            'success': 'false',
            'message': 'Not found'
        });
    }
});
exports.default = router;
