/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.missingfeatures.bibtext.service;

import com.missingfeatures.bibtext.models.Book;
import java.util.List;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 *
 * @author jami
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"file:src/main/webapp/WEB-INF/applicationContext.xml"})

public class ReferenceServiceTest {
    
    @Autowired
    private ReferenceService service;

    /**
     * Test of findAll method, of class JpaReferenceService.
     */
    @Test
    public void returnsEmptyListAfterCreation() {
        System.out.println("findAll");
        List resultList = this.service.findAll();
        System.out.println("Resultlist: "+resultList);
        assertEquals(0, resultList.size());
    }

    /**
     * Test of create method, of class JpaReferenceService.
     */
    @Test
    public void bookCanBeAdded() {
        System.out.println("create");
        
        Book book = new Book();
        book.setAuthor("Jami Karvanen");
        book.setTitle("Oma kirja");
        book.setPublisher("Otava");
        book.setPubYear("2013");

        this.service.create(book);
        
        List<Book> books = this.service.findAll();
        int referencySum = books.size();
        
        assertEquals(1, referencySum);
        
        book = books.get(0);
        Long bookId = book.getId();
        String bookAuthor = book.getAuthor();
        
        assertEquals((Long) 1L, bookId);
        assertEquals("Jami Karvanen", bookAuthor);
    }
}
