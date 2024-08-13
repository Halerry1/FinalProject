package xianqing.zhang.backend.reprository;

import org.springframework.data.mongodb.repository.MongoRepository;
import xianqing.zhang.backend.model.Task;


public interface TaskRepository extends MongoRepository<Task, String> {
}