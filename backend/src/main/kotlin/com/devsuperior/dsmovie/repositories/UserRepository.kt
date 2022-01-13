package com.devsuperior.dsmovie.repositories

import com.devsuperior.dsmovie.entities.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : JpaRepository<User, Long>{
    fun findByEmail(email: String): User?
}