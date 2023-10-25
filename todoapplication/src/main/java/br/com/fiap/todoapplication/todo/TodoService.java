package br.com.fiap.todoapplication.todo;

import br.com.fiap.todoapplication.exception.NoSuchObjectException;
import br.com.fiap.todoapplication.todo.dto.TodoFindDTO;
import br.com.fiap.todoapplication.todo.dto.TodoInsertDTO;
import br.com.fiap.todoapplication.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoService {

    @Autowired
    TodoRepository todoRepository;

    public List<TodoFindDTO> findAllByUserId(Long userId){
        return todoRepository.findAllByUserId(userId).stream().map(this::parseTodoTFDTO).collect(Collectors.toList());
    }

    public Todo findById(Long id) throws NoSuchObjectException {
        var todo = todoRepository.findById(id);

        if(todo.isEmpty())
            throw new NoSuchObjectException("Object with id".concat(String.valueOf(id)).concat(" Not found"));

        return todo.get();
    }

    public void save(Todo todo, User user){
        todo.setUser(user);
        todoRepository.save(todo);
    }

    public void updateTodo(TodoInsertDTO todoDTO, Long id) throws NoSuchObjectException {
        var todoInDB = findById(id);
        dataUpdater(todoInDB, todoDTO);
    }

    public void dataUpdater(Todo todoInDb, TodoInsertDTO todoDTO){
        todoInDb.setName(todoDTO.getName());
        todoInDb.setDescription(todoDTO.getDescription());
        todoRepository.save(todoInDb);
    }

    public TodoFindDTO parseTodoTFDTO(Todo todo) {
        return new TodoFindDTO(todo.getName(), todo.getDescription());
    }

    public boolean checkIfUserHasTodo(Long userId, Long todoId) throws NoSuchObjectException {
        List<Todo> userTodos = todoRepository.findAllByUserId(userId);

        if (userTodos.isEmpty())
            throw new NoSuchObjectException("User with id " + userId + "doesn't have any ToDo registered");

        for(Todo td : userTodos){
            if(td.getId().equals(todoId))
                return true;
        }
        return false;
    }
}
