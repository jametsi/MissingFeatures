/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.missingfeatures.bibtext.controller;

import com.missingfeatures.bibtext.models.Book;
import com.missingfeatures.bibtext.service.ReferenceService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author jami
 */
@Controller
public class ReferenceController {
    
    @Autowired
    private ReferenceService service;
    
    @RequestMapping(value ="/rest", method = RequestMethod.GET, produces="application/json")
    @ResponseBody
    public List<Book> listReferences() { 
        return service.findAll();
    }
    
    @RequestMapping(value ="/rest", method = RequestMethod.POST, consumes="application/json")
    @ResponseBody
    public void add(@RequestBody Book reference) {
        service.create(reference);
    }
    
}
