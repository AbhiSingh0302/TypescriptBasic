import { Router } from "express";
import { Todo } from '../models/todo';

const todos: Todo[] = [];

const router = Router();

router.get('/',(req,res,next) => {
    res.status(200).json({todos: todos});
})

router.post('/todo',(req,res,next) => {
    try {
        if(! req.body.text){
            throw new Error('text is not found');
        }
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    }
    todos.push(newTodo);
    return res.status(201).json({
        'success': 'true'
    })
} catch (error) {
        return res.status(404).json({
            'success': 'false'
        })
}
})

router.post('/delete', (req,res,next) => {
    try {
        if(! req.body.id){
            throw new Error('id not found');
        }
    const removedInd = todos.findIndex((val) => {
        return val.id === req.body.id
    })
    todos.splice(removedInd,1);
    return res.status(201).json({
        'success': 'true',
        'todos': todos
    })
} catch (error) {
        return res.status(404).json({
            'success': 'false',
            'message': 'id not found'
        })
}
})

router.post('/edit', (req,res,next) => {
    try {
        console.log("Edit");
        console.log(req.body.id," ",req.body.newtext);
        if(!(req.body.id && req.body.newtext)){
            throw new Error('Not found');
        }
    const removedInd = todos.findIndex((val) => {
        return val.id === req.body.id
    })
    console.log(removedInd);
    todos.forEach((val,ind) => {
        if(ind === removedInd){
            todos[ind].text = req.body.newtext
        }
    })
    return res.status(201).json({
        'success': 'true',
        'todos': todos
    })
} catch (error) {
        return res.status(404).json({
            'success': 'false',
            'message': 'Not found'
        })
}
})

export default router;