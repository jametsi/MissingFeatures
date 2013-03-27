
package com.missingfeatures.bibtext.repository;

import com.missingfeatures.bibtext.model.Reference;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface JpaReferenceRepository extends JpaRepository<Reference, Long> {
    
}
