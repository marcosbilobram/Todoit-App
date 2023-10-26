package br.com.fiap.todoapplication.user;

import br.com.fiap.todoapplication.todo.dto.TodoFindDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{userId}/ToDos")
    public ResponseEntity<TodoFindDTO> findAllUserToDOs(@PathVariable Long userId){
        return findAllUserToDOs(userId);
    }

}
