// Import Prisma client and Express types
import {prisma} from '../helpers/prisma-helpers'
import {Request, Response} from 'express'

// Create a new movie in the database
export const createMovie = async (req: Request, res: Response) => {
    const {name, description, releaseDate, trailer, poster} = req.body

    try {
        const MovieCreate = await prisma.movie.create({
            data: {
                name,
                description,
                releaseDate,
                trailer,
                poster
            }
        })
        res.status(201).json(MovieCreate)
    } catch (error) {
        // Error creating movie
        console.error(error)
        res.status(500).json({error: "error creating movie"})
    }
}

// List all movies from the database
export const listmovie = async (req: Request, res: Response) => {
    try {
        const movieList = await prisma.movie.findMany()
        res.status(200).json(movieList)
    } catch (error) {
        // Error listing movies
        console.error(error)
        res.status(500).json({error: "Error movie list"})
    }
}

// Update a movie by ID
export const editMovie = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const {name, description, releaseDate, trailer, poster} = req.body

    try {
        const movieEdit = await prisma.movie.update({
            where: {
                id
            },
            data: {
                name,
                description,
                releaseDate,
                trailer,
                poster
            }
        })
        res.status(200).json(movieEdit)
    } catch (error){
        // Error editing movie
        console.error(error)
        res.status(500).json({error: "Error movie edit"})
    }
}

// Delete a movie by ID
export const deletemovie = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    try {
        const movieDelete = await prisma.movie.delete({
            where: {
                id
            }
        })
        res.status(200).json({movieDelete})
    } catch (error) {
        // Error deleting movie
        console.error(error)
        res.status(500).json({error: "error deleting user"})
    }
}
