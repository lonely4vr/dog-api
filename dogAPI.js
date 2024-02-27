
//PART 1 - fetch a list of dog breeds
async function fetchDogBreeds() {
    try {
        const response = await fetch('https://dogapi.dog/api/v2/breeds');
        
        // PART 2 - Handle Validations
        if (!response.ok) {
            throw new Error('Failed to fetch dog breeds');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

//PART 3 - Displaying detailed breed information
async function fetchBreedDetails() {
    try {
        // using a specific example with the breed id
        const response = await fetch(`https://dogapi.dog/api/v2/breeds/4ddbe251-72af-495e-8e9d-869217e1d92a`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch breed details');
        }
        const data = await response.json();
        console.log('Breed Name:', data.data.attributes.name);
        console.log('Description:', data.data.attributes.description);
        console.log('Life Min:', data.data.attributes.life.min);
        console.log('Life Max:', data.data.attributes.life.max);
    } catch (error) {
        console.error('Error:', error);
    }
}

//PART 5 - fetch and display a list of random dog facts
async function fetchDogFacts(){
    try {
        const response = await fetch('https://dogapi.dog/api/v2/facts');
        
        // Check if the fetch request was successful
        if (!response.ok) {
            throw new Error('Failed to fetch dog facts');
        }
        
        const data = await response.json();
        console.log('Random fact:', data.data[0].attributes.body);
    } catch (error) {
        console.error('Error:', error);
    }
}

//PART 5 - fetch and display a list of dog groups
async function fetchDogGroups() {
    try {
        const response = await fetch('https://dogapi.dog/api/v2/groups');
        
        if (!response.ok) {
            throw new Error('Failed to fetch dog groups');
        }
        
        // Parse the response body as JSON
        const parsedData = await response.json();
        parsedData.data.forEach(group => {
            console.log('Group Name:', group.attributes.name);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

//function calls
fetchDogBreeds();
fetchBreedDetails();
fetchDogFacts();
fetchDogGroups();