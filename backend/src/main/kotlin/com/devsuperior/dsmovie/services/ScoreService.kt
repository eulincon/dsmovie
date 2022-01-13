package com.devsuperior.dsmovie.services

import com.devsuperior.dsmovie.dto.MovieDTO
import com.devsuperior.dsmovie.dto.ScoreDTO
import com.devsuperior.dsmovie.entities.Movie
import com.devsuperior.dsmovie.entities.Score
import com.devsuperior.dsmovie.entities.ScorePK
import com.devsuperior.dsmovie.entities.User
import com.devsuperior.dsmovie.repositories.MovieRepository
import com.devsuperior.dsmovie.repositories.ScoreRepository
import com.devsuperior.dsmovie.repositories.UserRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class ScoreService(
    private val movieRepository: MovieRepository,
    private val scoreRepository: ScoreRepository,
    private val userRepository: UserRepository
) {

    @Transactional
    fun saveScore(dto: ScoreDTO): MovieDTO {
        var user = userRepository.findByEmail(dto.email)
        if(user == null){
            user = User(email = dto.email)
            user = userRepository.saveAndFlush(user)
        }

        var movie = movieRepository.findById(dto.movieId).get()
        var score = Score(ScorePK(movie, user), dto.score)

        score = scoreRepository.saveAndFlush(score)
        var sum = 0.0
        movie.scores.forEach {
            sum += it.value!!
        }

        val avg = sum / movie.scores.size

        movie.score = avg
        movie.count = movie.scores.size

        movie = movieRepository.save(movie)

        return MovieDTO(movie)
    }
}

