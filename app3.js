const request=require('request')

// const url ='http://api.weatherstack.com/current?access_key=56aae10e07f8fb6d15b396f070d72c14&query=22.7196,75.8577&units=f'



// request({ url:url , json:true},(error, response) =>{
//  // console.log(response.body.current.weather_descriptions)
//  if(error){
//        console.log('error in network connection')
//  }else if(response.body.error)
//  {
//   console.log('error in given data')
//  }else
//  console.log(response.body.current.weather_descriptions[0] +' it is currently ' + response.body.current.temperature + ' degree out. it feels like ' +response.body.current.feelslike+ ' degree out')
// })


const geourl="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidHVzaGFyMTgiLCJhIjoiY2tmNWlnZjQxMGh5ajM0bGMyeXM1ejhwYSJ9.9v-C5gJbb9pP87TY2wcu-w&limit=1"

request({url:geourl, json:true} , (error,response) =>
{
 if(error){
  console.log('error in network connection')
}else if(response.body.features.length === 0)
{
console.log('error in given data')
}else{
 console.log('the lan is ' + response.body.features[0].center[1] +' & the lon is ' + response.body.features[0].center[0] )
}
})
