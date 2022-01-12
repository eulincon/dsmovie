package com.devsuperior.dsmovie.entities

import javax.persistence.*

@Entity
@Table(name = "tb_movie")
data class Movie(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,
    val title: String,
    val score: Double,
    val count: Int,
    val image: String
)