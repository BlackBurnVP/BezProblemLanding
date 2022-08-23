package com.example.bp.repository;

import com.example.bp.domain.Lead;
import org.springframework.data.repository.CrudRepository;

public interface LeadRepo extends CrudRepository<Lead, Long> {
}
