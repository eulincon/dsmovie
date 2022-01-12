package com.devsuperior.dsmovie.services

import com.devsuperior.dsmovie.dto.MovieDTO
import com.devsuperior.dsmovie.repositories.MovieRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class MovieService(
    private val movieRepository: MovieRepository
) {
    @Transactional(readOnly = true)
    fun findAll(pageable: Pageable): Page<MovieDTO> = movieRepository.findAll(pageable).map {
        MovieDTO(it)
    }

    @Transactional(readOnly = true)
    fun findById(id: Long): MovieDTO = movieRepository.findById(id).map { MovieDTO(it) }.get()

}

