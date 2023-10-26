
import br.com.fiap.todoapplication.event.Event;
import br.com.fiap.todoapplication.event.EventRepository;
import br.com.fiap.todoapplication.event.dto.EventFindDTO;
import br.com.fiap.todoapplication.event.dto.EventInsertDTO;
import br.com.fiap.todoapplication.exception.NoSuchObjectException;
import br.com.fiap.todoapplication.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EventService {

    @Autowired
    EventRepository eventRepository;

    public List<EventFindDTO> findAllByUserId(Long userId){
        return eventRepository.findAllByUserId(userId)
                .stream().map(this::parseEventEFDTO).collect(Collectors.toList());
    }

    public Event findById(Long id) throws NoSuchObjectException {
        var Event = eventRepository.findById(id);

        if(Event.isEmpty())
            throw new NoSuchObjectException("Object with id".
                    concat(String.valueOf(id)).concat(" Not found"));

        return Event.get();
    }

    public void save(Event event, User user){
        event.setUser(user);
        eventRepository.save(event);
    }

    public void updateEvent(EventInsertDTO eventDTO, Long EventId, Long userId) throws NoSuchObjectException {
        if (checkIfUserHasEvent(userId, EventId)){
            var eventInDB = findById(EventId);
            dataUpdater(eventInDB, eventDTO);
        } else {
            throw new NoSuchObjectException("User with id " + userId +
                    "doesn't have any Event registered with ID " + EventId);
        }
    }

    public void dataUpdater(Event eventInDb, EventInsertDTO eventDTO){

        eventInDb.set(eventDTO.getName());
        eventInDb.setDescription(EventDTO.getDescription());
        eventRepository.save(eventInDb);
    }

    public void delete(Long userId, Long EventId) throws NoSuchObjectException {
        if (checkIfUserHasEvent(userId, EventId)) {
            eventRepository.deleteById(EventId);
        } else {
            throw new NoSuchObjectException("User with id " + userId +
                    "doesn't have any Event registered with ID " + EventId);
        }
    }

    public void changeEventStatus(Long idEvent) throws NoSuchObjectException {
        var event = findById(idEvent);
        if (event.getStatus().equals("Active")){
            event.setStatus("Cancelled");
        }else {
            event.setStatus("Active");
        }
        eventRepository.save(event);
    }

    public EventFindDTO parseEventEFDTO(Event event) {
        return new EventFindDTO(event.getTitle(), event.getDate(), event.getStatus());
    }

    public boolean checkIfUserHasEvent(Long userId, Long eventId) throws NoSuchObjectException {
        List<Event> userEvents = eventRepository.findAllByUserId(userId);

        if (userEvents.isEmpty())
            throw new NoSuchObjectException("User with id " + userId + "doesn't have any Event registered");

        findById(eventId);

        for(Event event : userEvents){
            if(event.getId().equals(eventId))
                return true;
        }
        return false;
    }
    
}
