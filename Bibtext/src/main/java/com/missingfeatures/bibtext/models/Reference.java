/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.missingfeatures.bibtext.models;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Reference implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String bibtextID;
    private String type;
    private String author;
    private String title;
    private String booktitle;
    private String publisher;
    private int pubYear;
    private String pages;
    private String address;
    private String articleJournal;
    private String articleVolume;
    private String articleNumber;

    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }
    
    public void setType(String type){
        this.type=type;
    }
    
    public String getType(){
        return type;
    }

    /**
     * @return the author
     */
    public String getAuthor() {
        return author;
    }

    /**
     * @param author the author to set
     */
    public void setAuthor(String author) {
        this.author = author;
    }

    /**
     * @return the title
     */
    public String getTitle() {
        return title;
    }

    /**
     * @param title the title to set
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * @return the booktitle
     */
    public String getBooktitle() {
        return booktitle;
    }

    /**
     * @param booktitle the booktitle to set
     */
    public void setBooktitle(String booktitle) {
        this.booktitle = booktitle;
    }

    /**
     * @return the publisher
     */
    public String getPublisher() {
        return publisher;
    }

    /**
     * @param publisher the publisher to set
     */
    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    /**
     * @return the pubYear
     */
    public int getPubYear() {
        return pubYear;
    }

    /**
     * @param pubYear the pubYear to set
     */
    public void setPubYear(int pubYear) {
        this.pubYear = pubYear;
    }

    /**
     * @return the bibtextID
     */
    public String getBibtextID() {
        return bibtextID;
    }

    /**
     * @param bibtextID the bibtextID to set
     */
    public void setBibtextID(String bibtextID) {
        this.bibtextID = bibtextID;
    }

    /**
     * @return the pages
     */
    public String getPages() {
        return pages;
    }

    /**
     * @param pages the pages to set
     */
    public void setPages(String pages) {
        this.pages = pages;
    }

    /**
     * @return the address
     */
    public String getAddress() {
        return address;
    }

    /**
     * @param address the address to set
     */
    public void setAddress(String address) {
        this.address = address;
    }

    /**
     * @return the articleJournal
     */
    public String getArticleJournal() {
        return articleJournal;
    }

    /**
     * @param articleJournal the articleJournal to set
     */
    public void setArticleJournal(String articleJournal) {
        this.articleJournal = articleJournal;
    }

    /**
     * @return the articleVolume
     */
    public String getArticleVolume() {
        return articleVolume;
    }

    /**
     * @param articleVolume the articleVolume to set
     */
    public void setArticleVolume(String articleVolume) {
        this.articleVolume = articleVolume;
    }

    /**
     * @return the articleNumber
     */
    public String getArticleNumber() {
        return articleNumber;
    }

    /**
     * @param articleNumber the articleNumber to set
     */
    public void setArticleNumber(String articleNumber) {
        this.articleNumber = articleNumber;
    }
    
    
    
   
}