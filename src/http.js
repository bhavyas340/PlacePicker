export async function fetchAvailablePlaces(){
    const response =  await fetch('http://localhost:3000/places');
    const resData = await response.json();


    if(!response.ok){
      throw new Error('Failed to Fetch Places')
    }

    return resData.places;
}

export async function fetchUserPlaces(){
    const response =  await fetch('http://localhost:3000/user-places');
    const resData = await response.json();


    if(!response.ok){
      throw new Error('Failed to Fetch user Places')
    }

    return resData.places;
}

export async function updateUserPlaces(places){
   const response = await fetch('http://localhost:3000/user-places',
        {
            method:'PUT',
            body: JSON.stringify({places}),
            headers:{
                'Content-Type':'application/json'
            }
        }
    )
    const resData = await response.json();

    if(!response.ok){
        throw new Error('Failed to Update user Data.')
    }

    return resData.message;
}