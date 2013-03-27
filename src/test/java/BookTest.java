/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

import com.missingfeatures.bibtext.model.Book;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author ville
 */
public class BookTest {
    
    private Book book;
    private double errorMargin = 0.01;
    
    @Before
    public void setUp() {
    }
    
    @Test
    public void bookConstructorTest() {
        String author = "Hemingway";
        String title = "Something really manly";
        String publisher = "An important publishing company";
        String year = "1969";
        
        book = new Book(author, title, publisher, year);
        assertEquals(author, book.getAuthor());
        assertEquals(title, book.getTitle());
        assertEquals(publisher, book.getPublisher());
        assertEquals(year, book.getYear());
    }
    
    @After
    public void tearDown() {
    }
    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
    // @Test
    // public void hello() {}
}