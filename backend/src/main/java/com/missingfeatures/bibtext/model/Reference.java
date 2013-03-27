/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.missingfeatures.bibtext.model;

/**
 *
 * @author jami
 */
public interface Reference {

    String getAuthor();

    String getPublisher();

    String getTitle();

    String getYear();

    void setAuthor(String author);

    void setPublisher(String publisher);

    void setTitle(String title);

    void setYear(String year);
    
}
