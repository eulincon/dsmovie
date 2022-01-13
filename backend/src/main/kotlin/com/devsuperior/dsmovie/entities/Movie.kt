package com.devsuperior.dsmovie.entities

import javax.persistence.*

@Entity
@Table(name = "tb_movie")
class Movie(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long,
    var title: String,
    var score: Double,
    var count: Int,
    var image: String,
    @OneToMany(mappedBy = "id.movie")
    var scores: Set<Score> = hashSetOf()
)