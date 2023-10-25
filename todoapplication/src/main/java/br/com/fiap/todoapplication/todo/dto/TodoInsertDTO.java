package br.com.fiap.todoapplication.todo.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
public class TodoInsertDTO {

    @Column(nullable = false, length = 30)
    private String name;

    @Column(nullable = false, length = 300)
    private String description;
}
