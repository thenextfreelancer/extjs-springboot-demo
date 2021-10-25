package com.orbit.demo.rest.api.entities;

import java.util.List;

public class Users
{
   private List<User> users;

   private boolean success;

   private String msg;

   public Users(List<User> users, boolean success, String msg)
   {
      this.users = users;
      this.success = success;
      this.msg = msg;
   }

   public List<User> getUsers()
   {
      return users;
   }

   public void setUsers(List<User> users)
   {
      this.users = users;
   }

   public String getMsg()
   {
      return msg;
   }

   public void setMsg(String msg)
   {
      this.msg = msg;
   }

   public boolean isSuccess()
   {
      return success;
   }

   public void setSuccess(boolean success)
   {
      this.success = success;
   }

}
