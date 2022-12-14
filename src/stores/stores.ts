/*eslint-disable prefer-const*/

import { writable } from "svelte/store"

interface IUserProject{
    owner: string
    collaborators: []
    _id: string
    secrets: string
    name: string
}

let userProjectsArray : IUserProject[] = []
export const projects = writable(userProjectsArray)

let userSecretsArray: { key:string, value:string }[] = []
export const secrets = writable(userSecretsArray)