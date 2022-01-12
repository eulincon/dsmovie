package com.devsuperior.dsmovie.entities

import javax.persistence.EmbeddedId
import javax.persistence.Entity
import javax.persistence.Table

@Entity
@Table(name = "tb_score")
data class Score(
    @EmbeddedId
    val id: ScorePK = ScorePK(null, null),
    val value: Double
){
    fun setMovie(movie: Movie) {
        id.movie = movie
    }

    fun setUser(user: User){
        id.user = user
    }
}