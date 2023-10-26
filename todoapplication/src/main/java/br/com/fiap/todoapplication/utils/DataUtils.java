package br.com.fiap.todoapplication.utils;

import lombok.experimental.UtilityClass;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

@UtilityClass
public class DataUtils {

    public Calendar parseStringToCalendar(String date) throws Exception {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

            Date data = sdf.parse(date);

            Calendar calendar = Calendar.getInstance();
            calendar.setTime(data);

            return calendar;
        }
        catch (ParseException e) {
            throw new Exception("Error trying parse" + date + "to Calendar entity");
        }
    }
}
