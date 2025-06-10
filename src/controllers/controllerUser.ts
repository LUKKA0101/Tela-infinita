// Imports Prisma client and Express types
import { prisma } from '../helpers/prisma-helpers'
import { Request, Response } from 'express'

// Create a new user in the database
export const createUser = async (req: Request, res: Response) => {
    const {name, dateOfBirth, email} = req.body

    try {
        const userCreate = await prisma.user.create({
            data: {
                name,
                dateOfBirth: new Date(dateOfBirth),
                email
            }
        })
        // Return created user
        res.status(201).json({
            user: userCreate,
            message: "User created successfully"
        })
    } catch (error) {
        // Error creating user
        console.error(error)
        res.status(500).json({error: "error creating user"})
    }
}

// List all users from the database
export const listUser = async (req: Request, res: Response) => {
    try {
        const userGet = await prisma.user.findMany()
        res.status(200).json(userGet)
    } catch (error) {
        // Error fetching users
        console.error(error)
        res.status(500).json({error: "error searching for user"})
    }
}

// Update an existing user by ID
export const editUser = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const {name, dateOfBirth, email} = req.body

    try {
        const useredit = await prisma.user.update({
            where: {
                id
            },
            data: {
                name,
                dateOfBirth,
                email
            }
        })
        // Return success message
        res.status(200).json({useredit: "User updated successfully"})
    } catch (error) {
        // Error updating user
        console.error(error)
        res.status(500).json({error: "error editing user"})
    }
}

// Delete a user by ID
export const deleteUser = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    try {
        const userDelete = await prisma.user.delete({
            where: {
                id
            }
        })
        res.status(200).json({userDelete})
    } catch (error) {
        // Error deleting user
        console.error(error)
        res.status(500).json({error: "error deleting user"})
    }
}
