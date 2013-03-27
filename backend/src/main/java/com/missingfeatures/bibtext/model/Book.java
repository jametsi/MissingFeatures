/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.missingfeatures.bibtext.model;

/**
 *
 * @author ville
 */
public class Book {
    private String author;
    private String title;
    private String publisher;
    private String year;

    public Book(String author, String title, String publisher, String year) {
        this.author = author;
        this.title = title;
        this.publisher = publisher;
        this.year = year;
     
    }

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
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }
    
}