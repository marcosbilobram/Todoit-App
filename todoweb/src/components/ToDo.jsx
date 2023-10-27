"use client"

import { deleteTodo } from '@/actions/toDos';
import { Checkbox } from '@mui/material';
import { X } from 'lucide-react';

export default function ToDo({todo}) {

    const handleDelete = async () => {
        console.log(todo.id)
        await deleteTodo(todo.id)
        console.log("Deleted")
      }

    return (
        <div className="max-w-xs max-h-none rounded overflow-y-auto shadow-2xl bg-white m-10 w-1/3 border border-gray-600">
          <div className="px-6 py-7">
            <div className="font-bold text-xl mb-4 text-center">{todo.name}</div>
                <p className="text-gray-700 text-base text-center">
              {todo.description}
            </p>
          </div>
          <div className="w-auto items-center flex flex-row px-0 pt-4 justify-between">
            <div>
            <Checkbox/>
                <label className="items-center">
                <span className="ml-0.2 text-gray-700">Done</span>
                </label>
            </div>
            <X className="mr-2 cursor-pointer" onClick={handleDelete}/>
          </div>
        </div>
    )
}