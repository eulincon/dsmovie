package com.devsuperior.dsmovie.repositories

import com.devsuperior.dsmovie.entities.Score
import com.devsuperior.dsmovie.entities.ScorePK
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ScoreRepository : JpaRepository<Score, ScorePK>