package br.com.fiap.todoapplication.user;

import br.com.fiap.todoapplication.exception.NoSuchObjectException;
import br.com.fiap.todoapplication.todo.Todo;
import br.com.fiap.todoapplication.todo.TodoService;
import br.com.fiap.todoapplication.todo.dto.TodoFindDTO;
import br.com.fiap.todoapplication.todo.dto.TodoInsertDTO;
import br.com.fiap.todoapplication.user.dto.UserInsertDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    TodoService todoService;

    public User findById(Long userId) throws NoSuchObjectException {
        var user = userRepository.findById(userId);

        if(user.isEmpty())
            throw new NoSuchObjectException("User with id".concat(String.valueOf(userId)).concat(" Not found"));

        return user.get();
    }

    public User insertNewUser(UserInsertDTO userInsertDTO){
        var user = new User(userInsertDTO);
        return userRepository.save(user);
    }

    public void updateUser(UserInsertDTO userInsertDTO, Long userId) throws NoSuchObjectException {
        var userInDb = findById(userId);
        dataUpdater(userInDb, userInsertDTO);

    }

    public void delete(Long id) throws NoSuchObjectException {
        findById(id);
        userRepository.deleteById(id);
    }

    public void insertNewTodo(TodoInsertDTO todoInsertDTO, Long userId) throws NoSuchObjectException {
        var user = findById(userId);
        var todo = new Todo(todoInsertDTO);
        todoService.save(todo, user);
        user.addTask(todo);
        userRepository.save(user);
    }

    public List<TodoFindDTO> findAllUserToDos(Long id){
        return todoService.findAllByUserId(id);
    }

    public void dataUpdater(User userInDb, UserInsertDTO userInsertDTO){
        userInDb.setName(userInsertDTO.getName());
        if(userInsertDTO.getAvatarURL() == null)
            userInDb.setAvatarURL(userInDb.getAvatarURL());
        userRepository.save(userInDb);
    }
}
