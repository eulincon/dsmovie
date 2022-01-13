package com.devsuperior.dsmovie.entities

import java.io.Serializable
import javax.persistence.Embeddable
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne

@Embeddable
class ScorePK(
    @ManyToOne
    @JoinColumn(name = "movie_id")
    var movie: Movie? = null,
    @ManyToOne
    @JoinColumn(name = "user_id")
    var user: User? = null
) : Serializable {
    companion object {
        private const val serialVersionUID = 3616388346451507264L
    }
}