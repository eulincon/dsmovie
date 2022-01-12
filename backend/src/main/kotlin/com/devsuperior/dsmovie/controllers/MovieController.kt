package com.devsuperior.dsmovie.controllers

import com.devsuperior.dsmovie.dto.MovieDTO
import com.devsuperior.dsmovie.services.MovieService
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/movies")
class MovieController(
    private val movieService: MovieService
) {
    @GetMapping
    fun findAll(pageable: Pageable): Page<MovieDTO> =
        movieService.findAll(pageable)

    @GetMapping("/{id}")
    fun findAll(@PathVariable id: Long): MovieDTO =
        movieService.findById(id)
}