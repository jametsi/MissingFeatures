/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.missingfeatures.bibtext.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Book {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    private String author;
    private String title;
    private String publisher;
    private String pubYear;
    
    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getPublisher() {
        return publisher;
    }
    
    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }
    
    public String getYear() {
        return pubYear;
    }
    
    public void setYear(String year) {
        this.pubYear = year;
    }
    
}