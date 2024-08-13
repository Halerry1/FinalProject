package xianqing.zhang.backend.reprository;

import org.springframework.data.mongodb.repository.MongoRepository;
import xianqing.zhang.backend.model.User;


public interface UserRepository extends MongoRepository<User, String> {
}