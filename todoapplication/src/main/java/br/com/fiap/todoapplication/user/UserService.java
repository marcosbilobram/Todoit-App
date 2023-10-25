package br.com.fiap.todoapplication.user;

import br.com.fiap.todoapplication.exception.NoSuchObjectException;
import br.com.fiap.todoapplication.todo.Todo;
import br.com.fiap.todoapplication.todo.TodoService;
import br.com.fiap.todoapplication.todo.dto.TodoInsertDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    TodoService todoService;

    public User findById(Long userId) throws NoSuchObjectException {
        var user = userRepository.findById(userId);

        if(user.isEmpty())
            throw new NoSuchObjectException("Object with id".concat(String.valueOf(userId)).concat(" Not found"));

        return user.get();
    }

    public void insertNewTodo(TodoInsertDTO todoInsertDTO, Long userId) throws NoSuchObjectException {
        var user = findById(userId);
        var todo = new Todo(todoInsertDTO);
        todoService.save(todo, user);
        user.addTask(todo);
        userRepository.save(user);
    }
}
