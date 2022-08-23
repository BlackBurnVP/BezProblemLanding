package com.example.bp.repository;

import com.example.bp.domain.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepo extends CrudRepository<User, Long> {

    @Query(value = "select * from usr where name='System'", nativeQuery = true)
    User getSystemUser();
}
