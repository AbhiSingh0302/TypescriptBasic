import { Router } from "express";
import { Todo } from '../models/todo';
import { type } from "os";

const todos: Todo[] = [];

const router = Router();

type bodyText = {text: string};
type bodyId = {id: string};
type bodyNewText = {newtext: string}

router.get('/',(req,res,next) => {
    res.status(200).json({todos: todos});
})

router.post('/todo',(req,res,next) => {
    try {
        const Body = req.body as bodyText;
        if(! Body.text){
            throw new Error('text is not found');
        }
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: Body.text
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
        const todoId = req.body as bodyId;
        if(! todoId.id){
            throw new Error('id not found');
        }
    const removedInd = todos.findIndex((val) => {
        return val.id === todoId.id
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
        const todoId = req.body as bodyId;
        const Body = req.body as bodyNewText;
        console.log("Edit");
        console.log(todoId.id," ",Body.newtext);
        if(!(todoId.id && Body.newtext)){
            throw new Error('Not found');
        }
    const removedInd = todos.findIndex((val) => {
        return val.id === todoId.id
    })
    console.log(removedInd);
    todos.forEach((val,ind) => {
        if(ind === removedInd){
            todos[ind].text = Body.newtext
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