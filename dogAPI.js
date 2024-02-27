async function fetchDogBreeds() {
    try {
        const response = await fetch('https://dogapi.dog/api/v2/breeds');
        
        // Check if the fetch request was successful
        if (!response.ok) {
            throw new Error('Failed to fetch dog breeds');
        }
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function fetchBreedDetails() {
    try {
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

async function fetchDogGroups() {
    try {
        const response = await fetch('https://dogapi.dog/api/v2/groups');
        
        // Check if the fetch request was successful
        if (!response.ok) {
            throw new Error('Failed to fetch dog groups');
        }
        
        // Parse the response body as JSON
        const parsedData = await response.json();

        // Access the 'name' attributes of each group and display
        parsedData.data.forEach(group => {
            console.log('Group Name:', group.attributes.name);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}


fetchDogBreeds();
fetchBreedDetails();
fetchDogFacts();
fetchDogGroups();