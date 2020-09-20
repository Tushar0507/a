const request=require('request')



const url="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidHVzaGFyMTgiLCJhIjoiY2tmNWlnZjQxMGh5ajM0bGMyeXM1ejhwYSJ9.9v-C5gJbb9pP87TY2wcu-w&limit=1"

request({url:url, json:true} , (error,response) =>
{
 console.log('the lan is ' + response.body.features[0].center[1] +' & the lon is ' + response.body.features[0].center[0] )
})