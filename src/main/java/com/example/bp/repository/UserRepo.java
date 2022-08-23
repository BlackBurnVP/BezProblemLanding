package com.example.bp.repository;

import com.example.bp.domain.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepo extends CrudRepository<User, Long> {

    @Query(value = "select * from usr where name='System'", nativeQuery = true)
    User getSystemUser();

    @Query(value = "select * from usr " +
            "inner join user_role ur on usr.id = ur.user_id " +
            "where ur.roles = 'Call_Center' and notifications is true ", nativeQuery = true)
    List<User> findByCallCenter();
}
