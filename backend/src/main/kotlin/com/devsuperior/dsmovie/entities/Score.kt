package com.devsuperior.dsmovie.entities

import javax.persistence.EmbeddedId
import javax.persistence.Entity
import javax.persistence.Table

@Entity
@Table(name = "tb_score")
class Score(
    @EmbeddedId
    var id: ScorePK = ScorePK(),
    var value: Double
){
    fun setMovie(movie: Movie) {
        id.movie = movie
    }

    fun setUser(user: User){
        id.user = user
    }
}