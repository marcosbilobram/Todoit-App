package br.com.fiap.todoapplication.event.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Calendar;

@AllArgsConstructor
@Data
public class EventFindDTO {

    private String title;

    private Calendar date;

    private String status;

}
