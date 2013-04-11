
package com.missingfeatures.bibtext.repositories;

import com.missingfeatures.bibtext.models.Reference;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface JpaReferenceRepository extends JpaRepository<Reference, Long> {
    
}
