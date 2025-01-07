document.addEventListener('DOMContentLoaded', () => {

async function weather(location){

    try{
    const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+location+'?key=CFZ6NVQY9YNXMWP9BUQFZE9BS')
    
    const data =  await response.json()
    console.log(data)
    return { Conditions: data.currentConditions , days: data.days }
    }
    catch(err){
        console.log(err)
    }
}

// uvindex , visibility, humidity , days array - temp min and max and icons


const form = document.getElementById('location'); // Assuming this is a <form>
form.addEventListener('submit' , (event) => {
    event.preventDefault(); // Prevent form from reloading the page
    weatherData();
    
});





async function weatherData(){
    const inputLocation = document.querySelector('#location input'); // Select the input inside the form
    
    const current = await weather(inputLocation.value);
    const days = current.days;
    const currentConditions = current.Conditions;
    const uvindex = document.createElement('p');
    const uvindexText = document.createElement('h2')
    uvindexText.textContent ='UV Index';
    uvindex.textContent = currentConditions.uvindex + ' UV';
    
    const div = document.createElement('div')
        div.className = 'divContainer'
        div.id = 'uvindex'
        document.getElementById('weather').appendChild(div);
        div.appendChild(uvindexText);
        div.appendChild(uvindex);
    

    const visibility = document.createElement('p');
    const visibilityText = document.createElement('h2')
    visibilityText.textContent ='Visibility';
    visibility.textContent = currentConditions.visibility + ' m';
    const div11 = document.createElement('div')
        div11.className = 'divContainer'
        div11.id = 'visibility'
        document.getElementById('weather').appendChild(div11);
        div11.appendChild(visibilityText)
        div11.appendChild(visibility)
        

    const humidity = document.createElement('p');
    const humidityText = document.createElement('h2')
    humidityText.textContent ='Humidity';
    humidity.textContent = currentConditions.humidity + ' %';
    const div21 = document.createElement('div')
        div21.className ='divContainer'
        div21.id = 'humidity'
        document.getElementById('weather').appendChild(div21);
        div21.appendChild(humidityText)
        div21.appendChild(humidity)




// Array of weekday names
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];








        days.slice(0, 7).forEach((day, index)=> {

            // Parse the date string into a Date object
const date = new Date(day.datetime);

// Get the day of the week (0 for Sunday, 1 for Monday, etc.)
const dayOfWeek = date.getDay();

// Get the name of the day
const dayName = daysOfWeek[dayOfWeek];

const day1 = document.createElement('h2');
day1.textContent = dayName;

            const div = document.createElement('div')
        div.className ='divContainer';
        const tempmin = document.createElement('p');
        tempmin.textContent = 'Min temp ' + day.tempmin
        const tempmax = document.createElement('p');
        tempmax.textContent = 'Max temp ' + day.tempmax
        document.getElementById('days').appendChild(div);
        div.appendChild(day1);
        div.appendChild(tempmin)
        div.appendChild(tempmax)

        
        
        });

}

});