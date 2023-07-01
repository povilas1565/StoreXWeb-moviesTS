export class movieCreateInputs {
    name!: string
    description!: string
    image!: File
    category_id!: number
}

export class movieUpdateInputs extends movieCreateInputs{
    _method!: string 
}