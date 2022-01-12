package com.devsuperior.dsmovie.entities

import javax.persistence.*

@Entity
@Table(name = "tb_user")
data class User(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,
    val email: String
)