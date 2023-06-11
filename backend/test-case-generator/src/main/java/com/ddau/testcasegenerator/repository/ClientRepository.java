package com.ddau.testcasegenerator.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ddau.testcasegenerator.model.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
