package com.orbit.demo.rest.api.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.orbit.demo.repository.UserRepository;
import com.orbit.demo.rest.api.entities.User;
import com.orbit.demo.rest.api.entities.Users;

@RestController
@RequestMapping("/user")
public class UserController
{

   @Autowired
   private UserRepository repository;

   /**
    * Store users in file
    * 
    * @param users
    * @return
    */
   @PostMapping
   public ResponseEntity<Users> post(User user)
   {
      try
      {
         User _user = repository.save(user);
         List<User> userList = new ArrayList<User>();
         userList.add(_user);
         return new ResponseEntity<>(new Users(userList, true, "User added."), HttpStatus.CREATED);
      }
      catch (Exception e)
      {
         return new ResponseEntity<>(new Users(null, false, "Error in adding user."), HttpStatus.INTERNAL_SERVER_ERROR);
      }
   }

   /**
    * Delete multiple users
    * 
    * @param users
    * @return
    */
   @DeleteMapping("/{id}")
   public ResponseEntity<HttpStatus> delete(@PathVariable Integer id)
   {
      try
      {
         repository.deleteById(id);
         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      catch (Exception e)
      {
         return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
      }
   }

   /**
    * Update users
    * 
    * @param users
    * @return
    */
   @PutMapping
   public ResponseEntity<Users> put(User user)
   {
      Optional<User> _user = repository.findById(user.getId());
      if (_user.isPresent())
      {
         User savedUser = repository.save(user);
         List<User> userList = new ArrayList<User>();
         userList.add(savedUser);
         return new ResponseEntity<>(new Users(userList, true, "User updated."), HttpStatus.OK);
      }
      else
      {
         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
   }

   /**
    * Get all users to display
    * 
    * @return
    */
   @GetMapping(params = { "page", "start", "limit" })
   public ResponseEntity<Users> getAll(@RequestParam Integer page, @RequestParam Integer start, @RequestParam Integer limit)
   {
      try
      {
         Pageable pageable = PageRequest.of(page - 1, limit, Sort.by("age").ascending());
         List<User> users = new ArrayList<User>();
         Page<User> pageObj = repository.findAll(pageable);
         pageObj.forEach(users::add);
         if (users.isEmpty())
         {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
         }

         return new ResponseEntity<>(new Users(users, true, "All users retruned."), HttpStatus.OK);
      }
      catch (Exception e)
      {
         return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
      }
   }

}