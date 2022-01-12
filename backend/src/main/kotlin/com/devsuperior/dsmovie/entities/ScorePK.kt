package com.devsuperior.dsmovie.entities

import java.io.Serializable
import javax.persistence.Embeddable
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne

@Embeddable
data class ScorePK(
    @ManyToOne
    @JoinColumn(name = "movie_id")
    var movie: Movie?,
    @ManyToOne
    @JoinColumn(name = "user_id")
    var user: User?
) : Serializable {
    companion object {
        private const val serialVersionUID = 3616388346451507264L
    }
}