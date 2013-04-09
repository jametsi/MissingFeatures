/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.missingfeatures.bibtext.service;

import com.missingfeatures.bibtext.models.Book;
import java.util.List;

/**
 *
 * @author jami
 */
public interface ReferenceService {

    void create(Book reference);

    List<Book> findAll();
    
}
