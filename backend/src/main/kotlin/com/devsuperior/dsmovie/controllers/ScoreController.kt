package com.devsuperior.dsmovie.controllers

import com.devsuperior.dsmovie.dto.MovieDTO
import com.devsuperior.dsmovie.dto.ScoreDTO
import com.devsuperior.dsmovie.services.MovieService
import com.devsuperior.dsmovie.services.ScoreService
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/scores")
class ScoreController(
    private val scoreService: ScoreService
) {
    @PutMapping()
    fun saveScore(@RequestBody dto: ScoreDTO): MovieDTO =
        scoreService.saveScore(dto)
}