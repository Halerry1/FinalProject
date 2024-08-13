package xianqing.zhang.backend.reprository;

import org.springframework.data.mongodb.repository.MongoRepository;
import xianqing.zhang.backend.model.Event;

public interface EventRepository extends MongoRepository<Event, String> {
}
