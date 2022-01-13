package com.devsuperior.dsmovie.entities

import javax.persistence.*

@Entity
@Table(name = "tb_user")
class User(
    @field:Id
    @field:GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    var email: String
)