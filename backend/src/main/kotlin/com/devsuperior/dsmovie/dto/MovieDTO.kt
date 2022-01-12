package com.devsuperior.dsmovie.dto

import com.devsuperior.dsmovie.entities.Movie

data class MovieDTO(
    var id: Long,
    var title: String,
    var score: Double,
    var count: Int,
    var image: String
){
    constructor(movie: Movie) : this(movie.id, movie.title, movie.score, movie.count, movie.image)
}