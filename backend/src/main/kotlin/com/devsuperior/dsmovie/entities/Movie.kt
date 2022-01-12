package com.devsuperior.dsmovie.entities

import javax.persistence.*

@Entity
@Table(name = "tb_movie")
data class Movie(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private val id: Long,
    private val title: String,
    private val score: Double,
    private val count: Int,
    private val image: String
)