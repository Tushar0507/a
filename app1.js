const request=require('request')

const url ='http://api.weatherstack.com/current?access_key=56aae10e07f8fb6d15b396f070d72c14&query=22.7196,75.8577&units=f'

// request( { url : url}, (error , response) =>{
//  const data= JSON.parse(response.body)
//  console.log(data.current)
// })

request({ url:url , json:true},(error, response) =>{
 // console.log(response.body.current.weather_descriptions)
 console.log(response.body.current.weather_descriptions[0] +' it is currently ' + response.body.current.temperature + ' degree out. it feels like ' +response.body.current.feelslike+ ' degree out')
})
