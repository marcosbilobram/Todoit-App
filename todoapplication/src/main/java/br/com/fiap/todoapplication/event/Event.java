package br.com.fiap.todoapplication.event;

import br.com.fiap.todoapplication.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "tb_event")
@SequenceGenerator(name = "event", sequenceName = "SQ_TB_EVENT", allocationSize = 1)
public class Event {

    @Id
    Long id;

    @Column(length = 25, nullable = false)
    String title;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private User user;

}
