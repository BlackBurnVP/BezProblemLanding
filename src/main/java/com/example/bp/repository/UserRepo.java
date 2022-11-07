package com.example.bp.repository;

import com.example.bp.domain.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepo extends CrudRepository<User, Long> {

    @Query(value = "select * from usr where name='System'", nativeQuery = true)
    User getSystemUser();

    @Query(value = "select * from usr " +
            "            inner join usr_roles ur on usr.id = ur.user_id " +
            "            inner join role r on ur.roles_id = r.id " +
            "            where r.name = 'Call Center' and usr.notifications is true  " +
            "              and usr.chat_id is not null and usr.chat_id != '';", nativeQuery = true)
    List<User> findByCallCenter();
}
