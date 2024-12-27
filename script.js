import { jsonData } from "./file.js";

const parseTimeStamp = function(timestamp) {
    return new Date(timestamp)
}

for(const course of jsonData){
    console.log(`Curso: ${course.id} - ${course.title}:`)
    for(const lesson of course.lessons) {   
        console.log(`   Aula: ${lesson.id} - ${lesson.title}`)
        console.log(`       Média: ${lesson.media}`)
        console.log(`       TimeStamp: ${parseTimeStamp(lesson.timestamp)}`)
    }
}