/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.missingfeatures.bibtext.service;

import com.missingfeatures.bibtext.models.Reference;
import java.util.List;

/**
 *
 * @author jami
 */
public interface ReferenceService {

    void create(Reference reference);

    List<Reference> findAll();
    
}
