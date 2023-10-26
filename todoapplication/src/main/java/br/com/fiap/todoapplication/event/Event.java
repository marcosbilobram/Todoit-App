package br.com.fiap.todoapplication.event;

import br.com.fiap.todoapplication.user.User;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Check;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Calendar;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "tb_event")
@SequenceGenerator(name = "event", sequenceName = "SQ_TB_EVENT", allocationSize = 1)
@Check(constraints = "status in ('Active', 'Cancelled')")
public class Event {

    @Id
    private Long id;

    @Column(name = "evnt_title", length = 25, nullable = false)
    private String title;

    @CreationTimestamp
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Calendar date;

    @Column(name = "evnt_status", nullable = false, length = 10)
    private String status;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User user;

}
