/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.missingfeatures.bibtext.service;

import com.missingfeatures.bibtext.models.Reference;
import com.missingfeatures.bibtext.repositories.JpaReferenceRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author jami
 */
@Service
public class JpaReferenceService implements ReferenceService {
    
    @Autowired
    private JpaReferenceRepository repository;
    
    @Override
    public List<Reference> findAll() {
        return repository.findAll();
    }
    
    @Override
    public void create(Reference reference) {
        repository.save(reference);
    }
    
}
