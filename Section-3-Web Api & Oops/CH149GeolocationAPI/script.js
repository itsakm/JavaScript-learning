//getCurrent Position
function curSuccess(pos)
{
    const coords = pos.coords;

    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longitude: ${coords.longitude}`);
    console.log(`within: ${coords.accuracy} meters`);
}

function curError(err)
{
    console.log(`Error: ${err.code} - ${err.message}`);
}

const options = {
    enableHighAccuracy:true, //use GPS
    timeout: 5000,// time to wait to stop trying for location
    maximumAge: 0,//do not use a cached position 
};
navigator.geolocation.getCurrentPosition(curSuccess,curError,options);


//watch positions

const target = {
    latitude: 41.383483,
    longitude: -71.39373
}
function watchSuccess(pos)
{
    const coords = pos.coords;
    if(target.latitude === coords.latitude && target.longitude === coords.longitude)
    {
        console.log('You have reached your location');
    }
}

function watchError(err)
{
    console.log(`Error: ${err.code} - ${err.message}`);
}

const watchoptions = {
    enableHighAccuracy:true, //use GPS
    timeout: 5000,// time to wait to stop trying for location
    maximumAge: 0,//do not use a cached position 
};
navigator.geolocation.getCurrentPosition(watchSuccess,watchError,watchoptions);


