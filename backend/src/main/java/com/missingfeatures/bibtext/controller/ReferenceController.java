/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.missingfeatures.bibtext.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author jami
 */
public class ReferenceController {
    
    @Autowired
    private ReferenceService service;
    
    @RequestMapping(value ="/reference/", method = RequestMethod.GET, produces="application/json")
    @ResponseBody
    public List<Reference> listReferences() {        
        return service.findAll();
    }
    
    @RequestMapping(value ="/", method = RequestMethod.POST, consumes="application/json")
    @ResponseBody
    public void add(@RequestBody Survey survey) {
        service.create(survey);
    }
    
}
