package com.orbit.demo.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.orbit.demo.rest.api.entities.User;

@Repository
public interface UserRepository extends PagingAndSortingRepository<User,Integer>
{

}
