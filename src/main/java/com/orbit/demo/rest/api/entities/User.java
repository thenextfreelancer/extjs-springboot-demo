package com.orbit.demo.rest.api.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "user")
public class User
{
   @Id
   @Column(name = "id")
   private int id;

   @Column(name = "name")
   private String name;

   @Column(name = "first_name")
   private String firstName;

   @Column(name = "middle_name")
   private String middleName;

   @Column(name = "last_name")
   private String lastName;

   @Column(name = "age")
   private int age;

   @Column(name = "gender")
   private int gender;

   @DateTimeFormat(pattern = "dd/MM/yyyy")
   @Column(name = "dob")
   private Date birthDate;

   @Column(name = "email")
   private String email;

   @Column(name = "phone")
   private String mobile;

   @Column(name = "known_languages")
   private String knownLanguages;

   public User()
   {}

   public User(
      int id,
      String name,
      String firstName,
      String middleName,
      String lastName,
      int age,
      int gender,
      Date birthDate,
      String email,
      String mobile,
      String knownLanguages)
   {
      this.id = id;
      this.name = name;
      this.firstName = firstName;
      this.middleName = middleName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.birthDate = birthDate;
      this.email = email;
      this.mobile = mobile;
      this.knownLanguages = knownLanguages;
   }

   public int getId()
   {
      return id;
   }

   public void setId(int id)
   {
      this.id = id;
   }

   public String getName()
   {
      return name;
   }

   public void setName(String name)
   {
      this.name = name;
   }

   public String getFirstName()
   {
      return firstName;
   }

   public void setFirstName(String firstName)
   {
      this.firstName = firstName;
   }

   public String getMiddleName()
   {
      return middleName;
   }

   public void setMiddleName(String middleName)
   {
      this.middleName = middleName;
   }

   public String getLastName()
   {
      return lastName;
   }

   public void setLastName(String lastName)
   {
      this.lastName = lastName;
   }

   public int getAge()
   {
      return age;
   }

   public void setAge(int age)
   {
      this.age = age;
   }

   public int getGender()
   {
      return gender;
   }

   public void setGender(int gender)
   {
      this.gender = gender;
   }

   public String getEmail()
   {
      return email;
   }

   public void setEmail(String email)
   {
      this.email = email;
   }

   public String getMobile()
   {
      return mobile;
   }

   public void setMobile(String mobile)
   {
      this.mobile = mobile;
   }

   public Date getBirthDate()
   {
      return birthDate;
   }

   public void setBirthDate(Date birthDate)
   {
      this.birthDate = birthDate;
   }

   public String getKnownLanguages()
   {
      return knownLanguages;
   }

   public void setKnownLanguages(String knownLanguages)
   {
      this.knownLanguages = knownLanguages;
   }

}