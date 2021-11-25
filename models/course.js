const {v4 : uuid} = require('uuid')
const fs = require('fs')
const path = require('path')
const { resolve } = require('path')
const { rejects } = require('assert')

class Course{
    constructor(title, price, img){
        this.title = title
        this.price = price
        this.img = img,
        this.id = uuid()
    }

    toJSON(){
        return{
            title: this.title,
            price: this.price,
            img: this.img,
            id: this.id,
        }
    }

    async save(){
        const courses = await Course.getAll()
        courses.push(this.toJSON)


        return new Promise((resolve, reject) =>{
            fs.writeFile((resolve, reject) =>{
                path.json(__dirname, '..', 'data', 'courses.json'),
                JSON.stringify(courses),
                (err) => {
                    if (err){
                        reject(err)
                    }
                }
            })
        }) 
    }
}