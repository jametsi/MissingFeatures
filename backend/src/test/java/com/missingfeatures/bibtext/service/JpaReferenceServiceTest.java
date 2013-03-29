/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.missingfeatures.bibtext.service;

import com.missingfeatures.bibtext.models.Book;
import java.util.List;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author jami
 */
public class JpaReferenceServiceTest {
    
    private JpaReferenceService service;
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
        this.service = new JpaReferenceService();
    }
    
    @After
    public void tearDown() {
    }

    /**
     * Test of findAll method, of class JpaReferenceService.
     */
    @Test
    public void returnsEmptyListAfterCreation() {
        System.out.println("findAll");
        List resultList = this.service.findAll();
        assertEquals(0, resultList.size());
    }

    /**
     * Test of create method, of class JpaReferenceService.
     */
    @Test
    public void bookCanBeAdded() {
        System.out.println("create");
        Book book = new Book();
        this.service.create(book);
        
        List<Book> books = this.service.findAll();
        int referencySum = books.size();
        
        assertEquals(1, referencySum);
        
        book = books.get(0);
        Long bookId = book.getId();
        
        assertEquals((Long) 1L, bookId);
    }
}
