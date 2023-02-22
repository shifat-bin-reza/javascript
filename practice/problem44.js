let data = {
    location: [
        {
            latitude: '34.5, 37.5',
            longitude: '98.77, 58.7',
            city: 'Dhaka',
            country: 'Bangladesh'
        },

        {
            latitude: '34.5, 37.5',
            longitude: '98.77, 58.7',
            city: 'Rajshahi',
            country: 'Bangladesh'
        },

        {
            latitude: '34.5, 37.5',
            longitude: '98.77, 58.7',
            city: 'Khulna',
            country: 'Bangladesh'
        }
    ]
};


for(let i=0; i<data.location.length; i++) {
    console.log(data.location[i].city);
    console.log(data.location[i].country);
}   