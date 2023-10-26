package br.com.fiap.todoapplication.event.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Calendar;

@AllArgsConstructor
@Data
public class EventFindDTO {

    private String title;

    private Calendar date;

    private String status;

}
